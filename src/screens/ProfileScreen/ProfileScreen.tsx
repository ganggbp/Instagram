import {Image, FlatList} from 'react-native';
import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  UserProfileNavigationProp,
  UserProfileRouteProp,
  MyProfileNavigationProp,
  MyProfileRouteProp,
} from '../../navigation/type';

const ProfileScreen = () => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<
    UserProfileNavigationProp | MyProfileNavigationProp
  >();

  const userId = route.params?.userId;
  console.warn('userId: ', userId);
  // query the user with userID

  // navigation.setOptions({title: user.username});

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
