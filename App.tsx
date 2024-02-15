import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoadingPage from './src/components/pages/LoadingPage/LoadingPage';
import BackgroundImg from './assets/svg/loading_background.svg'
import Logo from './assets/svg/logo_1.svg'
export default function App() {
  return (
    <View style={styles.root}>
      <View style={{ width: '100%', }}>
        <BackgroundImg />

      </View>
      <View style={styles.contentViewStyle}>
        <Logo />
        <Text style={{ color: 'black' }}>What apps</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    width: '100%',
  },
  contentViewStyle: {
    position: 'absolute',
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },

});
