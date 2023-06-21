// tokenReducer.js
import { SET_TOKEN,SET_USER } from '../actions/index';
const initialState = null; // or set an initial value for the token state

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload;
    default:
      return state;
  }
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export  {tokenReducer,userReducer};
