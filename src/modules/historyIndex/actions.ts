import { Stroke } from '../../types';

export const REDO = 'REDO';
export const UNDO = 'UNDO';
export const END_STROKE = 'END_STROKE';

export type HistoryActionIndex =
  | { type: typeof UNDO; payload: number }
  | { type: typeof REDO }
  | {
      type: typeof END_STROKE;
      payload: { stroke: Stroke; historyLimit: number };
    };

export function undo(undoLimit: number) {
  return { type: UNDO, payload: undoLimit };
}

export function redo() {
  return { type: REDO };
}
