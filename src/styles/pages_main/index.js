import styled from 'styled-components';

export const Container = styled.View`
   background-color: #fff
   flex: 1;
`;

export const Texto = styled.Text`
   color: #000;
`;

export const Botao = styled.TouchableOpacity`
   height: 70px;
   width: 70px;
   border-radius: 100px;
   border: 1px solid black;
   align-items: center;
   justify-content: center;
   position: absolute;
   bottom: 10px;
   right: 10px;
`;

export const FlatList = styled.FlatList`
   background-color: #123;
`;

export const View = styled.View`
   background-color: #333;
   height: 30px;
   margin-bottom: 15px;
`;
