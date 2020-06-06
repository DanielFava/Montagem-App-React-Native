import React, {Component} from 'react';
import api from '../../servicos/server/api';
import {
   Container,
   Texto,
   Botao,
   DivLinha,
   Input,
   Linha,
   ScrollView,
   FlatList,
   View,
} from './styles';

export default class Main extends Component {
   constructor(props) {
      super(props);

      this.state = {
         docs: [],
      };
   }

   componentDidMount() {
      this.loadMontagem();
   }

   loadMontagem = async () => {
      const response = await api.get('/montagem');
      const docs = response.data;

      this.setState({
         docs: [...docs],
      });
   };

   Item = ({item}) => (
      <View>
         <Texto>{item.id}</Texto>
         <Texto>{item.status.toString()}</Texto>
      </View>
   );

   render() {
      return (
         <Container>
            <FlatList
               data={this.state.docs}
               renderItem={this.Item}
               keyExtractor={(item) => item.id.toString()}
            />
         </Container>
      );
   }
}
