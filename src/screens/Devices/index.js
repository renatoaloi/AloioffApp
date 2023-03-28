import React, {useState} from 'react';
import {
  Container,
  Header,
  H1,
  PrimaryText,
  ListView,
  TextRegister,
  TextItem,
} from './styles';
import {
  Alert,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import db from '../../../db.json';
import * as Animatable from 'react-native-animatable';
import styleGlobal from '../../styles/global';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const dataArray = [
  {key: 'Devin'},
  {key: 'Dan'},
  {key: 'Dominic'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
  {key: 'Roberto'},
  {key: 'Lucas'},
  {key: 'Leonardo'},
  {key: 'Thiago'},
  {key: 'João'},
  {key: 'José'},
  {key: 'Vilma'},
  {key: 'Gilberto'},
  {key: 'Maria'},
  {key: 'Marcelo'},
];

const HeaderDevices = ({addButtonPress}) => {
  return (
    <View
      style={{
        flex: 0.2,
        backgroundColor: 'black',
        flexDirection: 'row',
      }}>
      <View style={{flex: 0.2}}></View>
      <Text
        style={{
          paddingTop: 20,
          paddingLeft: 20,
          fontSize: 20,
          flex: 0.6,
          textAlign: 'center',
        }}>
        DISPOSITIVOS
      </Text>
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
  const [count, setCount] = useState(0);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
  });

  const addButtonPress = () => setCount(count + 1);

  return (
    <Container>
      <StatusBar
        backgroundColor={db.theme.colors.statuBar}
        barStyle="light-content"
      />
      <HeaderDevices addButtonPress={addButtonPress} />
      <ListView>
        <FlatList
          data={dataArray}
          renderItem={({item}) => <TextItem>{item.key}</TextItem>}
        />
        <TextRegister>Total de Registros: {dataArray.length}</TextRegister>
      </ListView>
    </Container>
  );
};
