import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  SEARCH_CHANGED,
  DO_SEARCH,
  SEARCH_FAIL,
  USER_SEARCH_USERNAME,
  USER_SEARCH_PIC,
  USER_SEARCH_UID,
} from './types'

export const searchChange = (text) => {
  return {
    type: SEARCH_CHANGED,
    payload: text
  }
}

export const searchForEmail = ( email ) => {
 return(dispatch) => {
  firebase.database().ref(`/email/${email}`).on('value', snapshot => {
      const searchUid = snapshot.child('uid').val()
      dispatch({ type: USER_SEARCH_UID, payload: searchUid })
      firebase.database().ref(`/users/${searchUid}`).on('value', snapshot => {
          dispatch({ type: USER_SEARCH_USERNAME, payload: snapshot.child('username').val() })
          dispatch({ type: USER_SEARCH_PIC, payload: snapshot.child('userpic').val() })
      })
    })
  }
}


