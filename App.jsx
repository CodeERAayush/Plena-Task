import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigators/StackNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { Colors } from './src/constants/Colors';
export default function App() {

  return (

    <NavigationContainer>
      <Provider store={store}>
        <StatusBar
        backgroundColor={Colors.Primary}
        />
        <StackNavigator />
      </Provider>
    </NavigationContainer>
  );
}