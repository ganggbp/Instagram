import {ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {userFollowers} from './queries';
import {UserFollowersQuery, UserFollowersQueryVariables} from '../../API';
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage';
import UserListItem from '../../components/UserListItem/UserListItem';

interface UserFollowersScreenProps {
  userId: string;
}

const UserFollowersScreen = ({userId}: UserFollowersScreenProps) => {
  const {data, loading, error, refetch} = useQuery<
    UserFollowersQuery,
    UserFollowersQueryVariables
  >(userFollowers, {variables: {followeeID: userId}});

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <ApiErrorMessage
        title="Error fetching followers"
        message={error?.message}
      />
    );
  }

  const users =
    data?.userFollowers?.items
      ?.filter(item => !item?._deleted)
      .map(i => i?.Follower) || [];

  return (
    <FlatList
      data={users}
      renderItem={({item}) => item && <UserListItem user={item} />}
      onRefresh={() => refetch()}
      refreshing={loading}
    />
  );
};

export default UserFollowersScreen;
