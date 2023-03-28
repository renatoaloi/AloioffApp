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
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TitleText, SubtitleText} from './styles';

const HomeHeader = ({addButtonPress}) => {
  return (
    <View
      style={{
        flex: 0.3,
        backgroundColor: 'black',
        flexDirection: 'row',
      }}>
      <View style={{flex: 0.2}}></View>
      <View style={{flex: 0.6, alignItems: 'center', marginTop: 10}}>
        <Image
          style={{
            width: 120,
            height: 60,
            marginLeft: 20,
            opacity: 0.6,
          }}
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
  );
};

export default () => {
  const navigation = useNavigation();
  const addButtonPress = () => Alert.alert('Ajuda');

  return (
    <Container>
      <StatusBar
        backgroundColor={db.theme.colors.statuBar}
        barStyle="light-content"
      />

      <HomeHeader addButtonPress={addButtonPress} />

      <ScrollView>
        <TitleText>AloiEco</TitleText>
        <SubtitleText>
          Aplicativo para a tomada inteligente Aloioff!
        </SubtitleText>
        <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 16}}>
            Utilize o botão abaixo para encontrar suas tomadas Aloioff pela
            rede!
          </Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                borderStyle: 'solid',
                borderWidth: 4,
                flex: 0.25,
                margin: 20,
                borderRadius: 20,
                borderColor: 'tomato',
                opacity: 0.6,
              }}>
              <Ionicons name="add-outline" color="tomato" size={72} />
            </View>
          </View>
        </View>
        <TitleText>Tutoriais de Instalação</TitleText>
        <SubtitleText>
          Acompanhe os tutoriais de instalação da tomada Aloioff!
        </SubtitleText>
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
