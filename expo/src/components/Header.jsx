import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'

const Header =({title})  => {
  return (
    <View style= {styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width:"100%",
    backgroundColor: colors.blue300,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize: 35,
    fontWeight: 600,
    fontFamily: 'Nunito'
  }
})