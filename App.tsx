import Navigation from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {Linking} from 'react-native';

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
    redirectSignIn: 'notjustphotos://',
    redirectSignOut: 'notjustphotos://',
    urlOpener,
  },
};

Amplify.configure(updateConfig);

const App = () => {
  return (
    <AuthContextProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </AuthContextProvider>
  );
};

export default App;
