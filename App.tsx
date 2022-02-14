import React from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import configureStore from './src/store/configureStore';
import { Provider as StoreProvider } from 'react-redux'

const store = configureStore()



const App  = () => {

  return (
    <StoreProvider store={store}>
      <StackNavigator/>
    </StoreProvider>
  );

};


export default App;

