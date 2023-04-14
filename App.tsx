import {StyleSheet} from 'react-native';
import Navigation from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider style={styles.app}>
      <Navigation />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
