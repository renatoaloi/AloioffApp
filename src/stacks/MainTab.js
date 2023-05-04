import React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import NewDevice from '../screens/NewDevice';
import Devices from '../screens/Devices';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import db from '../../db.json';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarStyle: {
        height: 60,
        paddingHorizontal: 5,
        paddingTop: 0,
        paddingBottom: 10,
        backgroundColor: db.theme.colors.mainBg,
        position: 'absolute',
        borderTopWidth: 0,
        fontSize: 26,
      },
      tabBarLabelStyle: {
        fontSize: 16,
      },
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Devices') {
          iconName = focused ? 'power' : 'power-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person-circle' : 'person-circle-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarBackground: () => {
        db.theme.colors.mainBg;
      },
    })}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Devices" component={Devices} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
