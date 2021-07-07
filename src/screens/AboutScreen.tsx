import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';

const AboutScreen: FC = () => {
  return (
    <SafeAreaView style={{display: 'flex', flex: 1}}>
      <Text style={{alignSelf: 'center', marginVertical: 10}}>
        La mejor app del mundo
      </Text>
    </SafeAreaView>
  );
};

export default AboutScreen;
