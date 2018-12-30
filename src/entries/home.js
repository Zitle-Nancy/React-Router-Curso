import React from 'react';
import { render } from 'react-dom'; //Una forma de hacerlo
import Home from  '../pages/containers/home';
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
  <Provider store={store}>
    <Home />
  </Provider>, 
  homeContainer
);


