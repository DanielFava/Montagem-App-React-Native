import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import './styles/status_bar/index';

import Routes from './routes';

export default function app() {
   return (
      <NavigationContainer>
         <Routes />
      </NavigationContainer>
   );
}
