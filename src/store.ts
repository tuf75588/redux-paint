import { composeWithDevTools } from 'redux-devtools-extension';
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import strokesReducer from './modules/strokes/reducer';
import currentStrokeReducer from './modules/currentStroke/reducer';
import historyReducer from './modules/historyIndex/reducer';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: combineReducers({
    strokesReducer,
    currentStrokeReducer,
    historyReducer,
  }),
  middleware,
});
