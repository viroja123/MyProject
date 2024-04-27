// import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {Routes} from '../navigation/routes';
import {DrawerScreenProps} from '@react-navigation/drawer';


export type ApplicationParamsList = {
  [Routes.Home]:undefined;
  [Routes.About]: undefined;
  [Routes.Splash]: undefined;
  [Routes.Drawer]: undefined;
  [Routes.login]: undefined;

};

//first screen
export type SplashScreenProps = DrawerScreenProps<ApplicationParamsList, 'Splash'>;


//auth screen
export type LoginScreenProps  = NativeStackScreenProps<ApplicationParamsList,"login">;



//application screens
export type HomeScreenProps = DrawerScreenProps<ApplicationParamsList, 'Home'>;
export type AboutScreenProps = DrawerScreenProps<
  ApplicationParamsList,
  'About'
>;
export type DrawerScreenProps = DrawerScreenProps<ApplicationParamsList, 'Drawer'>;

