import {
  USER_INFO_FETCH,
  USER_PIC_FETCH,
  UPDATE_PIC_URL,
  UPDATE_USERNAME,
  UPDATE_INFO,
  UPDATE_SUCCESS,
  UPDATE_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  loading: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action)

  switch (action.type) {
    case USER_INFO_FETCH:
      return { ...state, username: action.payload}
    case USER_PIC_FETCH:
      return { ...state, userpic: action.payload}
    case UPDATE_PIC_URL:
      return { ...state, updatePic: action.payload}
    case UPDATE_USERNAME:
      return { ...state, updateUsername: action.payload}
    case UPDATE_INFO:
      return { ...state, loading: true}
    case UPDATE_SUCCESS:
      return { ...state, loading: false, error: "You've succesfully updated your profile!",
      updatePic: '', updateUsername: ''}
    case UPDATE_FAIL:
      return { ...state, loading: false, error: "Something went wrong.."}
    default:
      return state
  }
}
