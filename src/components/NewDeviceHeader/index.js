import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ViewMain} from './styles';

const NewDeviceHeader = ({addButtonPress}) => {
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
            marginTop: 25,
            fontSize: 23,
            textAlign: 'center',
          }}>
          NOVO DISPOSITIVO
        </Text>
      </View>
      <View
        style={{
          flex: 0.2,
        }}></View>
    </ViewMain>
  );
};

export default NewDeviceHeader;
