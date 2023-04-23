import {useMutation, useQuery} from '@apollo/client';
import {
  CreateCommentMutation,
  CreateCommentMutationVariables,
  CreateNotificationMutation,
  CreateNotificationMutationVariables,
  GetPostQuery,
  GetPostQueryVariables,
  UpdatePostMutation,
  UpdatePostMutationVariables,
} from '../../API';
import {
  createComment,
  createNotification,
  getPost,
  updatePost,
} from './queries';
import {useAuthContext} from '../../contexts/AuthContext';
import {Alert} from 'react-native';
import {NotificationTypes} from '../../models';

const useCommentsService = (postId: string) => {
  const {userId} = useAuthContext();

  const {data: postData} = useQuery<GetPostQuery, GetPostQueryVariables>(
    getPost,
    {variables: {id: postId}},
  );

  const post = postData?.getPost;

  const [doUpdatePost] = useMutation<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >(updatePost);

  const [doCreateComment] = useMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(createComment);

  const [doCreateNotification] = useMutation<
    CreateNotificationMutation,
    CreateNotificationMutationVariables
  >(createNotification);

  const incrementNofComments = (amount: 1 | -1) => {
    if (!post) {
      Alert.alert('Failed to load post. Try again later');
      return;
    }

    doUpdatePost({
      variables: {
        input: {
          id: post.id,
          _version: post._version,
          nofComments: post.nofComments + amount,
        },
      },
    });
  };

  const onCreateComment = async (newComment: string) => {
    if (!post) {
      Alert.alert('Failed to load post. Try again later');
      return;
    }

    try {
      const response = await doCreateComment({
        variables: {
          input: {
            postID: post.id,
            userID: userId,
            comment: newComment,
          },
        },
      });

      await doCreateNotification({
        variables: {
          input: {
            type: NotificationTypes.NEW_COMMENT,
            userId: post.userID,
            actorId: userId,
            notificationPostId: post.id,
            notificationCommentId: response.data?.createComment?.id,
            readAt: 0,
          },
        },
      });

      incrementNofComments(1);
    } catch (e) {
      Alert.alert('Error submitting the comment', (e as Error).message);
    }
  };

  return {
    onCreateComment,
  };
};

export default useCommentsService;
