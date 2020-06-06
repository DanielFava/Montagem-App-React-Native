import styled from 'styled-components';

export const Container = styled.View`
   flex: 1;
`;

export const ScrollView = styled.ScrollView`
   background-color: #999999;
   height: 100%;
   width: 100%;
   padding-top: 10px;
`;

export const Texto = styled.Text``;

export const Botao = styled.TouchableOpacity`
   margin: 20px;
   border: 1px solid black;
   align-items: center;
   justify-content: center;
   height: 40px;
   border-radius: 15px;
`;

export const Input = styled.TextInput`
   margin-top: -10px;
`;

export const Linha = styled.View`
   width: 90%;
   background-color: #000;
   margin: 10px 0px;
   height: 1px;
`;

export const DivLinha = styled.View`
   align-items: center;
`;
