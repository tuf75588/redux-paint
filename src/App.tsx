import React, { useRef } from 'react';

function App() {
  /* the value in the the angle brackets is a "type variable" in typescript */
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const startDrawing = () => {};
  const endDrawing = () => {};
  const draw = () => {};
  return (
    <div className="App">
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
