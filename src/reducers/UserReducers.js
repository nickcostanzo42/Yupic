import {
  USER_INFO_FETCH,
  USER_PIC_FETCH
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  console.log(action)

  switch (action.type) {
    case USER_INFO_FETCH:
      return { ...state, username: action.payload}
    case USER_PIC_FETCH:
      return { ...state, userpic: action.payload}
    default:
      return state
  }
}
