import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged,
  loginUserFail, loginUserSuccess, loginUser } from './AuthActions'

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USERNAME_CHANGED,
  SIGNUP_USER,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_USER
 } from './types';


export const usernameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  }
}

export const signupUser = ({ email, password, username }) => {
  return (dispatch) => {
  dispatch({ type: SIGNUP_USER });
  firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {

          dispatch({
            type: LOGIN_USER,
            payload: user
          });
        const formatEmail = email.replace(/\./g, ',')
        const currentuser = firebase.auth().currentUser;
        if(currentuser){
        firebase.database().ref(`/users/${currentuser.uid}`)
        .set({username: username, userpic: 'https://facebook.github.io/react/img/logo_og.png',
              email: email})
        .then(() => {
          firebase.database().ref(`/email/${formatEmail}`)
          .set({uid: currentuser.uid })
          Actions.userPage();
        })
        .catch(() => signupUserFail(dispatch))
        }
      }
    )
      .catch(() => signupUserFail(dispatch))
  }
}

const signupUserFail = (dispatch) => {
  dispatch({ type: SIGNUP_FAIL })
}





