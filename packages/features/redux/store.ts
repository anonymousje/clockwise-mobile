import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { useSession } from './reducers/auth';
import { themeReducer } from './reducers/theme';
const rootReducer = combineReducers({
  user: useSession,
  theme: themeReducer,
});
const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export default store;
