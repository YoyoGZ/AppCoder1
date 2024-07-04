import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from "@expo/vector-icons";


const CartItem = (cartItem) => {
  return (
    <View style={styles.card}>
        <View style={styles.textContainer}>
            <Text style= {styles.text}>
                {cartItem.marca} {cartItem.precio}    
             </Text>
        </View>
        <Entypo name="Descartar" color="black" size={35} />
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({})