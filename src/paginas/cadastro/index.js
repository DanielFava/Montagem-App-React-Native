import React, {Component} from 'react';
import {
   Container,
   Texto,
   Botao,
   DivLinha,
   Input,
   Linha,
   ScrollView,
} from './styles';

export default class Cadastro extends Component {
   render() {
      return (
         <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
               <Input placeholder="nome" />
               <Input placeholder="telefone" />
               <DivLinha>
                  <Linha />
               </DivLinha>
               <Input placeholder="cep" />
               <Input placeholder="endereço" />
               <Input placeholder="bairro" />
               <Input placeholder="cidade" />
               <Input placeholder="numero" />
               <Input placeholder="complemento" />
               <DivLinha>
                  <Linha />
               </DivLinha>
               <Input placeholder="montagem" />
               <Input placeholder="valor" />
               <DivLinha>
                  <Linha />
               </DivLinha>
               <Input placeholder="observação" multiline={true} />
            </ScrollView>
            <Botao>
               <Texto>Salvar</Texto>
            </Botao>
         </Container>
      );
   }
}
