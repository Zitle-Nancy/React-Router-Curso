import React,{ Fragment } from 'react';
import { render } from 'react-dom'; //Una forma de hacerlo
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Home from '../pages/components/home';
import Contacto from '../pages/components/contacto';
import Videos from  '../pages/containers/videos';
import Header from '../pages/components/header';
import NotFound from '../error/components/regular-error';
import data from '../api.json';

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
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          {/** como seria usando la propiedad children 
          <Route exact path='/videos'> <h1>Videos :)</h1></Route>
          */}
          {/* usando render
            <Route exact path='/videos' render={(props)=>(<h1>Videos :)</h1>)}/>
          */}
          <Route exact path='/videos' component={Videos}/>
          <Route exact path='/contacto' component={Contacto}/>
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </Provider>
  </BrowserRouter>, 
  homeContainer
);
