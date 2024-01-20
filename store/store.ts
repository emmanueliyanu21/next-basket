// redux/store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/slice/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add other slices as needed
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
