import {View, Text, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';
import {PermissionStatus} from 'expo-camera';
import {useNavigation} from '@react-navigation/native';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log(
    'Message handled in the background!',
    JSON.stringify(remoteMessage, null, 2),
  );
});

const PushNotifications = () => {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [token, setToken] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    if (Platform.OS === 'ios') {
      iosRequestUserPermission();
    } else if (Platform.OS === 'android') {
      androidRequestUserPermission();
    }
  }, []);

  const getDeviceToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const newToken = await messaging().getToken();
    setToken(newToken);
  };

  useEffect(() => {
    if (!enabled) {
      return;
    }

    // Handle notifications that are received while the application is in Foreground state
    messaging().onMessage(handleNotification);

    //Handle the notification that opened the app from Background state
    messaging().onNotificationOpenedApp(handleNotification);

    //Handle the notification that opened the app from Quit state
    messaging().getInitialNotification().then(handleNotification);
  }, [enabled]);

  const handleNotification = (
    remoteMessage: FirebaseMessagingTypes.RemoteMessage | null,
  ) => {
    if (!remoteMessage) {
      return;
    }

    if (remoteMessage.data?.postId) {
      navigation.navigate('Post', {id: remoteMessage.data?.postId});
    }
  };

  async function iosRequestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      setEnabled(true);
      await getDeviceToken();
    }
  }

  async function androidRequestUserPermission() {
    const response = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );

    if (response === PermissionStatus.GRANTED) {
      setEnabled(true);
      await getDeviceToken();
    }
  }

  return null;
};

export default PushNotifications;
