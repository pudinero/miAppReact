import React, {FC} from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import AboutScreen from '../screens/AboutScreen';
import HomeScreen, { HomeStackProp } from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type HomeStackList = {
  Home: {};
  About: {};
  Contact: {};
};

const Stack = createStackNavigator<HomeStackList>();

const HomeStack: FC = () => {
  const {toggleDrawer} = useNavigation<HomeStackProp>();
  const {dark} = useTheme();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                toggleDrawer();
              }}
              style={{
                display: 'flex',
                paddingLeft: 17,
                flex: 1,
                justifyContent: 'center',
              }}>
              <Icon
                name="menu"
                color={dark ? 'white' : 'black'}
                size={30}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
