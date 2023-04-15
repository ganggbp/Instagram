import {View, Text, Image} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import styles from './styles';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {ProfileNavigationProp} from '../../types/navigation';
import {Auth} from 'aws-amplify';

const ProfileHeader = () => {
  const navigation = useNavigation<ProfileNavigationProp>();

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
        <Image source={{uri: user.image}} style={styles.avatar} />

        {/* Post, followers, following number */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Following</Text>
        </View>
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>

      {/* Button */}
      <View style={{flexDirection: 'row'}}>
        <Button
          text="Edit Profile"
          onPress={() => navigation.navigate('Edit Profile')}
        />
        <Button text="SignOut" onPress={signOut} />
      </View>

      {/* Grid View Post */}
    </View>
  );
};

export default ProfileHeader;
