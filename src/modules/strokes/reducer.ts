import { RootState } from '../../types';
import { END_STROKE, StrokesAction } from './actions';

function reducer(
  state: RootState['strokes'] = [],
  action: StrokesAction
) {
  switch (action.type) {
    case END_STROKE: {
      if (!action.payload.stroke.points.length) return state;
      return [
        ...state.slice(0, state.length - action.payload.historyLimit),
        action.payload.stroke,
      ];
    }
    default: {
      return state;
    }
  }
}
export default reducer;