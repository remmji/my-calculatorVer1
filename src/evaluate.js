function evaluate({currentOperand,previousOperand,operation}){
    
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(curr)) return ''
   let computation = '';
   switch (operation){
    case '+':
      computation = prev + curr
      break
    case '-':
      computation = prev - curr
      break
    case '*':
      computation = prev * curr
      break
    case '/':
      computation = prev / curr
      break
   }
   return computation.toString()
}
export default evaluate;