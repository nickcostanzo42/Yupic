import {
  FETCH_FOLLOWING_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case FETCH_FOLLOWING_SUCCESS:
      return action.payload
    default:
      return state
  }
}
