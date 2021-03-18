import { RootState } from '../../types';

function currentStrokeSelector(state: RootState) {
  return state.currentStroke;
}
export default currentStrokeSelector;
