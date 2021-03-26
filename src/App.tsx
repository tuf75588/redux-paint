import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { beginStroke, endStroke, updateStroke } from './actions';
import currentStrokeSelector from './modules/currentStroke/selectors';
import strokesSelector from './modules/strokes/selectors';
import historyIndexSelector from './modules/historyIndex/selectors'
import drawStroke from './lib/canvasUtils';
import ColorPanel from './components/ColorPanel';
import EditPanel from './components/EditPanel';
import { useCanvas } from './CanvasContext';
import { RootState } from './types';
function App() {
  /* the value in the the angle brackets is a "type variable" in typescript */
  const canvasRef = useCanvas();
  const currentStroke = useSelector<RootState, RootState['currentStroke']>(currentStrokeSelector);
  const strokes = useSelector<RootState,RootState['strokes']>(strokesSelector);
  const historyIndex = useSelector<RootState, RootState['historyIndex']>(historyIndexSelector)
  const dispatch = useDispatch();
  // type cast to boolean to check if we are drawing or not
  const isDrawing = !!currentStroke.points.length;
  
  const getCanvasWithContext = (canvas = canvasRef.current) => {
    return { canvas, context: canvas?.getContext('2d') };
  };

  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const {
      nativeEvent: { offsetX, offsetY },
    } = event;
    dispatch(beginStroke(offsetX, offsetY));
  };
  const endDrawing = () => {
    // if point coordinates exist
    /* 
    the endDrawing event handler will also trigger when the mouse leaves the canvas area.
    This is why we check the isDrawing flag to dispatch the endStroke action only if we are
    drawing a stroke
    */
    if (isDrawing) {
      dispatch(endStroke());
    }
  };
  const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const {
      nativeEvent: { offsetX, offsetY },
    } = event;
    if (!isDrawing) return;
    dispatch(updateStroke(offsetX, offsetY));
  };

  useEffect(() => {
    const { context } = getCanvasWithContext();
    if (!context) {
      return;
    }
    requestAnimationFrame(() => {
      drawStroke(context, currentStroke.points, currentStroke.color);
    });
  }, [currentStroke]);

  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Redux Paint</div>
        <div className="title-bar-controls">
          <button aria-label="Close" />
        </div>
      </div>
      <EditPanel />
      <ColorPanel />
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        onMouseMove={draw}
      />
    </div>
  );
}

export default App;
