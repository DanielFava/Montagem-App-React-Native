import styled from 'styled-components';
import colors from '../../estilos/themes/cor';

export const FlatList = styled.FlatList`
   margin: 15px;
`;

export const ViewRow = styled.View`
   background-color: ${colors.grey};
   height: 55px;
   width: 100%;
   flex-direction: row-reverse;
   border-radius: 10px;
   padding-right: 15px;
`;

export const View = styled.View`
   /* background-color: #8a2be2; */
   height: 55px;
   width: 70%;
`;

export const Botao = styled.TouchableOpacity`
   /* background-color: #6495ed; */
   height: 55px;
   width: 100%;
`;

export const ViewEdit = styled.View`
   background-color: #ccffcc;
   height: 55px;
   width: 15%;
`;

export const ViewDelete = styled.View`
   background-color: #ffcccc;
   height: 55px;
   width: 15%;
`;

export const BotaoEdit = styled.TouchableOpacity`
   background-color: ${colors.grey};
   height: 55px;
   width: 100%;
   justify-content: center;
   align-items: center;
   border: 1px solid black;
`;

export const BotaoDelete = styled.TouchableOpacity`
   background-color: ${colors.grey};
   height: 55px;
   width: 100%;
   justify-content: center;
   align-items: center;
   border: 1px solid black;
`;
