import { configureStore } from '@reduxjs/toolkit';
import passwordReducer from '../slices/passwordSlice';

export const store = configureStore({
  reducer: {
    password: passwordReducer,
  },
});
