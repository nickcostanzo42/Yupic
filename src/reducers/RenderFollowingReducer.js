import firebase from 'firebase';

import {
  FIND_FOLLOWING_USERNAME,
  FIND_FOLLOWING_PIC
} from '../actions/types';

INITIAL_STATE = {
  username: '',
  userpic: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIND_FOLLOWING_PIC:
      return { ...state, userpic: action.payload }
    case FIND_FOLLOWING_USERNAME:
      return { ...state, username: action.payload }
    default:
      return state
  }
}
