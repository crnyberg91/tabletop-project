import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import { reducer } from '../rootSlice';

export const store = configureStore({
  // reducer: {
  //   counter: counterReducer,
  // },
  reducer
});
