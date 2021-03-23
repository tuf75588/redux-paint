import { createReducer } from '@reduxjs/toolkit';
import { endStroke, undo, redo } from './actions';
import { RootState } from '../../types';

const initialState: RootState['historyIndex'] = 0;

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(endStroke, (state, action) => {
    return 0;
  });
  builder.addCase(undo, (state, action) => {
    return Math.min(state + 1, action.payload);
  });
  builder.addCase(redo, (state, action) => {
    return Math.max(state - 1, 0);
  });
});
export default reducer;