import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {ProfileNavigationProp} from '../../types/navigation';
import {Auth, Storage} from 'aws-amplify';
import {User} from '../../API';
import {DEFAULT_USER_IMAGE} from '../../config';
import {useAuthContext} from '../../contexts/AuthContext';
import UserImage from '../../components/UserImage/UserImage';

interface IProfileHeader {
  user: User;
}

const ProfileHeader = ({user}: IProfileHeader) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const {userId} = useAuthContext();
  const navigation = useNavigation<ProfileNavigationProp>();

  navigation.setOptions({title: user?.username || 'Profile'});

  useEffect(() => {
    if (user.image) {
      Storage.get(user.image).then(setImageUri);
    }
  }, [user]);

  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile Image */}
        <UserImage imageKey={user.image} width={100} />

        {/* Post, followers, following number */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{user.nofPosts}</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{user.nofFollowers}</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{user.nofFollowings}</Text>
          <Text>Following</Text>
        </View>
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>

      {/* Button */}
      {userId === user.id && (
        <View style={{flexDirection: 'row'}}>
          <Button
            text="Edit Profile"
            onPress={() => navigation.navigate('Edit Profile')}
            inline
          />
          <Button text="SignOut" onPress={signOut} inline />
        </View>
      )}

      {/* Grid View Post */}
    </View>
  );
};

export default ProfileHeader;
