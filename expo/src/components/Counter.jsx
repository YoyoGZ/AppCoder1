import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

import { colors } from "../global/colors";
import { decrement, increment, incrementByAmount, reset } from "../features/Counter/CounterSlice";

import { useDispatch, useSelector } from "react-redux";


const Counter = () => {

  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch();
  const [inputToAdd, setInputToAdd] = useState(null);
  
  const handleChange = (value) => {
    dispatch(setCounter(Number(value)));
  };

  return (
    <View style={styles.container}>
        <Text> Cantidad de dias a alquilar el vehículo </Text>
        <View style={styles.buttonsContainer}>
            <Pressable style={styles.button} onPress={() => dispatch(decrement())}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
              <Text style={styles.span}>{count}</Text>
            <Pressable style={styles.button} onPress={() => dispatch(increment())}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
        <View style={styles.buttonsContainer}>
          <TextInput
            placeholder="Sume o reste cantidad"
            style={styles.spanInput}
            value={inputToAdd}
            onChangeText={setInputToAdd}
          />
          <Pressable
            style={styles.button}
            onPress={() => dispatch(incrementByAmount(Number(inputToAdd)))}
          >
            <Text style={styles.buttonText}>Ingrese Cantidad</Text>
          </Pressable>
        </View>
          <Pressable style={styles.button} onPress={() => dispatch(reset())}>
            <Text style={styles.buttonText}>Reset</Text>
          </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.blue100,
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: colors.blue300,
  },
  span: {
    backgroundColor: colors.lightblue,
    width: "60%",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    color: colors.black,
  },
  spanInput: {
    backgroundColor: colors.lightblue,
    width: "60%",
    padding: 10,
    textAlign: "center",
    fontSize: 16,
    color: colors.black,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Nunito",
  },
});
