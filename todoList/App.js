import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackNavigator } from './Stack';
import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App