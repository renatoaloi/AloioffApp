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

export default () => {
  const navigation = useNavigation();
  const port = 12345;
  const notFoundText = 'Aqui vai o resultado';

  const [loading, setLoading] = useState(false);
  const [foundEspList, setFoundEspList] = useState([{key:notFoundText}]);
  const [countEspList, setCountEspList] = useState(1);

  const socket = dgram.createSocket('udp4');
  socket.on('message', function(msg, rinfo) {
    var buffer = {
      data: msg.toString(),
    };
    if (buffer.data !== 'ESP-ACK') 
    {
      console.log('data.data', buffer.data);
      var localFoundEspList = foundEspList;
      if (foundEspList.find(i => i.key == notFoundText))
      {
        localFoundEspList = [];
      }
      setFoundEspList([
        ...localFoundEspList,
        {
          key: "ESP #" + countEspList + " :: " + buffer.data,
          ip: buffer.data,
          idx: countEspList,
        }
      ]);
      setCountEspList(countEspList+1);
    }
    console.log('Message received', msg);
  });

  useEffect(() => {
    if (foundEspList.length > 1) {
      console.log('achei um esp8266 na rede!', foundEspList[-1]?.host);
    }
  }, [foundEspList]);

  function tryToConnect(options) {
    socket.bind(options.port)
    socket.once('listening', function() {
      socket.send('ESP-ACK', undefined, undefined, options.port, options.host, function(err) {
        if (err) throw err
        console.log('Message sent!')
      })
    })
  }

  function beginSearch() {
    setLoading(true);
    setFoundEspList([{key:notFoundText}]);
    const options = {
      port: port,
      host: '192.168.0.255',
      localAddress: '127.0.0.1',
      reuseAddress: true,
    };
    tryToConnect(options);
  }

  function cancelSearch() {
    setLoading(false);
    socket.close();
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
          <H1>Adicionar Dispositivo</H1>
        </View>
      </Header>
      <Animatable.View animation="fadeInUpBig" style={[styleGlobal.footer]}>
        <View
          style={styleGlobal.scrollViewSignIn}
          keyboardShouldPersistTaps={'handled'}>
          <PrimaryText>Encontre seu Aloioff!</PrimaryText>
          <SecondaryText>
            Clique no botão abaixo para pesquisar os dispositivos Aloioff pela rede!
          </SecondaryText>
          <ButtonView>
            {!loading && (
              <TouchableOpacity
                onPress={() => beginSearch()}
                style={[styleGlobal.signIn, styleGlobal.signInColor]}>
                <Text style={styleGlobal.textBtnSignUp}>Pesquisar</Text>
              </TouchableOpacity>
            )}
            {loading && (
              <>
                <LoadingIcon size="large" color={db.theme.colors.primary} />
                <TouchableOpacity
                  onPress={() => cancelSearch()}
                  style={[styleGlobal.signIn, styleGlobal.signInColor]}>
                  <Text style={styleGlobal.textBtnSignUp}>Cancelar</Text>
                </TouchableOpacity>
              </>
            )}
          </ButtonView>
          <View>
            <FlatList
              data={foundEspList}
              renderItem={({item}) => 
                <View style={{flexDirection: 'row', marginTop: 20}}>
                  <View style={{flex: 3}}>
                      <Text style={{color: 'black'}}>{item.key}</Text>
                  </View>
                  <View style={{flex: 1, borderStyle: 'solid', borderWidth: 1, borderColor: db.theme.colors.secondary, borderRadius: 5}}>
                    <TouchableOpacity
                      onPress={() => {
                        console.log("passei aqui no botão adicionar!");
                      }}
                      style={{}}>
                      <Text style={{color: db.theme.colors.secondary, textAlign:'center'}}>+ Adicionar</Text>
                    </TouchableOpacity>
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
