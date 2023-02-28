import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
}
