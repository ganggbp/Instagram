import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {useQuery} from '@apollo/client';
import {GetPostQuery, GetPostQueryVariables} from '../../API';
import {getPost} from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import FeedPost from '../../components/FeedPost';

const PostScreen = () => {
  const route = useRoute();

  console.log(route.params?.id);

  const {data, loading, error} = useQuery<GetPostQuery, GetPostQueryVariables>(
    getPost,
    {variables: {id: route.params?.id || ''}},
  );

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return (
      <ApiErrorMessage
        title="Error fetching the post"
        message={error.message}
      />
    );
  }

  return (
    <ScrollView>
      <FeedPost post={data?.getPost} />
    </ScrollView>
  );
};

export default PostScreen;
