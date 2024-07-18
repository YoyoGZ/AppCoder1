import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'
import { useGetProfileimageQuery } from '../services/shopServices'

const Profiles = ({navigation}) => {

    const [image, setImage] = useState(null)
    const {imageCamera, localId} = useSelector((state) => state.auth.value)
    const { data: imageFromBase } = useGetProfileimageQuery(localId)
  return (
    <View style={styles.container}>
        {image ?
            null :
            <>              
                <Image
                    style={styles.img}
                    resizeMode='cover'
                    source={require("../../../assets/user.jpeg")}
                />
                <Pressable
                onPress={()=> navigation.navigate("Image Selector")}
                style={({pressed})=> [styles.btn, {opacity: pressed ? 0.6 : 1}]}
                >
                    <Text style={{colors: colors.lightblue}}>Add Profile Picture</Text>
                </Pressable>
            </>
        }
    </View>
  )
}

export default Profiles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    img: {
        marginTop: 15,
        width: 150,
        height: 150,
    },
    btn: {
        marginTop: 10,
        backgroundColor: colors.blue100,
        width: "50%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        borderRadius: 5
      }
})