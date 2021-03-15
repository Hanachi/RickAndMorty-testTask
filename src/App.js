import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './store/reducers';
import TabsContainer from './containers/TabsContainer';

import './App.css';

const App = () => {
  const store = createStore(rootReducer, applyMiddleware(logger, thunk));

  return (
    <Provider store={store}>
      <div className="wrapper">
        <h1>Rick&Morty</h1>
        <div className="forms">
          <TabsContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
