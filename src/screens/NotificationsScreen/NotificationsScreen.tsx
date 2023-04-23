import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import {updateNotification, userNotifications} from './queries';
import {
  ModelSortDirection,
  UpdateNotificationMutation,
  UpdateNotificationMutationVariables,
  UserNotificationsQuery,
  UserNotificationsQueryVariables,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage';
import NotificationListItem from '../../components/NotificationListItem/NotificationListItem';

const NotificationsScreen = () => {
  const {userId} = useAuthContext();

  const {data, loading, error, refetch} = useQuery<
    UserNotificationsQuery,
    UserNotificationsQueryVariables
  >(userNotifications, {
    variables: {userId, sortDirection: ModelSortDirection.DESC},
  });

  const notifications = (data?.userNotifications?.items || []).filter(
    item => !item?._deleted,
  );

  const [doUpdateNotification] = useMutation<
    UpdateNotificationMutation,
    UpdateNotificationMutationVariables
  >(updateNotification);

  useEffect(() => {
    const readNotification = async () => {
      const unreadNotifications = notifications.filter(n => !n?.readAt);

      await Promise.all(
        unreadNotifications.map(
          notification =>
            notification &&
            doUpdateNotification({
              variables: {
                input: {
                  id: notification?.id,
                  _version: notification?._version,
                  readAt: new Date().getTime(),
                },
              },
            }),
        ),
      );
    };

    readNotification();
  }, [notifications]);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <ApiErrorMessage
        title="Error fetching notifications"
        message={error.message}
      />
    );
  }

  return (
    <FlatList
      data={notifications}
      renderItem={({item}) => <NotificationListItem notification={item} />}
      onRefresh={refetch}
      refreshing={loading}
      ListEmptyComponent={() => (
        <Text style={{margin: 10}}>
          There are no notification at this moment
        </Text>
      )}
    />
  );
};

export default NotificationsScreen;
