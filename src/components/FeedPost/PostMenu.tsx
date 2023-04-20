import {useMutation} from '@apollo/client';
import React from 'react';
import {Text, Alert, StyleSheet} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import {deletePost} from './queries';
import {DeletePostMutation, DeletePostMutationVariables, Post} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {FeedNavigationProp} from '../../types/navigation';

interface IPostMenu {
  post: Post;
}

const PostMenu = ({post}: IPostMenu) => {
  const navigation = useNavigation<FeedNavigationProp>();
  const insets = useSafeAreaInsets();

  const optionsStyles = {
    optionsContainer: {
      paddingBottom: insets.bottom,
    },
  };

  const [doDeletePost] = useMutation<
    DeletePostMutation,
    DeletePostMutationVariables
  >(deletePost, {variables: {input: {id: post.id, _version: post._version}}});

  const {userId} = useAuthContext();
  const isMyPost = userId === post.userID;

  const startDeletingPost = async () => {
    try {
      const response = await doDeletePost();
      console.log(response);
    } catch (e) {
      Alert.alert('Error deleting post', (e as Error).message);
    }
  };

  const onDeleteOptionPressed = () => {
    Alert.alert('Are you sure?', 'Delete a post is permanent', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Delete post', style: 'destructive', onPress: startDeletingPost},
    ]);
  };

  const onEditOptionPressed = () => {
    navigation.navigate('UpdatePost', {id: post.id});
  };

  return (
    <Menu renderer={renderers.SlideInMenu} style={styles.threeDots}>
      <MenuTrigger>
        <Entypo name="dots-three-horizontal" size={16} />
      </MenuTrigger>
      <MenuOptions customStyles={optionsStyles}>
        <MenuOption onSelect={() => Alert.alert(`Reporting`)}>
          <Text style={styles.optionText}>Report</Text>
        </MenuOption>
        {isMyPost && (
          <>
            <MenuOption onSelect={onDeleteOptionPressed}>
              <Text style={[styles.optionText, {color: 'red'}]}>Delete</Text>
            </MenuOption>
            <MenuOption onSelect={onEditOptionPressed}>
              <Text style={[styles.optionText]}>Edit</Text>
            </MenuOption>
          </>
        )}
      </MenuOptions>
    </Menu>
  );
};

const styles = StyleSheet.create({
  threeDots: {
    marginLeft: 'auto',
  },
  optionText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
  },
});

export default PostMenu;
