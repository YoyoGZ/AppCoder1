import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import { useSelector } from 'react-redux';

import CartItem from "../components/CartItem"
import { usePostOrderMutation } from '../services/shopServices';

const Cart = () => {
  const { items: CartData } = useSelector((state) => state.cart.value);
  const [triggerPostOrder, result] = usePostOrderMutation();
  const confirmOrder = () => {
    triggerPostOrder({items: CartData, user: "Pedrito"})
  }

  return (
    <View>
      <View style={styles.container}>
        <FlatList 
          data = {CartData}
          renderItem={({ item })  => {
            return <CartItem cartItem={item} />;
          }}
          keyExtractor = {(vehiculo) => vehiculo.id} 
        />
        <View style={styles.totalContainer}>
          <Pressable onPress={confirmOrder}
           style={({pressed})=> [styles.btn, {opacity: pressed ? 0.6 : 1}]}
           >
            <Text>Confirmar Compra</Text>
          </Pressable>
          <Text> TOTAL a PAGAR  ${  }</Text>
        </View>
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