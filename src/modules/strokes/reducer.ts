import { createReducer } from '@reduxjs/toolkit';
import { endStroke } from './actions';
import { RootState } from '../../types';

const initialState: RootState['strokes'] = [];

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(endStroke, (state, action) => {
    const { stroke, historyIndex } = action.payload;
    if (historyIndex === 0) {
      state.push(stroke);
    } else {
      state.splice(-historyIndex, historyIndex, stroke);
    }
  });
});
export default reducer;
