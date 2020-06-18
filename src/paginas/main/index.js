import React, {Component} from 'react';
import {Alert} from 'react-native';
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
            <BotaoDelete onPress={this.BotaoDeletar}>
               <Icon name="delete" size={40} />
            </BotaoDelete>
         </ViewDelete>
         <ViewEdit>
            <BotaoEdit onPress={() => alert('Editado!')}>
               <Icon name="edit" size={40} />
            </BotaoEdit>
         </ViewEdit>
         <View>
            <Botao
               onPress={() => {
                  this.props.navigation.navigate('Informacao');
               }}>
               <Texto># {item.id}</Texto>
            </Botao>
         </View>
      </ViewRow>
   );
   BotaoDeletar = () => {
      Alert.alert(
         'Deletar ',
         'Você Deseja Deletar Essa Montagem !?',
         [
            {text: 'Cancel', onPress: () => alert('Cancelado')},
            {text: 'OK', onPress: () => alert('Deletado')},
         ],
         {cancelable: false},
      );
   };

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
