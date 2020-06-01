/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles.js';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Header() {
  return (
    <>
      <View style={styles.Header}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Icon name="car" size={24} style={{}} color="#000" />
          <Text style={styles.Logo}> FIPE Fácil</Text>
        </View>
      </View>
      <View style={styles.Divider} />
    </>
  );
}

export default Header;
