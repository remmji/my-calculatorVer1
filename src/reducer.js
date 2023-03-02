import { ACTIONS } from "./App";
import evaluate from "./evaluate";

function reducer(state,{type, payload}){
  const { currentOperand, previousOperand, operation } = state;

  switch(type){
    
    case ACTIONS.ADD_DIGIT:
      if(payload.digit==='0' && state.currentOperand==='0'){
        return state
      }
      if(payload.digit==='.' && state.currentOperand.includes('.')){
        return state
      }
      return {
        ...state,
        currentOperand:`${currentOperand || ''}${payload.digit}`,
      }


    case ACTIONS.CLEAR:
      return {}


    case ACTIONS.CHOOSE_OPERATION:
      if(state.currentOperand == null && state.previousOperand== null){
      return state
      }
      if(state.previousOperand==null){
        return{
        ...state,
        operation: payload.operation,
        previousOperand: state.currentOperand,
        currentOperand: null,
        }
    }
    return {
      ...state,
      previousOperand: evaluate(state),
      operation: payload.operation,
      currentOperand:null
    }


    case ACTIONS.EVA:
      if(state.operation == null || 
        state.currentOperand==null ||
        state.previousOperand==null){
          return state
        }
        return {
          ...state,
          previousOperand:null,
          operation:null,
          currentOperand: evaluate(state),
        }
  }
}
export default reducer;