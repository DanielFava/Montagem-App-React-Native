import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import './estilos/status_bar/index';

import Routes from './routes';

export default function app() {
   return (
      <NavigationContainer>
         <Routes />
      </NavigationContainer>
   );
}
