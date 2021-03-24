import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, Point } from '../../types';
import { endStroke } from '../sharedActions';
const initialState: RootState['currentStroke'] = {
  points: [],
  color: '#000',
};

const slice = createSlice({
  name: 'currentStroke',
  initialState,
  reducers: {
    beginStroke: (state, action: PayloadAction<Point>) => {
      // reducer logic goes here
      state.points = [action.payload];
    },
    updateStroke: (state, action: PayloadAction<Point>) => {
      // reducer logic goes here
      state.points.push(action.payload);
    },
    setStrokeColor: (state, action: PayloadAction<string>) => {
      // reducer logic goes here
      state.color = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, (state) => {
      state.points = [];
    });
  },
});
export const currentStroke = slice.reducer;
export const {beginStroke, setStrokeColor, updateStroke } = slice.actions;
