import { Point } from './types';

export const BEGIN_STROKE = 'BEGIN_STROKE'; // when the user presses the mouse button
export const SET_STROKE_COLOR = 'SET_STROKE_COLOR';
export const UPDATE_STROKE = 'UPDATE_STROKE'; // when the user moves the pressed mouse

export const END_STROKE = 'END_STROKE'; // when the user releases the mouse

export type Action =
  | { type: typeof BEGIN_STROKE; payload: Point }
  | { type: typeof UPDATE_STROKE; payload: Point }
  | { type: typeof END_STROKE }
  | { type: typeof SET_STROKE_COLOR; payload: string };

/* 
  Action creators
  */

export function beginStroke(x: number, y: number) {
  return { type: BEGIN_STROKE, payload: { x, y } };
}

export function updateStroke(x: number, y: number) {
  return { type: UPDATE_STROKE, payload: { x, y } };
}

export function endStroke() {
  return { type: END_STROKE };
}

export function setStrokeColor(color: string) {
  return { type: SET_STROKE_COLOR, payload: color };
}
