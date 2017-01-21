import firebase from 'firebase';

import {
  USER_INFO_FETCH,
  USER_PIC_FETCH,
  UPDATE_PIC_URL,
  UPDATE_USERNAME,
  UPDATE_INFO,
  UPDATE_SUCCESS,
  UPDATE_FAIL
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

export const updateUsername = (text) => {
  return {
    type: UPDATE_USERNAME,
    payload: text
  }
}

export const updatePicUrl = (text) => {
  return {
    type: UPDATE_PIC_URL,
    payload: text
  }
}

export const updateInfo = (updateUsername, updatePicUrl) => {
  const { currentUser } = firebase.auth()
  return(dispatch) => {

      dispatch({ type: UPDATE_INFO })
      firebase.database().ref(`/users/${currentUser.uid}/`)
        .update({username: updateUsername, userpic: updatePicUrl })
          .then(() => {
            dispatch({ type: UPDATE_SUCCESS })
          })
          .catch(() => {
            dispatch({ type: UPDATE_FAIL })
          })

  }
}


// export const updateSuccess = (dispatch) => {
//   dispatch({ type: UPDATE_SUCCESS })
// }

export const updateFail = (dispatch) => {
  dispatch({ type: UPDATE_FAIL })
}
