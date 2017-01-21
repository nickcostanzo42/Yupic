import {
  USER_INFO_FETCH
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  // console.log(action)

  switch (action.type) {
    case USER_INFO_FETCH:
      return { ...state, username: action.payload}
    default:
      return state
  }
}
