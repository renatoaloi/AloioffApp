import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ViewMain} from './styles';

const NewDeviceHeader = ({addButtonPress}) => {
  return (
    <ViewMain>
      <View style={{flex: 0.2}}></View>
      <TouchableOpacity
        onPress={addButtonPress}
        style={{
          paddingTop: 22,
          flex: 0.2,
          alignItems: 'flex-start',
        }}>
        <Ionicons
          name="md-arrow-back-circle-outline"
          size={26}
          color="tomato"
        />
      </TouchableOpacity>
      <Text
        style={{
          paddingTop: 20,
          fontSize: 20,
          flex: 0.8,
          textAlign: 'center',
        }}>
        NOVO DISPOSITIVO
      </Text>
    </ViewMain>
  );
};

export default NewDeviceHeader;
