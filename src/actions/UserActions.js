import firebase from 'firebase';

import {
  USER_INFO_FETCH,
  USER_PIC_FETCH,
  UPDATE_PIC_URL,
  UPDATE_USERNAME,
  UPDATE_INFO,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
  IS_FOLLOWING,
  IS_NOT_FOLLOWING,
  FETCH_FOLLOWING_SUCCESS,
  FIND_FOLLOWING_USERNAME,
  FIND_FOLLOWING_PIC
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

export const followUser = (userId, email) => {
  const { currentUser } = firebase.auth();
  const factoredEmail = email.replace(/\./g, ',')
  return(dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/following/${factoredEmail}`)
      .set({ uid: userId })
  }
}

export const unfollowUser = (email) => {
  const { currentUser } = firebase.auth();
  const factoredEmail = email.replace(/\./g, ',')
    return(dispatch) => {
      console.log('action called')
      firebase.database().ref(`/users/${currentUser.uid}/following/${factoredEmail}`)
        .remove()

    }
}

export const checkFollowing = (email) => {
  const { currentUser } = firebase.auth()
  const factoredEmail = email.replace(/\./g, ',')

  return(dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/following/${factoredEmail}/`)
      .on('value', snapshot => {
        if(snapshot.child('uid').val() !== null) {
          dispatch({ type: IS_FOLLOWING})
        } else {
          dispatch({ type: IS_NOT_FOLLOWING})
        }
    })
  }
}

export const fetchFollowing = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/following`)
      .on('value', snapshot => {
        console.log(snapshot.val())
        dispatch({ type: FETCH_FOLLOWING_SUCCESS, payload: snapshot.val() })
      })
  }
}

export const findFollowingInfo = (followUid) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${followUid}/`)
    .on('value', snapshot => {
      dispatch({ type: FIND_FOLLOWING_USERNAME, payload: snapshot.child('username').val() })
      dispatch({ type: FIND_FOLLOWING_PIC, payload: snapshot.child('userpic').val() })
    })
  }
}


export const updateFail = (dispatch) => {
  dispatch({ type: UPDATE_FAIL })
}
