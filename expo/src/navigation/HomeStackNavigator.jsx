import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import ItemListMarcas from '../screens/ItemListMarcas';
import ItemDetail from '../screens/ItemDetail';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
          <Stack.Navigator initialRouteName="Home"
            screenOptions={{headerShown: false}}
          >        
            <Stack.Screen name= "Home" component={Home}/>
            <Stack.Screen name= "ItemListMarcas" component={ItemListMarcas}/>
            <Stack.Screen name= "ItemDetail" component={ItemDetail}/>
          </Stack.Navigator>
  );
};