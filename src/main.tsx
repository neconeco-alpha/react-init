import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux'
import { thunk } from 'redux-thunk'
// import {SubComponent} from './sub-component';
// import configureStore from './store';
// const configureStore = require('./store/')

// const stores = configureStore();
// import {Counter} from './app'
import Data from './data'
// import reducers from './modules'
import {store} from './store'

// const composeEnhancers =
//   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

// const App = () => <div>
//   <h1>Hello React!</h1>
//   {/* <SubComponent name="My Counter for TypeScript"/> */}
// </div>

ReactDOM.render(
  <Provider store={store}>
    <div>
      <p>test</p>
      <Data />
    </div>
  </Provider>
  , document.querySelector('#app')
);
