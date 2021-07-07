import React, {FC} from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import ContactStack from './ContactStack';

export type HomeDrawerStackList = {
  Home: {};
  About: {};
  Contact: {};
};

const Drawer = createDrawerNavigator<HomeDrawerStackList>();

const HomeDrawer: FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutStack} />
      <Drawer.Screen name="Contact" component={ContactStack} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
