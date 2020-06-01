import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text, Button} from 'react-native';
import {Picker} from '@react-native-community/picker';

import {styles} from './styles.js';
import Header from '../../Components/Header/index';
import localObjects from '../../shared/localObjects.json';

import {getBrands, getModels, getVehicles} from '../../services/fipeService';

function Main({navigation}) {
  //Itens constantes do App
  const [vehicleTypes] = useState(localObjects.vehicleTypes);
  //Lista Variáveis de acordo com o que foi selecionado
  const [BrandList, setBrandList] = useState([]);
  const [vehicleList, setVehicleList] = useState([]);
  const [vehicleModelList, setVehicleModelList] = useState([]);

  const [selectedType, setSelectedType] = useState('default');
  const [selectedBrand, setSelectedBrand] = useState('default');
  const [selectedvehicle, setSelectedVehicle] = useState('default');
  const [selectedVehicleModel, setSelectedVehicleModel] = useState('default');

  // funcoes auxiliares
  function resetAll() {
    setSelectedBrand('default');
    setSelectedVehicle('default');
    setSelectedVehicleModel('default');
    setBrandList([]);
    setVehicleList([]);
    setVehicleModelList([]);
  }
  function resetBrandChange() {
    setSelectedVehicle('default');
    setSelectedVehicle('default');
    setVehicleList([]);
    setVehicleModelList([]);
  }
  function resetVehicleChange() {
    setVehicleModelList([]);
    setSelectedVehicleModel('default');
  }

  //Watchs que observam o update dos estado das variaveis selecionadas
  useEffect(() => {
    resetAll();
    if (selectedType === 'default') {
      return;
    } else {
      getBrands(selectedType).then(resp => setBrandList(resp.data));
    }
  }, [selectedType]);

  useEffect(() => {
    resetBrandChange();
    if (selectedBrand === 'default') {
      return;
    } else {
      getVehicles(selectedType, selectedBrand).then(resp =>
        setVehicleList(resp.data),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBrand]);
  useEffect(() => {
    resetVehicleChange();
    if (selectedvehicle === 'default') {
      return;
    } else {
      getModels(selectedType, selectedBrand, selectedvehicle).then(resp =>
        setVehicleModelList(resp.data),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedvehicle]);

  // Métodos que Renderizam os itens dos pickers
  const renderVehicleTypes = vehicleTypes.map(item => (
    <Picker.Item label={item.name} value={item.value} key={item.value} />
  ));

  const renderBrandList = BrandList.map(item => (
    <Picker.Item label={item.name} value={item.id} key={item.id} />
  ));

  const renderVehicleList = vehicleList.map(item => (
    <Picker.Item label={item.name} value={item.id} key={item.id} />
  ));
  const renderVehicleModelList = vehicleModelList.map(item => (
    <Picker.Item label={item.name} value={item.id} key={item.id} />
  ));

  return (
    <SafeAreaView style={styles.Background}>
      <Header />
      <View style={styles.Container}>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.Label}>Tipo de Veículo</Text>
          <Picker
            style={styles.InputStyle}
            selectedValue={selectedType}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedType(itemValue)
            }>
            <Picker.Item label="Selecione um tipo de veiculo" value="default" />
            {renderVehicleTypes}
          </Picker>
        </View>

        <View style={{alignSelf: 'center'}}>
          <Text style={styles.Label}>Marca</Text>
          <Picker
            style={styles.InputStyle}
            selectedValue={selectedBrand}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedBrand(itemValue)
            }>
            <Picker.Item label="Selecione uma Marca" value="default" />
            {BrandList.length > 0 && renderBrandList}
          </Picker>
        </View>
        <View>
          <Text style={styles.Label}>Veículo</Text>
          <Picker
            style={styles.InputStyle}
            selectedValue={selectedvehicle}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedVehicle(itemValue)
            }>
            <Picker.Item label="Selecione o Veículo" value="default" />
            {vehicleList.length > 0 && renderVehicleList}
          </Picker>
        </View>

        <View>
          <Text style={styles.Label}>Modelo do Veículo</Text>
          <Picker
            style={styles.InputStyle}
            selectedValue={selectedVehicleModel}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedVehicleModel(itemValue)
            }>
            <Picker.Item label="Selecione o Modelo" value="default" />
            {vehicleModelList.length > 0 && renderVehicleModelList}
          </Picker>
        </View>
        {selectedVehicleModel != 'default' && (
          <Button
            title="Ver detalhes"
            color="#772ce8"
            onPress={() => {
              navigation.navigate('Details', {
                type: selectedType,
                brand: selectedBrand,
                vehicle: selectedvehicle,
                vehicleModel: selectedVehicleModel,
              });
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

export default Main;
