import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import { AppRouter } from './router/AppRouter';


export const RickMortyApp = () => {
  return <>
  <Provider store={store}>
      <AppRouter/>
  </Provider>
  </>
};
