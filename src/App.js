import React, { useReducer } from "react";
import Digits from "./Digits";
import Operation from "./Operation";
import reducer from "./reducer";

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR : 'clear',
  EVA: 'eva'
}

function App() {
  const [{currentOperand,previousOperand,operation},dispatch] = useReducer(reducer,{})
  
  return (
    <>
    <section className="wraper">
    <div className="container">
        <div className="prev">{previousOperand} {operation}</div>
    </div>
    <div className="container">
        <div className="current">{currentOperand}</div>
    </div>
    <div className="container">
        <div className="box clear"><button className="btn clear" 
        onClick={()=>dispatch({type: ACTIONS.CLEAR})}>C</button></div>
        <div className="box"><Operation operation="/" dispatch={dispatch}/></div>
    </div>
    <div className="container">
        <div className="box"><Digits digit="7" dispatch={dispatch}/></div>
        <div className="box"><Digits digit="8" dispatch={dispatch}/></div>
        <div className="box"><Digits digit="9" dispatch={dispatch}/></div>
        <div className="box"><Operation operation="*" dispatch={dispatch}/></div>
    </div>
    <div className="container">
        <div className="box"><Digits digit="4" dispatch={dispatch}/></div>
        <div className="box"><Digits digit="5" dispatch={dispatch}/></div>
        <div className="box"><Digits digit="6" dispatch={dispatch}/></div>
        <div className="box"><Operation operation="-" dispatch={dispatch}/></div>
    </div>
    <div className="container">
        <div className="box"><Digits digit="1" dispatch={dispatch}/></div>
        <div className="box"><Digits digit="2" dispatch={dispatch}/></div>
        <div className="box"><Digits digit="3" dispatch={dispatch}/></div>
        <div className="box"><Operation operation="+" dispatch={dispatch}/></div>
    </div>
    <div className="container">
        <div className="box zero"><Digits digit="0" dispatch={dispatch}/></div>
        <div className="box"><Digits digit="." dispatch={dispatch}/></div>
        <div className="box"><button className="btn equal" 
        onClick={()=>dispatch({type: ACTIONS.EVA})}>=</button></div>
    </div>
    </section>
    </>
  );
}

export default App;
