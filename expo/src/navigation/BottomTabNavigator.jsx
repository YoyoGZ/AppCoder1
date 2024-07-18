import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import HomeStackNavigator from './HomeStackNavigator';
import CartStackNavigator from './CartStackNavigator';
import OrderStackNavigator from './OrderStackNavigator';
import ProfilesStackNavigator from './ProfilesStackNavigator';
import Header from '../components/Header'
import { colors } from '../global/colors';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={({route}) => ({
          header: ()=> {
            return <Header title={route.name} />
          },
          tabBarStyle: styles.tabBar
      })}
    >
      <Tab.Screen 
        name='Shop' 
        component={HomeStackNavigator}
        options= {{
          tabBarIcon : ({focused}) => {
            return (
              <View>
                <FontAwesome5 
                  name="store" 
                  size={24} color={ focused ?"black" : colors.lightblue} />
              </View>
            )
          }
        }}        
      />
      <Tab.Screen 
        name='Cart' 
        component={CartStackNavigator} 
        options= {{
          tabBarIcon : ({focused}) => {
            return (
              <View>
                <FontAwesome5 
                  name="shopping-cart" 
                  size={24} color={ focused ?"black" : colors.lightblue} />
              </View>
            )
          }
        }} 
     />
      <Tab.Screen 
        name='Order' 
        component={OrderStackNavigator}
        options= {{
          tabBarIcon : ({focused}) => {
            return (
              <View>
                <FontAwesome5 
                  name="receipt"
                  size={24} color={ focused ?"black" : colors.lightblue} />
              </View>
            )
          }
        }} 
      />
      <Tab.Screen 
        name='Profile' 
        component={ProfilesStackNavigator}
        options= {{
          tabBarIcon : ({focused}) => {
            return (
              <View>
                <FontAwesome5 
                  name="user"
                  size={24} color={ focused ?"black" : colors.lightblue} />
              </View>
            )
          }
        }} 
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar:{
    backgroundColor: colors.blue300,
    width:360
  }
})