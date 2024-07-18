import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState} from 'react'
import { colors } from '../global/colors';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { usePostProfileImageMutation } from '../services/shopServices';


const ImageSelector = ({navigation}) => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const [ triggerPostImage, result] = usePostProfileImageMutation()
  const { localId } = useSelector(( state) => state.auth.value)


  const verifyCameraPermisson = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (!status) {
      return false
    }
    return true
  }

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermisson();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1,1],
        base64: true,
        quality: 0.2,
      });
  
      // console.log(result);
  
      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      }     
    }
  };

  const confirmImage = () => {
    try {
      dispatch(setCameraImage(image))
      triggerPostImage({image, localId})
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View style={styles.container}>
      { image ?
        <>
          <Image 
            style={styles.img}
            resizeMode='cover'
            source={{uri: image}}
          />
          <Pressable
            onPress={pickImage}
            style={({pressed})=> [styles.btn, {opacity: pressed ? 0.6 : 1}]}
          >
            <Text style={{colors: colors.lightblue}}>Take a new Photo</Text>
          </Pressable>
          <Pressable
            onPress={confirmImage}
            style={({pressed})=> [styles.btn, {opacity: pressed ? 0.6 : 1}]}
          >
            <Text style={{colors: colors.lightblue}}>Confirm Image</Text>
          </Pressable>
        </>
        :
        <>
          <View style={styles.containerPhoto}>
            <Text>No photo to show...</Text>
          </View>
          <Pressable
            onPress={pickImage}
            style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
          >
            <Text style={{ color: colors.black }}>Take a photo</Text>
          </Pressable>
       </>
      }
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  img: {
    marginVertical: 15,
    width: 150,
    height: 150,
},
btn: {
    marginTop: 10,
    backgroundColor: colors.blue100,
    width: "80%",
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    borderRadius: 5
  },
  containerPhoto: {
    marginVertical: 20,
    height: 200,
    width: 200,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})