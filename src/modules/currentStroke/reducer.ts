import {
  CurrentStrokeAction,
  END_STROKE,
  UPDATE_STROKE,
  BEGIN_STROKE,
  SET_STROKE_COLOR,
} from './actions';
import { RootState } from '../../types';

const initialState: RootState['currentStroke'] = {
  points: [],
  color: '#000',
};

function reducer(
  state: RootState['currentStroke'] = initialState,
  action: CurrentStrokeAction
): RootState['currentStroke'] {
  switch (action.type) {
    case BEGIN_STROKE: {
      return {
        ...state,
        points: [action.payload],
      };
    }
    case UPDATE_STROKE: {
      return {
        ...state,
        points: [...state.points, action.payload],
      };
    }
    case SET_STROKE_COLOR: {
      return {
        ...state,
        color: action.payload,
      };
    }
    case END_STROKE: {
      return {
        ...state,
        points: [],
      };
    }
    default: {
      return state;
    }
  }
}
export default reducer;
