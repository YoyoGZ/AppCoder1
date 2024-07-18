import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profiles from '../screens/Profiles'
import ImageSelector from '../screens/ImageSelector';

const Stack = createNativeStackNavigator();

const ProfilesStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Profiles'
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name= "Profiles" component={Profiles} />
      <Stack.Screen name= "Image Selector" component={ImageSelector} />
    </Stack.Navigator>
  )
}

export default ProfilesStackNavigator

