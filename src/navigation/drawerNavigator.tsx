import { View, Text } from 'react-native'
import React from 'react'
import {DrawerContent, createDrawerNavigator} from '@react-navigation/drawer';
import {ApplicationParamsList} from '../utils/types';
import { Routes } from './routes';
import Home from '../screens/home/Home';
import About from '../screens/about/About';


export default function drawerNavigator() {
    const Drawer = createDrawerNavigator<ApplicationParamsList>();

  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen name={Routes.Home} component={Home} options={{
        headerStyle: {
          backgroundColor: 'transparent',
        },
      }} />
    <Drawer.Screen name={Routes.About} component={About} />
  </Drawer.Navigator>
  )
}