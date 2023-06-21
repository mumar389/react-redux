// rootReducer.js
import { combineReducers } from 'redux';
import {tokenReducer,userReducer} from './setUser';
// import other reducers

const rootReducer = combineReducers({
  token: tokenReducer,
  user:userReducer
  // other reducers
});

export default rootReducer;
