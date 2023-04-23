import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen/EditProfileScreen';
import {ProfileStackNavigatorParamList} from '../types/navigation';
import UserFollowTapNavigator from './UserFollowTabNavigator';

const Stack = createNativeStackNavigator<ProfileStackNavigatorParamList>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="Edit Profile"
        component={EditProfileScreen}
        options={{title: 'Profile'}}
      />
      <Stack.Screen name="UserFollow" component={UserFollowTapNavigator} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
