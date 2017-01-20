import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import reducers from './reducers'

class App extends Component {
  componentWillMount () {

    var config = {
    apiKey: "AIzaSyBWS7i-SJ_k-D0tCwlD6so_zkazNOoEDpo",
    authDomain: "yupic-9dd45.firebaseapp.com",
    databaseURL: "https://yupic-9dd45.firebaseio.com",
    storageBucket: "yupic-9dd45.appspot.com",
    messagingSenderId: "505499302521"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider store={store}>
        <Router />
      </Provider>
    )

  }
}

export default App;
