import {View, Text, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';
import {PermissionStatus} from 'expo-camera';

const PushNotifications = () => {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [token, setToken] = useState('');

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

  console.log('Token: ', token);

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
