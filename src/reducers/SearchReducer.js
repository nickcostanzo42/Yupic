import {
  SEARCH_CHANGED,
  DO_SEARCH,
  SEARCH_FAIL,
  USER_SEARCH_USERNAME,
  USER_SEARCH_PIC,
  USER_SEARCH_UID
} from '../actions/types';

const INITIAL_STATE = {
  searchVal: '',
  searchPic: '',
  searchUid: '',
  searchUsername: ''
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case DO_SEARCH:
      return { ...state }
    case SEARCH_CHANGED:
      return { ...state, searchVal: action.payload }
    case USER_SEARCH_PIC:
      return { ...state, searchPic: action.payload }
    case USER_SEARCH_USERNAME:
      return { ...state, searchUsername: action.payload }
    case USER_SEARCH_UID:
      return { ...state, searchUid: action.payload }
    default:
      return state
  }

}
