import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { colors } from "../global/colors";
import { decrement, increment, incrementByAmount, reset } from "../features/Counter/CounterSlice";

const Counter = () => {
  const { items: CartData } = useSelector((state) => state.cart.value);
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch();
  const [inputToAdd, setInputToAdd] = useState(null);
  
  let total = 0
    for (const currentItem of CartData) {
      total += currentItem.precio * count     
    };

  return (
    <View style={styles.container}>
        <Text style= {styles.texthead}> Cantidad de dias de alquiler del vehículo</Text>
        <View style={styles.buttonsContainer}>
            <Pressable style={styles.button} onPress={() => dispatch(decrement())}>
              <Text style={styles.buttonText}> - </Text>
            </Pressable>
              <Text style={styles.span}>{count}</Text>
            <Pressable style={styles.button} onPress={() => dispatch(increment())}>
              <Text style={styles.buttonText}> + </Text>
            </Pressable>
        </View>
        <View style={styles.buttonsContainer}>
          <TextInput
            placeholder=""
            style={styles.spanInput}
            value={inputToAdd}
            onChangeText={setInputToAdd}
          />
          <Pressable
            style={styles.button}
            onPress={() => dispatch(incrementByAmount(Number(inputToAdd)))}
          >
            <Text style={styles.buttonText}>Ingrese una Cantidad</Text>
          </Pressable>
        </View>
          <Pressable style={styles.button} onPress={() => dispatch(reset())}>
            <Text style={styles.buttonText}>Reset Counter</Text>
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
    width: "90%",
    backgroundColor: colors.blue100,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    fontFamily: 'Nunito',
    fontWeight: 600
  },
  texthead: {
    fontFamily: 'Nunito',
    fontWeight: 600,
    alignContent: 'center',
    marginBottom: 8
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    padding: 8,
    backgroundColor: colors.lightblue,
    fontWeight: 800,
    borderRadius: 6
  },
  span: {
    backgroundColor: colors.lightblue,
    position: "flex-end",
    width: "30%",
    padding: 8,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Nunito",
    color: colors.black,
  },
  spanInput: {
    backgroundColor: colors.lightblue,
    width: "60%",
    padding: 10,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Nunito",
    color: colors.black,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Nunito",
    backgroundColor: colors.lightblue,
  },
});
