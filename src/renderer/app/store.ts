import { configureStore } from '@reduxjs/toolkit';
import togglerReducer from '../features/counter/counter-slice';

export const store = configureStore({
  reducer: {
    toggler: togglerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
