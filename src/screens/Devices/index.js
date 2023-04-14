import React, {useState, useEffect} from 'react';
import {Container, ListView, TextRegister, TextItem} from './styles';
import {StatusBar, FlatList, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import db from '../../../db.json';
import DevicesHeader from '../../components/DevicesHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';

const dataArray = [];

const storageKey = '@storage_aloioff';

export default () => {
  const navigation = useNavigation();
  const [arrayList, setArrayList] = useState(dataArray);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
  });

  const addButtonPress = () => {
    console.log('passei aqui');
    navigation.navigate('NewDevice');
  };

  const Search = async () => {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    const jsonFound = jsonValue != null ? JSON.parse(jsonValue) : null;
    console.log('storage found', jsonFound);
    var arrayListLocal = [...arrayList, jsonFound];
    console.log('array found', arrayListLocal);
    setArrayList(arrayListLocal);
  };

  return (
    <Container>
      <StatusBar
        backgroundColor={db.theme.colors.statuBar}
        barStyle="light-content"
      />
      <DevicesHeader addButtonPress={addButtonPress} />
      <TouchableOpacity
        onPress={() => {
          console.log('passei aqui no botão recarregar!');
          Search();
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: db.theme.colors.success,
            borderStyle: 'solid',
            borderColor: db.theme.colors.success,
            borderRadius: 5,
            borderWidth: 1,
          }}>
          Recarregar
        </Text>
      </TouchableOpacity>
      <ListView>
        <FlatList
          data={arrayList}
          renderItem={({item}) => <TextItem>{item.ip}</TextItem>}
        />
        <TextRegister>Total de Registros: {dataArray.length}</TextRegister>
      </ListView>
    </Container>
  );
};
