import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { useSession } from './reducers/auth';
import { useFetch } from './reducers/flags';

const rootReducer = combineReducers({
  user: useSession,
  updated: useFetch,
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export default store;
