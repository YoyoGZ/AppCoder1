import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import CartData from '../data/cart.json';
import { useSelector } from 'react-redux';
import CartItem from "../components/CartItem"

const Cart = () => {

  const { items: CartData} = useSelector((state) => state.cart.value)

  const count = useSelector((state) => state.counter.value);
  console.log(count);
  
  let Total = 0
  for(const theItem of CartData){
    Total = theItem.precio * count
  };

  return (
    <View>
      <FlatList 
        data = {CartData}
        renderItem={({ item })  => {
          return <CartItem cartItem={item} />;
        }}
        keyExtractor = {(vehiculo) => vehiculo.id} 
      />
      <View>
        <Pressable>
          <Text>Confirmar Compra</Text>
        </Pressable>
        <Text> TOTAL a PAGAR  ${ Total }</Text>
      </View>
    </View>
      
  )
};

export default Cart

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 50
  }
})