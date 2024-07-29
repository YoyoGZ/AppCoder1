import React, { useEffect, useState, useSelector} from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,} from "react-native";
import { useGetVehicByIdQuery } from "../services/shopServices";
import { useDispatch } from "react-redux";

import { addCartItem } from "../features/Cart/CartSlice";
import Counter from "../components/Counter";
import { colors } from "../global/colors";


const ItemDetail = ({ route, navigation }) => {
  const {width, height} = useWindowDimensions()  
  const [orientation, setOrientation] = useState("portrait");
  const {vhId: idSelected} = route.params
  const dispatch = useDispatch();
  const { data : vehiculo } = useGetVehicByIdQuery (idSelected);

  useEffect(()=>{
    if(width > height) setOrientation("landscape")
    else setOrientation('portrait')
  }, [width, height]);

  const handleAddCart = () => {
    if (vehiculo) {
      dispatch(addCartItem({ ...vehiculo}));
    }
  };


  return (
    <View>
      <Text style= {styles.texthead}> Descripción del Vehículo </Text>
      {vehiculo ? (
        <View style={
          orientation === 'portrait' ? 
          styles.mainContainer
          : styles.mainContainerLandscape
        }>
        <View style={orientation === 'portrait' ? 
          styles.textContainer
          : styles.textContainerLandscape}>
            <Text>Marca: {vehiculo.marca}</Text>
            <Text>Modelo: {vehiculo.modelo}</Text>
            <Text>Año: {vehiculo.anio}</Text>
            <Text>Motorización: {vehiculo.motor}</Text>
            <Text>Capacidad : {vehiculo.asientos} asientos</Text>
            <Text style={styles.precio}>$ {vehiculo.precio}</Text>
            <Counter />
            <View style={styles.btnDec}>
              <Pressable
                onPress={handleAddCart()}
                style={({pressed})=> [styles.btn, {opacity: pressed ? 0.6 : 1}]}>
                <Text style={{colors: colors.lightblue}}> Cargar a Compra</Text>
              </Pressable>
              <Pressable
                onPress={()=> navigation.goBack()}
                style={({pressed})=> [styles.btn1, {opacity: pressed ? 0.6 : 1}]}>
                <Text style={{colors: colors.black}}> Volver </Text>
              </Pressable>
              </View>
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
    fontSize: 20,
    marginBottom: 15,
    fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: 400
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    gap: 10,
    fontSize: 20,
    marginBottom: 15
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
    alignContent: 'center',
    fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: 400
  },
  textContainerLandscape: {
    fontSize: 15,
    fontFamily: 'Nunito',
    width: "50%",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "start",
    gap: 10,
  },
  precio: {
    textAlign: "right"
  },
  btnDec:{
    flexDirection: "row",
    justifyContent: "space-betwen",
  },
  btn1: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: 'end',
    marginTop: 15,
    backgroundColor: colors.blue300,
    width: "50%",
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    borderRadius: 5
  },
  btn: {
    marginTop: 15,
    backgroundColor: colors.blue100,
    width: "50%",
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    borderRadius: 5
  }
});