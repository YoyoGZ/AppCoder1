import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import { colors } from '../global/colors';
import { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const Search = ({onSearch = ()=> {}, goBack = ()=>{}}) => {
const [keyWord, setKeyword] = useState ("")

  return (
    <View style={styles.container}>
      <TextInput 
      style= {styles.input}
      placeHolder = "Search ..."
      value= {keyWord}
      onChangeText = {setKeyword}
      />
      <Pressable onPress={()=>onSearch(keyWord)}>
        <Ionicons name="search-sharp" size={24} color="black" />
      </Pressable>
      <Pressable onPress={()=> setKeyword("")}>
        <Fontisto name="eraser" size={24} color="black" />
      </Pressable>
      <Pressable onPress={goBack}>
        <Ionicons name="arrow-back-circle-sharp" size={24} color="black" />
      </Pressable>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
  input: {
    width: 200,
    padding: 8,
    fontSize: 18,
    backgroundColor: colors.lightblue,
    color: colors.black,
    borderRadius: 10,
  },
});