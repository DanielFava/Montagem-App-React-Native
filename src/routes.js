import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Botao, Texto, Container} from './estilos/routes/index';

import Main from './paginas/main/index';
import Cadastro from './paginas/cadastro/index';
import Informacao from './paginas/informacao/index';

const Stack = createStackNavigator();

function DashBoard() {
   return (
      <Stack.Navigator
         initialRouteName="Main"
         //headerMode={false}
         screenOptions={{
            // headerTransparent: true,
            headerLayoutPreset: 'center',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
               backgroundColor: '#333',
            },
         }}>
         <Stack.Screen
            name="Main"
            component={Main}
            options={{
               title: 'DashBoard',
               headerRight: () => (
                  <Container>
                     <Botao onPress={() => alert('This is a button!')}>
                        <Texto>+</Texto>
                     </Botao>
                  </Container>
               ),
            }}
         />
         <Stack.Screen
            name="Informacao"
            component={Informacao}
            options={{title: 'Informacao'}}
         />
         <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{title: 'Cadastro', headerShown: false}}
         />
      </Stack.Navigator>
   );
}

export default DashBoard;
