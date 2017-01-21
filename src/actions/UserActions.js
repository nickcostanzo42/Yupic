import firebase from 'firebase';

import {
  USER_INFO_FETCH,
  USER_PIC_FETCH
} from './types'

export const userInfoFetch = () => {
  const { currentUser } = firebase.auth();
    return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/`)
      .on('value', snapshot => {
        dispatch({ type: USER_INFO_FETCH, payload: snapshot.child('username').val() })
        dispatch({ type: USER_PIC_FETCH, payload: snapshot.child('userpic').val() })
      });
  };
}

export const userPicFech = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
  firebase.databse().ref(`/users/${currentUser.uid}/`)
    .once('value', snapshot => {
      dispatch({ type: USER_PIC_FETCH, payload: snapshot.child('userpic').val() })
    })
  }
}
