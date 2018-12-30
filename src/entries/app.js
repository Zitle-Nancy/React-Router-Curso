import React,{ Fragment } from 'react';
import { render } from 'react-dom'; //Una forma de hacerlo
import { BrowserRouter } from 'react-router-dom';
import Home from  '../pages/containers/home';
import Header from '../pages/components/header';
import data from '../api.json';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/data';
/** 
 * @const initialState
 * defines el modelo de dato que vas a usar
*/

const initialState = {
  "data": {
    ...data,
  },
  search:[]
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //enhancer
)

const homeContainer = document.getElementById('home-container');

render(
  /** 
   * @component Provider
   * Hereda elementpos al componente hijo
  */
 <BrowserRouter>
    <Provider store={store}>
      <Fragment>
        <Home />
        <Header />
      </Fragment>
    </Provider>
  </BrowserRouter>, 
  homeContainer
);
