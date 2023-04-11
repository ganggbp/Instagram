import {SafeAreaView, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import PostUploadScreen from './src/screens/PostUploadScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      {/* <HomeScreen /> */}
      {/* <CommentsScreen /> */}
      {/* <ProfileScreen /> */}
      {/* <EditProfileScreen /> */}
      <PostUploadScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
