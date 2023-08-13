//import the css file
import './Section1.css';

//nested jsx
const Section1 = () => {
  return (
    <div style={{backgroundColor: "coral", color: "green"}}>
        <h1 style={{fontSize: 40}}>Section 1: HTML</h1>
        <p className='title'>This is html description</p>
    </div>
  );
}

export default Section1;
//expression and statement
let age = 40;
let sum = 20+20;

if (sum ===age){
    console.log("it's a coincidence!");
}