import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {likesForPostByUser} from './queries';
import {
  LikesForPostByUserQuery,
  LikesForPostByUserQueryVariables,
} from '../../API';
import {useRoute} from '@react-navigation/native';
import {PostLikesRouteProp} from '../../types/navigation';
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage';
import {FlatList} from 'react-native';
import UserListItem from '../../components/UserListItem/UserListItem';

const PostLikeScreen = () => {
  const route = useRoute<PostLikesRouteProp>();
  const {id} = route.params;

  const {data, loading, error, refetch} = useQuery<
    LikesForPostByUserQuery,
    LikesForPostByUserQueryVariables
  >(likesForPostByUser, {variables: {postID: id}});

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <ApiErrorMessage title="Error fetching likes" message={error.message} />
    );
  }

  const likes =
    data?.likesForPostByUser?.items.filter(like => !like?._deleted) || [];

  return (
    <FlatList
      data={likes}
      renderItem={({item}) => <UserListItem user={item?.User} />}
      refreshing={loading}
      onRefresh={refetch}
    />
  );
};

export default PostLikeScreen;
