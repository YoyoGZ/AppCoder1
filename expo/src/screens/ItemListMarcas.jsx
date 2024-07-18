import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

import { colors } from '../global/colors';
import Search from '../components/Search';
// import vehiculos from '../data/vehiculos.json'
import VehiculoItem from '../components/VehiculoItem';
import { useGetVehicsByMarcaQuery } from '../services/shopServices';

const ItemListMarcas = ({navigation, route}) => {  
    const [keyWord, setKeyword] = useState('');
    const [vehiculosFiltered, setVehiculosFiltered] = useState([]);
    const [error, setError] = useState("");
    const { marca : marcaSelected } = route.params;

    const { data : vehicsFetched, error : errorFetched, isLoading } =  useGetVehicsByMarcaQuery (marcaSelected);
    // console.log(vehicsFetched)

  useEffect(() => {
    const regexDigits= /\d/
    const hasDigits = (regexDigits.test(keyWord));
    if(hasDigits) {
      setError("Don't use digits")
      return;
    };

    if (!isLoading) {
      const vehiculosFilter = vehicsFetched.filter((vehiculo) =>
         vehiculo.marca.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()));
      setVehiculosFiltered(vehiculosFilter);
      setError('');
    }

  }, [keyWord, marcaSelected, vehicsFetched, isLoading])

  return (
    <View style= {styles.flatListContainer}>
        <Search 
          error={error}
          onSearch={setKeyword} 
          goBack={() => navigation.goBack()}/>
        <Text>{error}</Text>
        <FlatList 
          data = {vehiculosFiltered}
          renderItem = {({item}) =>  <VehiculoItem vehiculo={item} navigation={navigation}/>}
          keyExtractor={(vehiculo) => vehiculo.id} 
        />
    </View>
  );
};

export default ItemListMarcas

const styles = StyleSheet.create({
    flatListContainer:{
        width: '100%',
        flex: 1,
        backgroundColor: colors.blue100,
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
      }
})