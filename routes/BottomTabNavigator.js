import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import HomeStack from './HomeStack';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" color={tintColor} size={40} />
        )
      }
    }
  },
  {
    initialRouteName: 'Home',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'red',
      inactiveTintColor: '#888',
      activeBackgroundColor: 'black', 
      inactiveBackgroundColor: 'black', 
      pressColor: 'white', 
      indicatorStyle: {
        backgroundColor: 'black'
      },
      style: {
        backgroundColor: 'black' 
      }
    }
  }
);

export default BottomTabNavigator;
