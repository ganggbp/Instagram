import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import CommentsScreen from '../screens/CommentsScreen';
import {RootNavigatorParamList} from '../types/navigation';
import AuthStackNavigator from './AuthStackNavigator';
import {useAuthContext} from '../contexts/AuthContext';
import {ActivityIndicator, View} from 'react-native';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const linking: LinkingOptions<RootNavigatorParamList> = {
  prefixes: ['notjustphotos://', 'https://notjustphotos.com'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Comments: 'comments', // notjustphotos://comments
      Home: {
        screens: {
          HomeStack: {
            initialRouteName: 'Feed',
            screens: {
              UserProfile: 'user/:userId', // notjustphotos://user/123
            },
          },
        },
      },
    },
  },
};

const Navigation = () => {
  const {user} = useAuthContext();

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        {!user ? (
          <Stack.Screen
            name="Auth"
            component={AuthStackNavigator}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={BottomTabNavigator}
              options={{headerShown: false}}
            />

            <Stack.Screen name="Comments" component={CommentsScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
