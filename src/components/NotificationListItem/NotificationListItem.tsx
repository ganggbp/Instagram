import {Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Notification} from '../../models';
import UserImage from '../UserImage';
import {S3Image} from 'aws-amplify-react-native';
import {useNavigation} from '@react-navigation/native';

interface NotificationListItemProps {
  notification: Notification;
}

const NOTIFICATION_TEXT = {
  NEW_FOLLOWER: 'started following you.',
  NEW_LIKE: 'liked your post.',
  NEW_COMMENT: 'wrote a new comment',
};

const NotificationListItem = ({notification}: NotificationListItemProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('UserProfile', {
      screen: 'Profile',
      params: {userId: notification.Actor?.id},
    });
  };

  const navigateToPost = () => {
    if (notification.notificationPostId) {
      navigation.navigate('Post', {id: notification.notificationPostId});
    }
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <UserImage imageKey={notification.Actor?.image} width={40} />
      <Text>
        <Text style={{fontWeight: 'bold'}}>{notification.Actor?.username}</Text>{' '}
        {NOTIFICATION_TEXT[notification.type]}
      </Text>
      {notification.Post?.image && (
        <Pressable onPress={navigateToPost} style={{marginLeft: 'auto'}}>
          <S3Image imgKey={notification.Post?.image} style={styles.image} />
        </Pressable>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default NotificationListItem;
