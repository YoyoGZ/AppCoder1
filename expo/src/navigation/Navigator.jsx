import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from './HomeStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { useState } from 'react'

const Navigator = () => {
  const [user, setUser] = useState (null)

  return (
    <NavigationContainer>
      {/* <HomeStackNavigator /> */}
      {/* <BottomTabNavigator /> */}
      { user ? <BottomTabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})