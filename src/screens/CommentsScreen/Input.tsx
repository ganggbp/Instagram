import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const Input = () => {
  const [newComment, setNewComment] = useState('');

  const onPost = () => {
    console.warn(newComment);
    //sending the data to backend
    setNewComment('');
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        value={newComment}
        onChangeText={newText => setNewComment(newText)}
        placeholder="Add a comment..."
        style={styles.input}
        multiline={true}
      />
      <Pressable onPress={onPost}>
        <Text style={styles.button}>POST</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: 'flex-end',
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 20,
    marginLeft: 5,
    marginBottom: 5,
    color: colors.black,
  },
  button: {
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.bold,
    color: colors.primary,
    marginBottom: 10,
  },
});

export default Input;
