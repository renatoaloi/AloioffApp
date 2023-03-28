import React, {useState} from 'react';
import {Container, ListView, TextRegister, TextItem} from './styles';
import {StatusBar, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import db from '../../../db.json';
import DevicesHeader from '../../components/DevicesHeader';

const dataArray = [
  {key: 'Devin'},
  {key: 'Dan'},
  {key: 'Dominic'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
  {key: 'Roberto'},
  {key: 'Lucas'},
  {key: 'Leonardo'},
  {key: 'Thiago'},
  {key: 'João'},
  {key: 'José'},
  {key: 'Vilma'},
  {key: 'Gilberto'},
  {key: 'Maria'},
  {key: 'Marcelo'},
];

export default () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
  });

  const addButtonPress = () => setCount(count + 1);

  return (
    <Container>
      <StatusBar
        backgroundColor={db.theme.colors.statuBar}
        barStyle="light-content"
      />
      <DevicesHeader addButtonPress={addButtonPress} />
      <ListView>
        <FlatList
          data={dataArray}
          renderItem={({item}) => <TextItem>{item.key}</TextItem>}
        />
        <TextRegister>Total de Registros: {dataArray.length}</TextRegister>
      </ListView>
    </Container>
  );
};
