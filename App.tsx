import React from 'react';
import {StatusBar} from 'react-native';
import Characters from './src/pages/characters';

const App = () => {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#000000" />
      <Characters />
    </>
  );
};

export default App;
