import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import db from '../../../db.json';
import {PrimaryTitle, PrimaryText, PrimaryView, Container} from './styles';
import {useNavigation} from '@react-navigation/native';
import DeviceDetailHeader from '../../components/DeviceDetailHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default ({route, navigation}) => {
  const {ip, id, typeId, typeDescription, deviceName} = route.params;
  const addButtonPress = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <StatusBar
        backgroundColor={db.theme.colors.statuBar}
        barStyle="light-content"
      />
      <DeviceDetailHeader addButtonPress={addButtonPress} />
      <PrimaryView>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 0.6}}>
            <PrimaryTitle>IP: </PrimaryTitle>
            <PrimaryText>{ip}</PrimaryText>
            <PrimaryTitle>UserID: </PrimaryTitle>
            <PrimaryText>{id}</PrimaryText>
            <PrimaryTitle>Modo de Operação: </PrimaryTitle>
            <PrimaryText>{typeDescription}</PrimaryText>
            <PrimaryTitle>Nome do Dispositivo: </PrimaryTitle>
            <PrimaryText>{deviceName}</PrimaryText>
          </View>
          <View
            style={{
              flex: 0.4,
              alignItems: 'center',
            }}>
            {typeId === 1 ? (
              <Ionicons name="logo-amazon" size={120} color="white" />
            ) : typeId === 2 ? (
              <Ionicons name="logo-google" size={120} color="white" />
            ) : typeId === 3 ? (
              <Ionicons name="home" size={120} color="white" />
            ) : typeId === 4 ? (
              <Ionicons name="logo-nodejs" size={120} color="white" />
            ) : (
              <Ionicons
                name="ios-help-circle-outline"
                size={120}
                color="white"
              />
            )}
          </View>
        </View>
      </PrimaryView>
    </Container>
  );
};
