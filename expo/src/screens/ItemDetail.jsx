import React, { useEffect, useState, useSelector} from "react";

import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,} from "react-native";
import Counter from "../components/Counter";
import { useGetVehicByIdQuery } from "../services/shopServices";
import { useDispatch } from "react-redux";
import { addCartItem } from "../features/Cart/CartSlice";

const ItemDetail = ({ route, navigation }) => {
  const {width, height} = useWindowDimensions()  
  const [orientation, setOrientation] = useState("portrait");
  const {vhId: idSelected} = route.params
  const dispatch = useDispatch();
  
  const { data : vehiculo } = useGetVehicByIdQuery (idSelected);
  const diasalqui = useSelector((state) => state.counter.value);

  useEffect(()=>{
    if(width > height) setOrientation("landscape")
    else setOrientation('portrait')
  }, [width, height]);

  // const handleAddCart = () => {
  //   dispatch(addCartItem)
  //   dispatch(addCartItem({ ...vehiculo, diasalqui : 1}))
  // };
  const handleAddCart = () => {
    if (vehiculo) {
      dispatch(addCartItem({ ...vehiculo, diasalqui }));
    }
  };


  return (
    <View>
    <Button onPress={()=> navigation.goBack()} title="Back" />
      <View>
        <Counter />
      </View>
      {vehiculo ? (
        <View style={
          orientation === 'portrait' ? 
          styles.mainContainer
          : styles.mainContainerLandscape
        }>
          {/* <Image
            source={{ uri: product.images[0] }}
            style={orientation === 'portrait' ? 
            styles.image
            : styles.imageLandscape }
            resizeMode="cover"
          /> */}
          <View style={orientation === 'portrait' ? 
          styles.textContainer
          : styles.textContainerLandscape}>
            <Text>Marca: {vehiculo.marca}</Text>
            <Text>Modelo: {vehiculo.modelo}</Text>
            <Text>Año: {vehiculo.anio}</Text>
            <Text>Motorización: {vehiculo.motor}</Text>
            <Text>Capacidad : {vehiculo.asientos} asientos</Text>
            <Text style={styles.precio}>$ {vehiculo.precio}</Text>
            <Button title="Add cart"  onPress={handleAddCart()}></Button>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    fontSize: 8,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    gap: 10,
    fontSize: 8
  },
  image: {
    width: "100%",
    height: 250,
  },
  imageLandscape: {
    width: "45%",
    height: 200,
  },

  textContainer: {
    flexDirection: "column",
  },
  textContainerLandscape: {
    width: "50%",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "start",
    gap: 10,
  },
  precio: {
    textAlign: "right"
  }
});