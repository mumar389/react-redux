// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';
// Import other reducers if necessary

// Create the Redux store
const store = configureStore({
  reducer: {
    token: rootReducer,
    // Add other reducers here
  },
});

export default store;
