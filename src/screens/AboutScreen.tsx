import {useTheme} from '@react-navigation/native';
import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';
import GlobalStyles from '../styles/global';

const AboutScreen: FC = () => {
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
        La mejor app del mundo
      </Text>
    </SafeAreaView>
  );
};

export default AboutScreen;
