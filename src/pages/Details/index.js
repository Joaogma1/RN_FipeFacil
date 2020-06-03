import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {getDetails} from '../../services/fipeService';
import { styles } from './styles';
import Header from '../../Components/Header';

const Details = ({route}) => {
  //parametros da rota
  const {type} = route.params;
  const {brand} = route.params;
  const {vehicle} = route.params;
  const {vehicleModel} = route.params;

  const [data, setData] = useState({});

  async function getData() {
    await getDetails(type, brand, vehicle, vehicleModel).then(resp =>
      setData(resp.data),
    );
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.View}>
      
      <Header style={styles.Header}/>
      <Text style={styles.Text}><Text style={styles.Label}>Ano:</Text> {data?.referencia}</Text>

      <Text style={styles.Text}><Text style={styles.Label}>Marca:</Text> {data?.marca}</Text>

      <Text style={styles.Text}><Text style={styles.Label}>Modelo:</Text> {data?.name}</Text>

      <Text style={styles.Text}><Text style={styles.Label}>Ano:</Text> {data?.ano_modelo}</Text>

      <Text style={styles.Text}><Text style={styles.Label}>Combustivel:</Text> {data?.combustivel}</Text>

      <Text style={styles.Text}><Text style={styles.Label}>Preço médio:</Text> {data?.preco}</Text>
    </View>
  );
};

export default Details;
