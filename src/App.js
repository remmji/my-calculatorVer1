import React from "react";
import { useState } from "react";

function App() {
  const [display,setDisplay] = useState('');
  

  const handleClick = (input) =>{
    
    setDisplay(display+input);
  }
  const handleClear =()=>{
    setDisplay('')
  }
  const handleEv = (display) => {
    setDisplay(eval(display).toString());
    console.log(display);
  }


  return (
    <>
     <section className="wraper">
        <div className="container">
            <input type="text" value={display} className="input" disabled/>
        </div>
        <div className="container">
            <div className="box clear"><button className="btn clear" onClick={handleClear}>C</button></div>
            <div className="box"><button className="btn fun" onClick={(()=>handleClick('%'))}>%</button></div>
            <div className="box"><button className="btn fun" onClick={()=>handleClick("/")}>/</button></div>
        </div>
    <div className="container">
        <div className="box"><button className="btn" onClick={()=>handleClick('7')}>7</button></div>
        <div className="box"><button className="btn" onClick={()=>handleClick('8')}>8</button></div>
        <div className="box"><button className="btn" onClick={()=>handleClick('9')}>9</button></div>
        <div className="box"><button className="btn fun" onClick={()=>handleClick('*')}>*</button></div>
    </div>
    
    <div className="container">
        <div className="box"><button className="btn" onClick={()=>handleClick('4')}>4</button></div>
        <div className="box"><button className="btn" onClick={()=>handleClick('5')}>5</button></div>
        <div className="box"><button className="btn" onClick={()=>handleClick('6')}>6</button></div>
        <div className="box"><button className="btn fun" onClick={()=>handleClick('-')}>-</button></div>
    </div>
    <div className="container">
        <div className="box"><button className="btn" onClick={()=>handleClick('1')}>1</button></div>
        <div className="box"><button className="btn" onClick={()=>handleClick('2')}>2</button></div>
        <div className="box"><button className="btn" onClick={()=>handleClick('3')}>3</button></div>
        <div className="box"><button className="btn fun"onClick={()=>handleClick('+')} >+</button></div>
    </div>
    <div className="container">
        <div className="box zero"><button className="btn zero" onClick={()=>handleClick('0')}>0</button></div>
        <div className="box"><button className="btn" onClick={()=>handleClick('.')}>.</button></div>
        <div className="box"><button className="btn equal"onClick={()=>handleEv(display)} >=</button></div>
    </div>
    </section>
    </>
  );
}

export default App;
