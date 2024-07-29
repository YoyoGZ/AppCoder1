import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { useSelector } from 'react-redux';

import {colors} from "../global/colors"

const CartItem = ({ cartItem}) => {
 
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {cartItem.marca} {cartItem.modelo}
        </Text>
        <Text> Cantidad de Dias de alquiler: { }</Text>
        <Text>Precio Total a pagar: ${ total } </Text>
      </View>
      <Entypo name="trash" size={30} color="red" onPress={noCart()} />
    </View>      
  )
}

export default CartItem

const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: colors.lightblue,
    padding: 10,
    margin: 10,
    borderColor: colors.blue700,
    borderWidth: 3,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontFamily: "Nunito",
    fontSize: 19,
    color: colors.black,
  },
  text2: {
    fontFamily: "Nunito",
    fontSize: 16,
    color: colors.black
  },
});
