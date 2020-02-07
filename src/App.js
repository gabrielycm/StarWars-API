import React from 'react';
import './App.css';
import Home from './screens/Home/Home';
import { Provider } from 'react-redux';
import store from './store/index';
import GlobalStyle from './assets/Global/GlobalStyle';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Home/>
    </Provider>
  );
}

export default App;
