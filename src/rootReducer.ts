import { RootState } from './types';
import {
  Action,
  BEGIN_STROKE,
  END_STROKE,
  SET_STROKE_COLOR,
  UPDATE_STROKE,
} from './actions';

const initialState: RootState = {
  currentStroke: { color: '#000', points: [] },
  strokes: [],
  historyIndex: 0,
};
/* 
A reducer simply returns some new state based on some sort of action
*/
export function rootReducer(state: RootState = initialState, action: Action) {
  switch (action.type) {
    case BEGIN_STROKE: {
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          /* on every begin_stroke action, we set the points to be a new array with the point from action.payload */
          points: [action.payload],
        },
      };
    }
    case UPDATE_STROKE: {
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          points: [...state.currentStroke.points, action.payload],
        },
      };
    }
    case END_STROKE: {
      const { points } = state.currentStroke;
      /* 
      the end_stroke action can be dispatched when the mouse leaves the canvas
      it may result in calling the end_stroke part of the reducer to trigger before the currentStroke has any points.
      to prevent unnecessary calculations we return the unchanged state if the currentStroke.points array is empty.

      if there are any points, we append the current stroke to the list of strokes and reset the currentPoint.strokes
      to the empty array.
      */
      if (!points.length) return state;
      return {
        ...state,
        currentStroke: { ...state.currentStroke, points: [] },
        strokes: [...state.strokes, state.currentStroke],
      };
    }
    case SET_STROKE_COLOR: {
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          ...{ color: action.payload },
        },
      };
    }
    default:
      return state;
  }
}
