import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #353839;
  padding: 10px;
`;

export const ListItem = styled.View`
  background-color: #414a4c;
  margin-top: 20px;
  padding: 30px;
  border-radius: 20px;
  border-color: ${(props) => props.border || 'grey'};
  border-width: 1.5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Detail = styled.View``;

export const Item = styled.Text`
  color: ghostwhite;
  font-size: 16px;
  font-weight: ${(props) => props.weight || 'normal'};
`;

export const Loading = styled.View`
  align-self: center;
  align-items: center;
  justify-content: center;
`;
