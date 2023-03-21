import React from 'react';
import {Container, Header, H1, PrimaryText} from './styles';
import {ScrollView, StatusBar, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import db from '../../../db.json';
import * as Animatable from 'react-native-animatable';
import styleGlobal from '../../styles/global';

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar
        backgroundColor={db.theme.colors.statuBar}
        barStyle="light-content"
      />
      <ScrollView>
        <Text></Text>
      </ScrollView>
    </Container>
  );
};
