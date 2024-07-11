import { StyleSheet, View, FlatList } from 'react-native'
import MarcasItem from '../components/MarcasItem';
import { colors } from '../global/colors';
import { useGetMarcasQuery } from '../services/shopServices';

const Home = ({ navigation }) => {
  const { data: marcas } = useGetMarcasQuery();

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
    backgroundColor: colors.blue100,
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
});