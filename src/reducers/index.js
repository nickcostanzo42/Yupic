import { combineReducers } from 'redux';
import AuthReducer from './AuthReducers';
import SignupReducer from './SignupReducers';
import UserReducer from './UserReducers';

export default combineReducers ({
  auth: AuthReducer,
  signup: SignupReducer,
  userinfo: UserReducer
})
