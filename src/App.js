//import logo from './logo.svg';
//import './App.css';
import React, { useRef } from 'react'
import CanvasDraw from 'react-canvas-draw'

function App() {

  const firstCanvas = useRef(null);
  const secondCanvas = useRef(null);

  const handleClick = () => {
    //console.log('click');
    const data = firstCanvas.current.getSaveData();
    console.log(data);
    secondCanvas.current.loadSaveData(data);
  }


  const clear = () => {
    firstCanvas.current.clear();
  }


  const undo = () => {
    firstCanvas.current.undo();
  }



  return (
    <div className="container mt-3">
      <div className="mx-auto">
        <h2>Drawing App</h2>
        <div className="text-center">
         <div className="d-grid gap-2 col-6 mx-auto mb-4">
         <button className="btn btn-success" onClick={handleClick}>Save Drawing</button>
          <button className="btn btn-danger" onClick={clear}>Clear</button>
          <button className="btn btn-warning" onClick={undo}>undo</button>
         </div>
        </div>
      </div>
      <div className="row justify-content-evenly">
      <CanvasDraw
        brushRadius={1}
        brushColor='#130f40'
        catenaryColor='red'
        hideGrid={true}
        style={{ border: '1px solid #000' }}
        ref={firstCanvas}
        canvasHeight={1000}
        canvasWidth={1000}
      />
      <br />
      <CanvasDraw ref={secondCanvas} hideGrid={true} disabled={true} />
      </div>
    </div>
  );
}

export default App;
