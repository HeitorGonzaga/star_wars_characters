import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {Container, ListItem, Detail, Item} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import ListCharactersProps from '../../interfaces/ListCharactersProps';
import CharacterProps from '../../interfaces/CharacterProps';
import {useNavigation} from '@react-navigation/native';

const Characters = () => {
  const [nextPage, setNextPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    setNextPage(() => 1);
    setCharacters(() => []);
    _handleLoadData();
  }, []);

  const _handleLoadData = async () => {
    if (nextPage != 0) {
      try {
        setLoading(() => true);
        const res = await api.get<ListCharactersProps>(`people/?page=
        ${nextPage}`);
        if (res.status == 200) {
          if (res.data.next) {
            setNextPage(() => nextPage + 1);
            setCharacters(() => [...characters, ...res.data.results]);
          } else {
            setNextPage(() => 0);
          }
        }
        setLoading(() => false);
      } catch (err) {
        setLoading(() => false);
      }
    }
  };

  const _handleDatail = (character: CharacterProps) => {
    navigation.navigate('Detail', {character: character})
  };

  const renderItem = ({item}: {item: CharacterProps}) => (
    <ListItem onPress={() => _handleDatail(item)}>
      <Detail>
        <Item weight="bold">Name - {item.name}</Item>
        <Item>Birth Year - {item.birth_year}</Item>
      </Detail>
      <Icon name="arrow-forward-ios" size={24} color="ghostwhite" />
    </ListItem>
  );

  return (
    <Container>
      <FlatList
        data={characters}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onRefresh={_handleLoadData}
        refreshing={loading}
        onEndReached={_handleLoadData}
        onEndReachedThreshold={0.1}
        keyExtractor={(item) => item.name}
      />
    </Container>
  );
};

export default Characters;
