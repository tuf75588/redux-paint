/* 
selectors are simply functions that accept a state argument and return a specific value
from it 
*/

import { RootState } from './types';

export function currentStrokeSelector(state: RootState) {
  return state.currentStroke;
}


