import { StyleSheet, Text, Pressable} from 'react-native';
import Card from './Card';
import { colors } from '../global/colors';
import { setMarcaSelected } from '../features/Shop/ShopSlice';

import { useDispatch} from 'react-redux';

const MarcasItem = ({ marca, navigation}) => {
  const dispatch = useDispatch()
  const handleNavigate = () => {
    dispatch( setMarcaSelected(marca))
    navigation.navigate('ItemListMarcas', {marca})
};

  return (
    <Card style={styles.cardContainer}>
      <Pressable onPress={handleNavigate}>
        <Text style={styles.text}>{marca}</Text>
      </Pressable>
    </Card>
  );
};

export default MarcasItem

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.lightblue,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 8,
  },

  text:{
    fontSize: 25,
    textAlign:'center',
    color: colors.black
  }
})