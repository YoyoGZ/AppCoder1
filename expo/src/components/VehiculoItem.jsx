import { StyleSheet, Text, Pressable} from "react-native";
import Card from './Card';
import { colors } from "../global/colors";

import { useDispatch } from "react-redux";
import { setItemSelected } from "../features/Shop/ShopSlice";

const VehiculoItem = ({ 
  vehiculo,
  navigation
 }) => {
  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(setItemSelected(vehiculo.modelo))
    navigation.navigate('ItemDetail', {vhId : vehiculo.id})
  };

  return (
    <Card style={styles.additionalStylesCard}>
      <Pressable style={styles.pressable}
        onPress= {handleNavigate} >
        <Text style={styles.textVehiculo}> {vehiculo.modelo} </Text>
      </Pressable>    
    </Card>  
  );
}

export default VehiculoItem;

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: "30%",
    borderRadius: 8,
  },
  additionalStylesCard: {
    backgroundColor: colors.lightblue,
    height: 120,
    width: 300,
    margin: 10,
    paddingLeft: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textVehiculo: {
    color: colors.black,
    fontSize: 23,
  },
  pressable: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 10,
  }
});