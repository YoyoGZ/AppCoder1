import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../global/colors";
import SubmitButton from "../components/SubmitButton.jsx";
import InputForm from "../components/InputForm";
import { useSignUpMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/User/UserSlice";
import { signupSchema } from "../validations/signUpScheme.js";


const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const dispatch = useDispatch()
  const [triggerSignUp, result] = useSignUpMutation()

  useEffect(()=>{
    if(result.isSuccess) {
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken,
          localId: result.data.localId,
        })
      )
    }
  }, [result])

  const onSubmit = () => {
    try {
      setErrorMail("");
      setErrorPassword("");
      setErrorConfirmPassword("");
      signupSchema.validateSync({ email, password, confirmPassword })
      triggerSignUp({ email, password, returnSecureToken: true })
    
    } catch (err) {
      // console.log("Entro al signup del error");
      // console.log(err.path);
      // console.log(err.message);
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
        case "password":
          setErrorPassword(err.message);
        case "confirmPassword":
          setErrorConfirmPassword(err.message);
        default:
          break;
      }
    }
  };


  return (
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>Signup</Text>
            <InputForm 
              label={"Email"} 
              onChange={setEmail} 
              error={errorMail} 
            />
            <InputForm
              label={"Password"}
              onChange={setPassword}
              error={errorPassword}
              isSecure={true}
            />
            <InputForm
              label={"Confirm Password"}
              onChange={setconfirmPassword}
              error={errorConfirmPassword}
              isSecure={true}
            />
          <SubmitButton onPress={onSubmit} title="Send" />
          <Text style={styles.sub}>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.subLink}>Login</Text>
          </Pressable>
        </View>
      </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: 250,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue100,
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontFamily: "Nunito",
  },
  sub: {
    fontSize: 14,
    fontFamily: "Nunito",
    color: "black",
  },
  subLink: {
    fontSize: 14,
    fontFamily: "Nunito",
    color: colors.lightblue,
  },
});
