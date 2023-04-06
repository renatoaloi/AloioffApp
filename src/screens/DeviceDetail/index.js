import React from 'react';
import {Text, View} from 'react-native';
import db from '../../../db.json';
import {Container} from 'native-base';
import {PrimaryText, PrimaryView} from './styles';
import {useNavigation} from '@react-navigation/native';
import DeviceDetailHeader from '../../components/DeviceDetailHeader';

export default ({route, navigation}) => {
  const {ip, id, typeId, typeDescription, deviceName} = route.params;
  const addButtonPress = () => {
    console.log('passei aqui');
    navigation.goBack();
  };

  return (
    <Container>
      <StatusBar
        backgroundColor={db.theme.colors.statuBar}
        barStyle="light-content"
      />
      <DeviceDestailHeader addButtonPress={addButtonPress} />
      <PrimaryView>
        <PrimaryText>ip: {ip}</PrimaryText>
        <PrimaryText>Id: {id}</PrimaryText>
        <PrimaryText>TypeId: {typeId}</PrimaryText>
        <PrimaryText>Type Description: {typeDescription}</PrimaryText>
        <PrimaryText>Device Name: {deviceName}</PrimaryText>
      </PrimaryView>
    </Container>
  );
};
