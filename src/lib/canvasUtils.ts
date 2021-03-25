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

export const getCanvasImage = (
  canvas: HTMLCanvasElement | null
): Promise<null | Blob> => {
  return new Promise((resolve, reject) => {
    if (!canvas) {
      return reject(null);
    }
    canvas.toBlob(resolve);
  });
};

export const clearCanvas = (canvas: HTMLCanvasElement) => {
  const context = canvas.getContext('2d');
  if (!context) {
    return;
  }
  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);
};
