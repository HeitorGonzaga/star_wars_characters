import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';

import {Container, ListItem, Loading, Item} from './styles';

import api from '../../services/api';

import ListCharactersProps from '../../interfaces/ListCharactersProps';
import CharacterProps from '../../interfaces/CharacterProps';

const Characters = () => {

  const [nextPage, setNextPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<CharacterProps[]>([]);

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

  const renderItem = ({item}: {item: CharacterProps}) => (
    <ListItem>
      <Item>{item.name}</Item>
    </ListItem>
  );

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <Loading>
        <ActivityIndicator size={50} color={'#ff8c00'} />
      </Loading>
    );
  };

  return (
    <Container>
      <FlatList
        data={characters}
        renderItem={renderItem}
        onEndReached={_handleLoadData}
        onEndReachedThreshold={0.1}
        keyExtractor={(item) => item.name}
        ListFooterComponent={renderFooter}
      />

    </Container>
  );
};

export default Characters;
