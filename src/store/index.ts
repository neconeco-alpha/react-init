import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import dataReducer from './data/dataSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;