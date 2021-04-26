//import logo from './logo.svg';
//import './App.css';
import React, {useRef} from 'react'
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
    <div>
      <button onClick={handleClick}>Save Drawing</button> 
      <button onClick={clear}>Clear</button>
      <button onClick={undo}>undo</button>
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

      <CanvasDraw ref={secondCanvas} hideGrid={true} disabled={true} />
    </div>
  );
}

export default App;
