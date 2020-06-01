import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {getDetails} from '../../services/fipeService';

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
    <View>
      <Text>{data?.referencia}</Text>

      <Text>{data?.marca}</Text>

      <Text>{data?.name}</Text>

      <Text>{data?.ano_modelo}</Text>

      <Text>{data?.combustivel}</Text>

      <Text>{data?.preco}</Text>
    </View>
  );
};

export default Details;
