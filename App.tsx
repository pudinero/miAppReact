import React, {FC} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, DefaultTheme, Theme, DarkTheme} from '@react-navigation/native';
import HomeDrawer from './src/stack/DrawerStack';
import { useColorScheme } from 'react-native';

const MyTheme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgba(255, 45, 85, 100)',
  }
}

const App: FC = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
      <HomeDrawer />
    </NavigationContainer>
  );
};

export default App;
