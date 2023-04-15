import Navigation from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';

Amplify.configure(awsconfig);

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
