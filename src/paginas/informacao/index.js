import React, {Component} from 'react';
// import {} from 'react-native'
import {Container, Texto, Botao} from './styles';

export default class Informacao extends Component {
   render() {
      return (
         <Container>
            <Texto>Ola</Texto>
            <Botao onPress={() => this.props.navigation.push('Cadastro')}>
               <Texto>Cadastro</Texto>
            </Botao>
         </Container>
      );
   }
}
