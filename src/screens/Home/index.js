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
        <Text>AloiApp (AloiOscar?) AloiEco</Text>
        <Text>Aplicativo para a tomada inteligente Aloioff!</Text>
        <Text>
          Utilize o botão abaixo para encontrar suas tomadas Aloioff pela rede!
        </Text>
        <Text>Acompanhe os tutoriais de instalação da tomada Aloioff</Text>
        <Text>- Tutorial como configurar o Aloioff</Text>
        <Text>
          - Tutorial como encontrar e registrar seu Aloioff nos assistentes
          virtuais
        </Text>
        <Text>Assista os vídeos de tutoriais (link para o youtube)</Text>
      </ScrollView>
    </Container>
  );
};
