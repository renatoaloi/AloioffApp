import React from 'react';
import {Text, View} from 'react-native';
import db from '../../../db.json';
import {Container} from 'native-base';
import {PrimaryText, PrimaryView} from './styles';

export default ({route, navigation}) => {
  const {ip, id, typeId, typeDescription, deviceName} = route.params;
  return (
    <PrimaryView>
      <PrimaryText>Ip: {ip}</PrimaryText>
      <PrimaryText>Id: {id}</PrimaryText>
      <PrimaryText>TypeId: {typeId}</PrimaryText>
      <PrimaryText>Type Description: {typeDescription}</PrimaryText>
      <PrimaryText>Device Name: {deviceName}</PrimaryText>
    </PrimaryView>
  );
};
