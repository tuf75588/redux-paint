import { Reducer } from 'react';
import { RootState } from '../../types';
import { HistoryActionIndex, UNDO, REDO, END_STROKE } from './actions';

function reducer(
  state: RootState['historyIndex'],
  action: HistoryActionIndex
): RootState['historyIndex'] {
  switch (action.type) {
    case END_STROKE: {
      return 0;
    }
    case UNDO: {
      return Math.min(state + 1, action.payload);
    }
    case REDO: {
      return Math.max(state - 1, 0);
    }
    default:
      return state;
  }
}
export default reducer;