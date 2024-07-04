import { StyleSheet, View } from 'react-native'
import {colors} from '../global/colors'

const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue100,
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})