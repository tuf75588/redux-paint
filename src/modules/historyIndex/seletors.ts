import { RootState } from '../../types';

function historyIndexSelector(state: RootState) {
  return state.historyIndex;
}

export default historyIndexSelector;
