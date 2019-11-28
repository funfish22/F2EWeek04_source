import React from 'react';
import { HashRouter, BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux';
import './reset.css';

import Navbar from 'components/atoms/Navbar';
import Footer from 'components/atoms/Footer';

import Home from 'page/Home';


import ReducerRoot from './reducer/index';

import { Provider } from 'react-redux';

let store = createStore(
    ReducerRoot,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Navbar/>
        <Home/>
        <Footer/>
      </HashRouter>
    </Provider>
  );
}

export default App;
