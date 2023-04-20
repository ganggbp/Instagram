import {View, StyleSheet, TextInput, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  CreateNavigationProp,
  UpdatePostRouteProp,
} from '../../types/navigation';
import colors from '../../theme/colors';
import Button from '../../components/Button/Button';
import {useMutation, useQuery} from '@apollo/client';
import {getPost, updatePost} from './queries';
import {
  GetPostQuery,
  GetPostQueryVariables,
  UpdatePostMutation,
  UpdatePostMutationVariables,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage';

const UpdatePostScreen = () => {
  const navigation = useNavigation<CreateNavigationProp>();
  const route = useRoute<UpdatePostRouteProp>();
  const {id} = route.params;

  const [description, setDescription] = useState('');

  const {data, loading, error} = useQuery<GetPostQuery, GetPostQueryVariables>(
    getPost,
    {variables: {id}},
  );

  const post = data?.getPost;

  const [
    doUpdatePost,
    {error: updateError, data: updateData, loading: updateLoading},
  ] = useMutation<UpdatePostMutation, UpdatePostMutationVariables>(updatePost);

  useEffect(() => {
    if (post) {
      setDescription(post?.description || '');
    }
  }, [post]);

  useEffect(() => {
    if (updateData) {
      navigation.goBack();
    }
  }, [updateData]);

  const submit = async () => {
    if (!post) {
      return;
    }

    doUpdatePost({
      variables: {input: {id: post.id, _version: post._version, description}},
    });
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error || updateError) {
    return (
      <ApiErrorMessage
        title="Failed to fetch the post"
        message={error?.message || updateError?.message}
      />
    );
  }

  return (
    <View style={styles.root}>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Description..."
        style={styles.input}
        multiline
        numberOfLines={5}
      />

      <Button
        text={updateLoading ? 'Submitting...' : 'Submit'}
        onPress={submit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    marginVertical: 10,
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    padding: 10,
  },
  content: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default UpdatePostScreen;
