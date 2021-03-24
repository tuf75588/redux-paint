
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import strokesReducer from './modules/strokes/slice';
import { currentStroke } from './modules/currentStroke/slice';
import historyReducer from './modules/historyIndex/slice';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: combineReducers({
    strokesReducer,
    currentStroke,
    historyReducer,
  }),
  middleware,
});
