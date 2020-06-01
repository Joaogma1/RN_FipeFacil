/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Routes from './src/routes.js';

// const theme = {
//   ...DefaultTheme,
//   roundness: 2,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#3498db',
//     accent: '#f1c40f',
//   },
// };

const App = () => {
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
