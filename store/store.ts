import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/slice/counterSlice';
import productReducer from '../redux/slice/productSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  product: productReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
