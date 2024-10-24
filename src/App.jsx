import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react';

function App() {
  const [time, setTime] = useState(0);
  
  let timerRef=useRef(null);

  function startTimer(){
    timerRef.current=setInterval(()=>{
      setTime(time=> time+1)},1000);
  }
  
  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current=null;

  }

  function resetTimer(){
    stopTimer();
    setTime(0);
  }

  return (
      <div>
          <h1>StopWatch :{time} seconds</h1>
          <button onClick={startTimer}>Start</button>
          <br/> <br/>
          <button onClick={stopTimer}>Stop</button>
          <br/><br/>
          <button onClick={resetTimer}>Reset</button>
          <br/><br/>
      </div>
  )
}

export default App
