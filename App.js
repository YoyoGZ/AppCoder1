import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { useFonts } from 'expo-font'
import {colors} from './expo/src/global/colors'
import Navigator from './expo/src/navigation/Navigator';
import store from './expo/src/store';
import { Provider } from 'react-redux';
import Login from './expo/src/screens/Login';



export default function App() {

const [fontsLoaded, fontError] = useFonts({
  Nunito: require('./assets/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf')
});

if (!fontsLoaded && !fontError) {
  return null;
}
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Navigator />
        {/* < Login /> */}
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
    backgroundColor: colors.lightblue,
    alignItems: 'center',
    paddingTop:60
  },
  head:{
    fontSize: 6,
    color: colors.black,
    fontWeight: 600,
  },
});
