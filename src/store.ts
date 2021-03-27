import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import strokes from './modules/strokes/slice';
import { currentStroke } from './modules/currentStroke/slice';
import historyReducer from './modules/historyIndex/slice';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    historyReducer,
    strokes,
    currentStroke,
  },
  middleware,
});
