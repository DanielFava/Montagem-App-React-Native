import React, {Component} from 'react';
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
} from '../../styles/pages_main';

export default class Main extends Component {
   constructor(props) {
      super(props);

      // this.state = {
      //    dados: [
      //       {
      //          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      //          title: 'First Item',
      //       },
      //       {
      //          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      //          title: 'Second Item',
      //       },
      //       {
      //          id: '58694a0f-3da1-471f-bd96-145571e29d72',
      //          title: 'Third Item',
      //       },
      //    ],
      // };
   }

   // Item = ({item}) => (
   //    <View>
   //       <Texto>{item.title}</Texto>
   //    </View>
   // );

   Cadastrar = () => {
      this.props.navigation.navigate('Cadastro');
   };

   render() {
      return (
         <Container>
            {/* <FlatList
               data={this.state.dados}
               renderItem={this.Item}
               keyExtractor={(item) => item.id.toString()}
            /> */}
         </Container>
      );
   }
}
