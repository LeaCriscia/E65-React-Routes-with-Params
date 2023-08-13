import React from 'react'

const Eventhandlers = () => {
    //scripts
    const computeRate=(hours)=>{
        const salary = 250 * hours;
        console.log(salary);
    };
    const buttonE =(e)=>{
        console.log(e.clientX);
    };
  return (
    <div>
        <h1>Eventhandler Demo</h1>
        <button onClick={()=>computeRate(12)}>Compute Salary</button>
        <button onClick={(e)=>buttonE(e)}>Function e</button>        
    </div>
  )
}

export default Eventhandlers