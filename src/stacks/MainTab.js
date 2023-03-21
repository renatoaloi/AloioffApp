import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import NewDevice from '../screens/NewDevice';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="New Device" component={NewDevice} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
