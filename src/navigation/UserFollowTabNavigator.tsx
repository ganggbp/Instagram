import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../theme/colors';

import {
  UserFollowScreenProp,
  UserFollowTapNavigatorParamList,
} from '../types/navigation';

import {UserFollowersScreen, UserFollowingsScreen} from '../screens/UserFollow';

const Tab = createMaterialTopTabNavigator<UserFollowTapNavigatorParamList>();

const UserFollowTapNavigator = ({route}: UserFollowScreenProp) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: colors.primary},
      }}>
      <Tab.Screen name="Followers">
        {props => <UserFollowersScreen {...props} userId={route.params.id} />}
      </Tab.Screen>
      <Tab.Screen name="Followings">
        {props => <UserFollowingsScreen {...props} userId={route.params.id} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default UserFollowTapNavigator;
