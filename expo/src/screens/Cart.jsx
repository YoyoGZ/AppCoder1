import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import { useSelector } from 'react-redux';
import CartItem from "../components/CartItem"
import { usePostOrderMutation } from '../services/shopServices';

const Cart = () => {
  const { items: CartData, total} = useSelector((state) => state.cart.value)
  const [triggerPostOrder, result] = usePostOrderMutation()
  const confirmOrder = () => {
    triggerPostOrder({items: CartData, user: "Pedrito", total})
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data = {CartData}
        renderItem={({ item })  => {
          return <CartItem cartItem={item} />;
        }}
        keyExtractor = {(vehiculo) => vehiculo.id} 
      />
      <View style={styles.totalContainer}>
        <Pressable onPress={confirmOrder}>
          <Text>Confirmar Compra</Text>
        </Pressable>
        <Text> TOTAL a PAGAR  ${ total }</Text>
      </View>
    </View>
      
  )
};

export default Cart

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 100,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});