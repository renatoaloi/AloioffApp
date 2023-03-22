import React from 'react';
import {Container, Header, H1, PrimaryText} from './styles';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import db from '../../../db.json';
import * as Animatable from 'react-native-animatable';
import styleGlobal from '../../styles/global';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar
        backgroundColor={db.theme.colors.statuBar}
        barStyle="light-content"
      />

      <View
        style={{
          flex: 0.1,
          backgroundColor: 'black',
        }}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text
            style={{
              paddingTop: 20,
              paddingLeft: 20,
              fontFamily: 'roboto mono',
              fontSize: 20,
            }}>
            DISPOSITIVOS
          </Text>
          <AntDesign
            style={{paddingTop: 20, paddingLeft: 20}}
            name="pluscircleo"
            size={26}
            color="red"
          />
        </View>
      </View>
      <ScrollView
        style={{flex: 0.5, backgroundColor: 'black', marginBottom: 100}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop: 20}}>Novo Dispositivo</Text>
          <MaterialIcons
            style={{paddingTop: 20, paddingLeft: 20}}
            name="devices-other"
            size={16}
            color="red"
          />
        </View>

        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>Texto3</Text>
        <Text style={{marginTop: 20}}>TextoFinal</Text>
      </ScrollView>
    </Container>
  );
};
