import {useState} from 'react';

const Reacthooks = () => {
    //scripts
    const [counter, setCounter] = useState(0);
    //event handler
    const countUp=()=>{
        setCounter((initVal)=>initVal+1);
    };
  return (
    <div>
        <h1>Reacthooks count value: {counter} </h1>
        <button onClick={countUp}>CountUp</button>
        <button onClick={()=>{setCounter((initVal)=>initVal-1)}}>CountDown</button>
        <button onClick={()=>{setCounter(0)}}>Reset Counter</button>
    </div>
  )
}

export default Reacthooks