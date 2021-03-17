import { Point, Stroke } from '../../types';

export const BEGIN_STROKE = 'BEGIN_STROKE';
export const UPDATE_STROKE = 'UPDATE_STROKE';
export const SET_STROKE_COLOR = 'SET_STROKE_COLOR';
export const END_STROKE = 'END_STROKE';

export type currentStrokeAction =
  | { type: typeof BEGIN_STROKE; payload: Point }
  | { type: typeof UPDATE_STROKE; payload: Point }
  | {
      type: typeof SET_STROKE_COLOR;
      payload: string;
    }
  | {
      type: typeof END_STROKE;
      payload: { stroke: Stroke; historyLimit: number };
    };

export function beginStroke(x: number, y: number) {
  return { type: BEGIN_STROKE, payload: { x, y } };
}

export function updateStroke(x: number, y: number) {
  return { type: UPDATE_STROKE, payload: { x, y } };
}

export function endStroke(historyLimit: number, stroke: Stroke) {
  return { type: END_STROKE, payload: { historyLimit, stroke } };
}

export function setStrokeColor(color: string) {
  return { type: SET_STROKE_COLOR, payload: color };
}
