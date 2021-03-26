import { RootState } from '../../types';

export function strokesLengthSelector(state: RootState) {
  return state.strokes.length;
}

export default function strokesSelector(state: RootState) {
  return state.strokes;
}
