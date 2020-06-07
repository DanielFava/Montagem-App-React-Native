import React from 'react';
import colors from './estilos/themes/cor';
import {createStackNavigator} from '@react-navigation/stack';
import {Botao, Container} from './estilos/routes/index';
import Icon from 'react-native-vector-icons/AntDesign';

import Main from './paginas/main/index';
import Cadastro from './paginas/cadastro/index';
import Informacao from './paginas/informacao/index';
import Configuracao from './paginas/configuracao/index';

const StackMain = createStackNavigator();

function Principal({navigation}) {
   return (
      <StackMain.Navigator
         screenOptions={{
            headerLayoutPreset: 'center',
            headerTitleAlign: 'center',
            headerTintColor: colors.light,
            headerStyle: {
               backgroundColor: colors.dark,
            },
         }}>
         <StackMain.Screen
            name="Main"
            component={Main}
            options={{
               title: 'DashBoard',
               headerLeft: () => (
                  <Container>
                     <Botao
                        onPress={() => {
                           navigation.navigate('Configuracao');
                        }}>
                        <Icon name="setting" size={30} color="grey" />
                     </Botao>
                  </Container>
               ),
               headerRight: () => (
                  <Container>
                     <Botao
                        onPress={() => {
                           navigation.navigate('Cadastro');
                        }}>
                        <Icon name="pluscircleo" size={30} color="grey" />
                     </Botao>
                  </Container>
               ),
            }}
         />
      </StackMain.Navigator>
   );
}

const Stack = createStackNavigator();

function DashBoard() {
   return (
      <Stack.Navigator
         initialRouteName="Main"
         screenOptions={{
            headerLayoutPreset: 'center',
            headerTitleAlign: 'center',
            headerTintColor: colors.light,
            headerStyle: {
               backgroundColor: colors.dark,
            },
         }}>
         <Stack.Screen
            name="DashBoard"
            component={Principal}
            options={{title: 'DashBoard', headerShown: false}}
         />
         <Stack.Screen
            name="Informacao"
            component={Informacao}
            options={{title: 'Informacao'}}
         />
         <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{title: 'Cadastro'}}
         />
         <Stack.Screen
            name="Configuracao"
            component={Configuracao}
            options={{title: 'Configuração'}}
         />
      </Stack.Navigator>
   );
}

export default DashBoard;
