import { Point } from '../types';

function drawStroke(
  context: CanvasRenderingContext2D,
  points: Point[],
  color: string
) {
  if (!points.length) return;
  const { x, y } = points[0];
  context.strokeStyle = color;
  context.beginPath();
  context.moveTo(x, y);
  points.forEach(({ x, y }) => {
    context.lineTo(x, y);
    context.stroke();
  });
  context.closePath();
}

export default drawStroke;
