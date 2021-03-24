import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { endStroke } from '../sharedActions';

/* to take things a bit further, we will be using redux's built in createSlice function
   this function will create action creators based on the reducer handlers we provide
*/

export const historyIndex = createSlice({
  name: 'historyIndex',
  initialState: 0,
  reducers: {
    undo: (state, action: PayloadAction<number>) => {
      return Math.min(state + 1, action.payload);
    },
    redo: (state) => {
      return Math.max(state - 1, 0);
    },
  },
  /* sharedReducers are for reducers that react on shared actions */
  extraReducers: (builder) => {
    builder.addCase(endStroke, () => {
      return 0;
    });
  },
});

export default historyIndex.reducer;
export const { undo, redo } = historyIndex.actions;

/* 
the createSlice function accepts an object that must have the following fields
  *name* -- the name of the slice.  it will be used as a prefix for all the generated actions of the slice
  *initialState* -- the initialState state value

  *reducers* -- reducers that will be used to generate actions

  *extraReducers* -- reducers that need to react on shared actions
*/

/* 
this slice has the name historyIndex, and will also have two action handlers
-- undo & redo.  This means that it will generate two actions


! historyIndex/undo - this action will have a number payload.  We need it to limit the number of undos to the length of the strokes array.

! historyIndex/redo - this action won't have any payload.
  
*/
