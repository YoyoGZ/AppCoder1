import { StyleSheet, View, FlatList } from 'react-native'
import MarcasItem from '../components/MarcasItem';
import { colors } from '../global/colors';
// import marcas from '../data/marcas.json'
import { useGetMarcasQuery } from '../services/shopServices';

const Home = ({ navigation }) => {
  const { data: marcas } = useGetMarcasQuery();
  console.log(marcas)

  return (
    <View style= {styles.flatListContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(marca) => marca}
        data={marcas}
        renderItem={({ item }) => (
          <MarcasItem  marca={item} navigation={navigation}/>
        )}
      />            
    </View>
  );
};

export default Home

const styles = StyleSheet.create({
  flatListContainer:{
    flex: 1,
    width: '100%',
    backgroundColor: colors.blue300,
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
});