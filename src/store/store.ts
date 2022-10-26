import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import selectAddresReducer from './addressInfo/slice'

export const store = configureStore({
  reducer: {
    fetchAddress:selectAddresReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;


