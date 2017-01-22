import { combineReducers } from 'redux';
import AuthReducer from './AuthReducers';
import SignupReducer from './SignupReducers';
import UserReducer from './UserReducers';
import SearchReducer from './SearchReducer';
import FollowingReducer from './FollowingReducer';
import RenderFollowingReducer from './RenderFollowingReducer';

export default combineReducers ({
  auth: AuthReducer,
  signup: SignupReducer,
  userinfo: UserReducer,
  search: SearchReducer,
  following: FollowingReducer,
  followingUserInfo: RenderFollowingReducer
})
