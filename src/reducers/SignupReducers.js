import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USERNAME_CHANGED,
  SIGNUP_USER,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  email: '' ,
  password: '',
  loading: null,
  error: '',
  username: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    case USERNAME_CHANGED:
      return { ...state, username: action.payload }
    case SIGNUP_USER:
      return { ...state, error: '', loading: true }
    case SIGNUP_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload}
    case SIGNUP_FAIL:
      return { ...state, error: 'Email already taken, or password is insecure',
      password: '', email: '', loading: false }
    default:
      return state
  }
}
