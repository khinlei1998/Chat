import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoadingPage from './src/components/pages/LoadingPage/LoadingPage';
import BackgroundImg from './assets/svg/loading_background.svg'
export default function App() {
  return (
    <View style={styles.container}>
      <BackgroundImg/>
     {/* <LoadingPage/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
