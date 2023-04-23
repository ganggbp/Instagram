import Navigation from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {Linking} from 'react-native';
import Client from './src/apollo/Client';
import {MenuProvider} from 'react-native-popup-menu';
import relativeTime from 'dayjs/plugin/relativeTime';
import * as dayjs from 'dayjs';
import NotificationContextProvider from './src/contexts/NotificationContext';
dayjs.extend(relativeTime);

const urlOpener = async (url: string, redirectUrl: string) => {
  await InAppBrowser.isAvailable();

  const response = await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
  });

  if (response.type === 'success') {
    Linking.openURL(response.url);
  }
};

const updateConfig = {
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    redirectSignIn: 'gangphotos://',
    redirectSignOut: 'gangphotos://',
    urlOpener,
  },
};

Amplify.configure(updateConfig);

const App = () => {
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <AuthContextProvider>
          <Client>
            <NotificationContextProvider>
              <Navigation />
            </NotificationContextProvider>
          </Client>
        </AuthContextProvider>
      </MenuProvider>
    </SafeAreaProvider>
  );
};

export default App;
