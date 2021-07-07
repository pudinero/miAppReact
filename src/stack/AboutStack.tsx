import React, {FC} from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import AboutScreen from '../screens/AboutScreen';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {HomeStackList} from './HomeStack';

const Stack = createStackNavigator<HomeStackList>();

const AboutStack: FC = () => {
  const {toggleDrawer} = useNavigation();
  return (
    <Stack.Navigator initialRouteName="About">
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
              <Icon name="menu" color="black" size={30} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
