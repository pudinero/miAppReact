import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useLayoutEffect} from 'react';
import {SafeAreaView, StatusBar, Text, TouchableOpacity} from 'react-native';
import {HomeStackList} from '../stack/HomeStack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GlobalStyles from '../styles/global';

export type HomeStackProp = StackNavigationProp<HomeStackList, 'Home'>;

const HomeScreen: FC = () => {
  const {navigate} = useNavigation<HomeStackProp>();
  const {colors, dark} = useTheme();

  //useLayoutEffect(() => {}, []);

  return (
    <SafeAreaView
      style={[
        GlobalStyles.flex,
        GlobalStyles.flex1,
        {backgroundColor: colors.background},
      ]}>
      <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />
      <Text
        style={[
          GlobalStyles.center,
          GlobalStyles.h1,
          {marginTop: 10, fontWeight: 'bold', color: colors.text},
        ]}>
        MIRÁ QUE TE COMO EH!
      </Text>
      <TouchableOpacity
        onPress={() => navigate('About', {})}
        style={{
          backgroundColor: 'grey',
          marginHorizontal: 10,
          marginVertical: 10,
          borderRadius: 5,
        }}>
        <Text style={{alignSelf: 'center', padding: 10, color: 'white'}}>
          Ir a about
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate('Contact', {})}
        style={{
          backgroundColor: 'grey',
          marginHorizontal: 10,
          borderRadius: 5,
        }}>
        <Text style={{alignSelf: 'center', padding: 10, color: 'white'}}>
          Ir a contact
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
