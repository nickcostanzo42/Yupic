import firebase from 'firebase';

import {
  USER_INFO_FETCH
} from './types'

export const userInfoFetch = () => {
  const { currentUser } = firebase.auth();
    return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/`)
      .once('value', snapshot => {
        dispatch({ type: USER_INFO_FETCH, payload: snapshot.child('username').val() })
      });
  };
}
