import {useTheme} from '@react-navigation/native';
import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';
import GlobalStyles from '../styles/global';

const ContactScreen: FC = () => {
  const {colors} = useTheme();

  return (
    <SafeAreaView
      style={[
        GlobalStyles.flex,
        GlobalStyles.flex1,
        {backgroundColor: colors.background},
      ]}>
      <Text
        style={[GlobalStyles.center, {marginVertical: 10, color: colors.text}]}>
        Hacé de cuenta que es un contact screen
      </Text>
    </SafeAreaView>
  );
};

export default ContactScreen;
