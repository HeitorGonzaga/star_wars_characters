import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Characters from '../pages/characters';
import Detail from '../pages/detail';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator headerMode="none" initialRouteName="Characters">
      <App.Screen name="Characters" component={Characters} />
      <App.Screen name="Detail" component={Detail} />
    </App.Navigator>
  );
};

export default AppRoutes;
