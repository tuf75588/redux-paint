/* 

our state will look like:
currentStroke: Stroke;
strokes: Stroke[];
historyIndex: number;
*/

export type RootState = {
  currentStroke: Stroke;
  strokes: Stroke[];
};

/* 
each color has a color represented as a hex string and a list of points
each point is an object that holds x and y coordinates
*/
export type Stroke = {
  color: string;
  points: Point[];
};

export type Point = {
  x: number;
  y: number;
};
