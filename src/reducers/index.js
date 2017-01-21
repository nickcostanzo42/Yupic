import { combineReducers } from 'redux';
import AuthReducer from './AuthReducers';
import SignupReducer from './SignupReducers'

export default combineReducers ({
  auth: AuthReducer,
  signup: SignupReducer
})
