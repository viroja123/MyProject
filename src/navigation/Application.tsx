import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import splash from '../screens/splash/splash';
import {ApplicationParamsList} from '../utils/types';
// import drawerNavigator from './drawerNavigator';
import login from '../screens/auth/login/login';
import Home from '../screens/home/Home';
import Carousel from '../screens/carousel';
import Splash from '../screens/splash/splash';
import Login from '../screens/auth/login/login';
import Signup from '../screens/auth/signup';
import ForgotPassword from '../screens/auth/forgotPassword';
import OtpScreen from '../screens/auth/otp';

export default function Application() {
  const Stack = createNativeStackNavigator<ApplicationParamsList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.Splash}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.Splash} component={Splash} />
        <Stack.Screen name={Routes.Carousel} component={Carousel} />
        <Stack.Screen name={Routes.Login} component={Login} />
        <Stack.Screen name={Routes.Signup} component={Signup} />
        <Stack.Screen name={Routes.Forgot} component={ForgotPassword} />
        <Stack.Screen name={Routes.OtpScreen} component={OtpScreen} />
        <Stack.Screen name={Routes.Home} component={Home} />
        {/* <Stack.Screen name={Routes.Drawer} component={drawerNavigator} options={{headerShown:false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
