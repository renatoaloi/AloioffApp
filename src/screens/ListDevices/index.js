import React, {useState, useEffect} from 'react';
import {
  ButtonView,
  SecondaryText,
  Container,
  Header,
  H1,
  PrimaryText,
  LoadingIcon,
} from './styles';
import {
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
  FlatList,
  Image
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import db from '../../../db.json';
import * as Animatable from 'react-native-animatable';
import styleGlobal from '../../styles/global';
import dgram from 'react-native-udp'
import esp01 from '../../imgs/esp01';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {
  const navigation = useNavigation();
  const [foundEspList, setFoundEspList] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      listEsp();
    });
    return unsubscribe;
  }, [navigation]);

  async function listEsp() {
    var storageFoundEspList = 
      await AsyncStorage.getItem('@storage_Aloioff');
    console.log('storageFoundEspList', storageFoundEspList);
    var localFoundEspList = [];
    if (Array.isArray(JSON.parse(storageFoundEspList))) {
      localFoundEspList = JSON.parse(storageFoundEspList);
    }
    console.log('localFoundEspList', localFoundEspList);
    setFoundEspList(localFoundEspList);
  }
  
  return (
    <Container>
      <StatusBar
        backgroundColor={db.theme.colors.statuBar}
        barStyle="light-content"
      />
      <Header>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 90, height: 90, marginLeft: 20}}
            source={esp01}
          />
          <H1>Dispositivos Cadastrados</H1>
        </View>
      </Header>
      <Animatable.View animation="fadeInUpBig" style={[styleGlobal.footer]}>
        <View
          style={styleGlobal.scrollViewSignIn}
          keyboardShouldPersistTaps={'handled'}>
          <PrimaryText>Aloioff's encontrados!</PrimaryText>
          <View>
            <FlatList
              data={foundEspList}
              renderItem={({item}) => 
                <View style={{flexDirection: 'row', marginTop: 20}}>
                  <View style={{flex: 3}}>
                      <Text style={{color: 'black'}}>{item.key}</Text>
                  </View>
                  <View style={{flex: 1, borderStyle: 'solid', borderWidth: 1, borderColor: db.theme.colors.secondary, borderRadius: 5}}>
                  </View>
                </View>
              }
            />
          </View>
        </View>
      </Animatable.View>
    </Container>
  );
};
