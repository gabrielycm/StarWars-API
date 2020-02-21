import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/index';
import GlobalStyle from './assets/Global/GlobalStyle';
import Routers from './Router';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Routers/>
    </Provider>
  );
}

export default App;
