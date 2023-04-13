import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PostUploadScreen from '../screens/PostUploadScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/colors';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import {BottomTabNavigatorParamList} from './type';

const BottomTab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.black,
      }}>
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home-filled" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Upload"
        component={PostUploadScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={PostUploadScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="heart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="MyProfile"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
