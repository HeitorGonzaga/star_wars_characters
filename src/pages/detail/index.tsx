import React, {useEffect, useState} from 'react';
import {Container, ListItem, Details, Item} from './styles';
import CharacterProps from '../../interfaces/CharacterProps';
import {useRoute, RouteProp} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
type ParamList = {
  Parametros: {
    character: CharacterProps;
  };
};

const Detail = () => {
  const route = useRoute<RouteProp<ParamList, 'Parametros'>>();
  const [character, setCharacter] = useState<CharacterProps>();
  useEffect(() => {
    setCharacter(() => route.params.character);
  },[]);

  return (
    <Container>

      <ListItem>
        <LottieView
          source={require('../../assets/starwars.json')}
          style={{width:200, height:200}}
          autoPlay
          loop
        />
        <Details>
          <Item weight="bold">Name - {character?.name}</Item>
          <Item>Birth Year - {character?.birth_year}</Item>
          <Item>Eye Color - {character?.eye_color}</Item>
          <Item>Gender - {character?.gender}</Item>
          <Item>Skin Color - {character?.skin_color}</Item>
        </Details>
      </ListItem>
    </Container>
  );
};

export default Detail;
