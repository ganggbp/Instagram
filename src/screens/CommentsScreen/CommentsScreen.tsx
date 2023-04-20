import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
} from 'react-native';

import React, {useState} from 'react';
import Comment from '../../components/Comment';
import Input from './Input';
import {useRoute} from '@react-navigation/native';
import {CommentsRouteProp} from '../../types/navigation';
import {useQuery} from '@apollo/client';
import {commentsByPost} from './queries';
import {
  CommentsByPostQuery,
  CommentsByPostQueryVariables,
  ModelSortDirection,
} from '../../API';
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage';

const CommentsScreen = () => {
  const route = useRoute<CommentsRouteProp>();
  const {postId} = route.params;

  const {data, loading, error, fetchMore} = useQuery<
    CommentsByPostQuery,
    CommentsByPostQueryVariables
  >(commentsByPost, {
    variables: {
      postID: postId,
      sortDirection: ModelSortDirection.DESC,
      limit: 20,
    },
  });

  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const comments = data?.commentsByPost?.items.filter(
    comment => !comment?._deleted,
  );

  const nextToken = data?.commentsByPost?.nextToken;

  const loadMore = async () => {
    if (!nextToken || isFetchingMore) {
      return;
    }

    setIsFetchingMore(true);

    await fetchMore({variables: {nextToken}});

    setIsFetchingMore(false);
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <ApiErrorMessage
        title="Error fetching comments"
        message={error.message}
      />
    );
  }
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails />}
        contentContainerStyle={{padding: 10}}
        style={{flex: 1}}
        ListEmptyComponent={() => (
          <Text>No comments. Be the first comment</Text>
        )}
        inverted
        onEndReached={() => loadMore()}
      />

      <Input postId={postId} />
    </KeyboardAvoidingView>
  );
};

export default CommentsScreen;
