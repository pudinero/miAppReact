import React, {FC} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import HomeDrawer from './src/stack/DrawerStack';

const App: FC = () => {
  return (
    <NavigationContainer>
      <HomeDrawer />
    </NavigationContainer>
  );
};

export default App;
