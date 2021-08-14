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
         <div className="">
         
          
         <div class="d-flex flex-row">
  <div class="p-2"><button className="btn btn-success tn-lg" onClick={handleClick}>
    <img src="https://icons-for-free.com/iconfiles/png/512/save+icon-1320167995084087448.png"/>Save Drawing</button></div>
  <div class="p-2"><button className="btn btn-danger btn-lg" onClick={clear}><img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/delete-1432400-1211078.png"/>Clear</button></div>
  <div class="p-2"><button className="btn btn-warning btn-lg" onClick={undo}><img src="https://pics.freeicons.io/uploads/icons/png/9739889771543238875-512.png"/>undo</button></div>
</div>
         </div>
        </div>
      </div>
      <div className="row justify-content ">
     <div className="col">
     <CanvasDraw
        brushRadius={1}
        brushColor='#130f40'
        catenaryColor='red'
        hideGrid={true}
        style={{ border: '1px solid #000' }}
        ref={firstCanvas}
        canvasHeight={440}
        canvasWidth={460}
      />
     </div>
      
      <div  className="col"> 
      <CanvasDraw ref={secondCanvas} canvasHeight={440}
        canvasWidth={460}  style={{ border: '1px solid #000' }} hideGrid={true} disabled={true} />
      </div>
      </div>
      

    </div>
  );
}

export default App;
