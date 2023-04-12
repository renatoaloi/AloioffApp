import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ViewMain} from './styles';

const DeviceDestailHeader = ({addButtonPress}) => {
  return (
    <ViewMain>
      <View
        style={{
          flex: 0.2,
        }}>
        <TouchableOpacity
          onPress={addButtonPress}
          style={{
            paddingTop: 22,
            paddingLeft: 10,
          }}>
          <Ionicons
            name="md-arrow-back-circle-outline"
            size={35}
            color="tomato"
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.6}}>
        <Text
          style={{
            marginTop: 10,
            fontSize: 23,
            textAlign: 'center',
          }}>
          Detalhes do Dispositivo
        </Text>
      </View>
      <View
        style={{
          flex: 0.2,
        }}></View>
    </ViewMain>
  );
};

export default DeviceDestailHeader;
