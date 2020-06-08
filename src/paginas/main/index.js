import React, {Component} from 'react';
import api from '../../servicos/server/api';
import Icon from 'react-native-vector-icons/AntDesign';
import {Container, Texto} from '../../estilos/themes/geral';
import {
   FlatList,
   Botao,
   ViewRow,
   ViewEdit,
   ViewDelete,
   View,
   BotaoDelete,
   BotaoEdit,
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
      <ViewRow>
         <ViewDelete>
            <BotaoDelete>
               <Icon name="delete" size={40} />
            </BotaoDelete>
         </ViewDelete>
         <ViewEdit>
            <BotaoEdit>
               <Icon name="edit" size={40} />
            </BotaoEdit>
         </ViewEdit>
         <View>
            <Botao>
               <Texto>Aqui</Texto>
               <Texto>Aqui</Texto>
               <Texto>Aqui</Texto>
            </Botao>
         </View>
      </ViewRow>

      // <ViewRow>
      //    <View>
      //       <Botao>
      //          <Texto>Aqui</Texto>
      //       </Botao>
      //    </View>
      //    <ViewBotao>
      //       <Botaotools>
      //          <Icon name="edit" size={32} />
      //       </Botaotools>
      //       <Botaotools>
      //          <Icon name="delete" size={32} />
      //       </Botaotools>
      //    </ViewBotao>
      // </ViewRow>
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
