import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER_SUCCESS
 } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
  dispatch({ type: LOGIN_USER });
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => loginUserFail(dispatch))
  }
}

export const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL })
}

export const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.userPage();
}

export const logoutUser = (dispatch) => {
  return (dispatch) => {
    firebase.auth().signOut().then(function() {
      dispatch({ type: LOGOUT_USER_SUCCESS })
      Actions.auth();
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }
}
