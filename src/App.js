import React, { Component } from 'react';
import logo from './logo.svg';

//Import the modified App.css
import './App.css';

// Import the Routes component, which contains our Route setup

import { Routes } from './Routes'


// Provider component is a react-redux component for setting up the Redux Store

import { Provider } from 'react-redux'

// Import the ConfigureStore that holds the initial Configuration

import { configureStore } from './store/configureStore'

import * as TodoActions from './todos/actions/todoActions'

import AppBar from 'material-ui/AppBar';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';


// Create a Store from the Configuration, we can pass a Initial State here

// const store = configureStore()

// // At first dispatch a Get Todos Actions, So we'll recieve the Todos 
// // fetched from the server at the start of the app

// store.dispatch(TodoActions.GetTodos())

const middlewere = [thunk];
const store = createStore(rootReducer, compose(
  applyMiddleware(...middlewere, promise(), createLogger()),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const App = (props) => {
  return (
    
    //Provider needs to contain all the Containers/Components it will give access to the Store

      <Provider store={store} >
        <Routes />
      </Provider>
  )
}

export default App;
