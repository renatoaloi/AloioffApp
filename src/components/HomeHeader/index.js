import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import logoHome from '../../imgs/logoHome';
import {ViewMain} from './styles';

const HomeHeader = ({addButtonPress}) => {
  return (
    <ViewMain
      style={{
        flex: 0.2,
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
    </ViewMain>
  );
};

export default HomeHeader;
