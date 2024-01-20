// store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/slice/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other slices here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
