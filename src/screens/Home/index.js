import React from 'react';
import {Container, Header, H1, PrimaryText} from './styles';
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import db from '../../../db.json';
import * as Animatable from 'react-native-animatable';
import styleGlobal from '../../styles/global';
import AntDesign from 'react-native-vector-icons/AntDesign';
import logoHome from '../../imgs/logoHome';

export default () => {
  const navigation = useNavigation();
  const addButtonPress = () => Alert.alert('Ajuda');

  return (
    <Container>
      <StatusBar
        backgroundColor={db.theme.colors.statuBar}
        barStyle="light-content"
      />
      <Header>
        <View
          style={{
            flex: 0.1,
            backgroundColor: 'black',
            flexDirection: 'row',
          }}>
          <View style={{flex: 0.2}}></View>
          <View style={{overflow: 'visible'}}>
            <Image
              style={{width: 297, height: 144, marginLeft: 20}}
              source={logoHome}
            />
          </View>
          <TouchableOpacity
            onPress={addButtonPress}
            style={{
              paddingTop: 22,
              paddingRight: 22,
              flex: 0.2,
              alignItems: 'flex-end',
            }}>
            <AntDesign name="pluscircleo" size={26} color="tomato" />
          </TouchableOpacity>
        </View>
      </Header>

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
