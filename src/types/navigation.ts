import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';

import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type RootNavigatorParamList = {
  Home: undefined;
  Post: {id: string};
  Comments: {postId: string};
  Auth: undefined;
  EditProfile: undefined;
};

export type CommentsRouteProp = RouteProp<RootNavigatorParamList, 'Comments'>;

export type BottomTabNavigatorParamList = {
  HomeStack: undefined;
  Search: undefined;
  Upload: undefined;
  Notifications: undefined;
  MyProfile: undefined;
};

export type MyProfileNavigationProp = BottomTabNavigationProp<
  BottomTabNavigatorParamList,
  'MyProfile'
>;

export type MyProfileRouteProp = RouteProp<
  BottomTabNavigatorParamList,
  'MyProfile'
>;

export type SearchTapNavigatorParamList = {
  Users: undefined;
  Posts: undefined;
};

export type UserFollowTapNavigatorParamList = {
  Followers: undefined;
  Followings: undefined;
};

export type UploadStackNavigatorParamList = {
  Camera: undefined;
  Create: {
    image?: string;
    images?: string[];
    video?: string;
  };
};

export type CameraNavigationProp = NativeStackNavigationProp<
  UploadStackNavigatorParamList,
  'Camera'
>;

export type CreateNavigationProp = NativeStackNavigationProp<
  UploadStackNavigatorParamList,
  'Create'
>;

export type CreateRouteProp = RouteProp<
  UploadStackNavigatorParamList,
  'Create'
>;

export type HomeStackNavigatorParamList = {
  Feed: undefined;
  UserProfile: NavigatorScreenParams<ProfileStackNavigatorParamList>;
  UpdatePost: {id: string};
  PostLikes: {id: string};
};

export type PostLikesNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'PostLikes'
>;

export type PostLikesRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'PostLikes'
>;

export type UpdatePostRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'UpdatePost'
>;

export type UserProfileNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'UserProfile'
>;

export type UserProfileRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'UserProfile'
>;

export type FeedNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Feed'
>;

export type ProfileStackNavigatorParamList = {
  Profile: {userId: string};
  'Edit Profile': undefined;
  UserFollow: {
    id: string;
  } & NavigatorScreenParams<UserFollowTapNavigatorParamList>;
};

export type UserFollowScreenProp = NativeStackScreenProps<
  ProfileStackNavigatorParamList,
  'UserFollow'
>;

export type ProfileNavigationProp = NativeStackNavigationProp<
  ProfileStackNavigatorParamList,
  'Profile'
>;

// Auth Stack Navigator
export type AuthStackNavigatorParamList = {
  'Sign in': undefined;
  'Sign up': undefined;
  'Confirm email': {email?: string};
  'Forgot password': undefined;
  'New password': undefined;
};

export type SignInNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Sign in'
>;

export type SignUpNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Sign up'
>;

export type ConfirmEmailNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Confirm email'
>;
export type ConfirmEmailRouteProp = RouteProp<
  AuthStackNavigatorParamList,
  'Confirm email'
>;

export type ForgotPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Forgot password'
>;

export type NewPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'New password'
>;
