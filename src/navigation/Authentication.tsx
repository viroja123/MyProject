import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import login from '../screens/auth/login/login';
import Login from '../screens/auth/login/login';

export default function Authentication() {
  const stack = createNativeStackNavigator();

  return (
    <stack.Navigator>
      <stack.Screen name={Routes.Login} component={Login} />
    </stack.Navigator>
  );
}
