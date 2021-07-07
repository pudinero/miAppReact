import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';

const ContactScreen: FC = () => {
  return (
    <SafeAreaView style={{display: 'flex', flex: 1}}>
      <Text style={{alignSelf: 'center', marginVertical: 10}}>
        Hacé de cuenta que es un contact screen
      </Text>
    </SafeAreaView>
  );
};

export default ContactScreen;
