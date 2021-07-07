import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useLayoutEffect} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {HomeStackList} from '../stack/HomeStack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type HomeStackProp = StackNavigationProp<HomeStackList, 'Home'>;

const HomeScreen: FC = () => {
  const {navigate, toggleDrawer} = useNavigation<HomeStackProp>();
  const {setOptions} = useNavigation<HomeStackProp>();

  useLayoutEffect(() => {
    setOptions({
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
    });
  }, [setOptions, toggleDrawer]);

  return (
    <SafeAreaView style={{display: 'flex', flex: 1}}>
      <Text style={{alignSelf: 'center', marginTop: 10, fontSize: 35, fontWeight: 'bold'}}>
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
