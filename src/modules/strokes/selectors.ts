import { RootState } from '../../types';

export function strokesLengthSelector(state: RootState) {
  return state.strokes.length;
}

export function strokesSelector(state: RootState) {
  return state.strokes;
}
