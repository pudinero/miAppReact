import React, {FC} from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import AboutScreen from '../screens/AboutScreen';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useTheme} from '@react-navigation/native';
import {HomeStackList} from './HomeStack';

const Stack = createStackNavigator<HomeStackList>();

const AboutStack: FC = () => {
  const {toggleDrawer} = useNavigation();
  const {dark} = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerStyle: {
          backgroundColor: dark ? 'black' : 'white',
        },
        headerTintColor: dark ? 'white' : 'black',
      }}>
      <Stack.Screen
        name="About"
        component={AboutScreen}
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
    </Stack.Navigator>
  );
};

export default AboutStack;
