import {
  View,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import {v4 as uuidv4} from 'uuid';

import {useForm} from 'react-hook-form';
import {
  DeleteCommentMutationVariables,
  DeleteUserMutation,
  GetUserQuery,
  GetUserQueryVariables,
  UpdateUserInput,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UsersByUsernameQuery,
  UsersByUsernameQueryVariables,
} from '../../API';
import {useMutation, useQuery, useLazyQuery} from '@apollo/client';
import {deleteUser, getUser, updateUser, usersByUsername} from './queries';
import {useAuthContext} from '../../contexts/AuthContext';
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage';
import {useNavigation} from '@react-navigation/native';
import {Auth, Storage} from 'aws-amplify';

import styles from './styles';
import CustomInput, {IEditableUser} from './CustomInput';
import {DEFAULT_USER_IMAGE} from '../../config';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i;

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null);

  const {userId, user: authUser} = useAuthContext();

  const {control, handleSubmit, setValue} = useForm<IEditableUser>();

  const {data, loading, error} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {variables: {id: userId}},
  );

  const user = data?.getUser;

  const [getUsersByUsername] = useLazyQuery<
    UsersByUsernameQuery,
    UsersByUsernameQueryVariables
  >(usersByUsername);

  const [doUpdateUser, {loading: updateLoading, error: updateError}] =
    useMutation<UpdateUserMutation, UpdateUserMutationVariables>(updateUser);

  const [doDelete, {loading: deleteLoading, error: deleteError}] = useMutation<
    DeleteUserMutation,
    DeleteCommentMutationVariables
  >(deleteUser);

  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('username', user.username);
      setValue('bio', user.bio);
      setValue('website', user.website);
    }
  }, [user, setValue]);

  const onSubmit = async (formData: IEditableUser) => {
    const input: UpdateUserInput = {
      id: userId,
      ...formData,
      _version: user?._version,
    };

    if (selectedPhoto?.uri) {
      //upload photo
      input.image = await uploadMedia(selectedPhoto.uri);
    }

    await doUpdateUser({
      variables: {input}, //current version of the user we want to update
    });

    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const uploadMedia = async (uri: string) => {
    try {
      //get the blob of the file from uri
      const response = await fetch(uri);
      const blob = await response.blob();
      const uriParts = uri.split('.');
      const extension = uriParts[uriParts.length - 1];

      //generate a UUIDv4 value as the initial key
      let key = `${uuidv4()}.${extension}`;

      //check if the key already exists in the bucket... research later

      //upload the file (blob) to S3
      const s3Response = await Storage.put(key, blob);
      return s3Response.key;
    } catch (e) {
      Alert.alert('Error uploading the file');
    }
  };

  const confirmDelete = () => {
    Alert.alert('Are you sure?', 'Deleting your user profile is permanent', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Yes, delete', style: 'destructive', onPress: startDeleting},
    ]);
  };

  const startDeleting = async () => {
    if (!user) {
      return;
    }

    //delete form db
    await doDelete({
      variables: {input: {id: userId, _version: user._version}},
    });

    //delete from Cognito
    authUser?.deleteUser(err => {
      if (err) {
        console.log(err);
      }

      Auth.signOut();
    });
  };

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  const validateUsername = async (username: string) => {
    // query the database based on the usersByUsername

    try {
      const response = await getUsersByUsername({variables: {username}});

      if (response.error) {
        Alert.alert('Failed to fetch username');

        return 'Failed to fetch username';
      }

      const users = response.data?.usersByUsername?.items;

      if (users && users.length > 0 && users?.[0]?.id !== userId) {
        return 'Username is already taken';
      }
    } catch (e) {
      Alert.alert('failed to fetch username');
    }

    // if there area any users with this username, then return the error

    return true;
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error || updateError || deleteError) {
    return (
      <ApiErrorMessage
        title="Error fetching or updating the user"
        message={error?.message || updateError?.message || deleteError?.message}
      />
    );
  }

  return (
    <View style={styles.page}>
      <Image
        source={{uri: selectedPhoto?.uri || user?.image || DEFAULT_USER_IMAGE}}
        style={styles.avatar}
      />
      <Pressable onPress={onChangePhoto}>
        <Text style={[styles.textButton, {marginBottom: 20}]}>
          Change Profile photo
        </Text>
      </Pressable>

      <CustomInput
        name="name"
        control={control}
        rules={{required: 'Name is required'}}
        label="Name"
      />
      <CustomInput
        name="username"
        control={control}
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username should be more than 3 characters',
          },
          validate: validateUsername,
        }}
        label="Username"
      />
      <CustomInput
        name="website"
        control={control}
        rules={{
          pattern: {
            value: URL_REGEX,
            message: 'Invalid url',
          },
        }}
        label="Website"
      />
      <CustomInput
        name="bio"
        control={control}
        rules={{
          maxLength: {
            value: 200,
            message: 'Bio should be less than 200 characters',
          },
        }}
        label="Bio"
        multiline
      />

      <Pressable onPress={handleSubmit(onSubmit)}>
        <Text style={styles.textButton}>
          {updateLoading ? 'Submitting...' : 'Submit'}
        </Text>
      </Pressable>
      <Pressable onPress={confirmDelete}>
        <Text style={styles.textButtonDanger}>
          {deleteLoading ? 'Deleting...' : 'Delete User'}
        </Text>
      </Pressable>
    </View>
  );
};

export default EditProfileScreen;
