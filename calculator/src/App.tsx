import React, { useState, } from 'react';
import './App.css';
import Calculator from './Component/Calculator';

function App() {
  const [value, setValue] = useState<string>("0")
  const [opera, setOpera] = useState<string>("")
  const [result, setResult] = useState<string>("")

  const [flag, setFlag] = useState<boolean>(true)
  const handleClick = (newValue: string) => {
    if (newValue !== "." && value === "0") {
      setValue(newValue.toString().slice(0,12))
    }
    else {
      setValue((value + newValue.toString()).slice(0,12))
    }
  }
  const handleClearClick = (() => setValue("0"))
  const handleCalClick = ((opera: string) => {
    if (opera !== '' && !flag) {
      setOpera(opera)
    }
    else {
      setOpera(opera)
      setResult(value)
      
    }
    setFlag(false)
    setValue("0")
  })
  const caculate = ((opera: string, currentNum: string) => {
    let newResult = result
    switch (opera) {
      case '+':
        newResult = String(parseFloat(result) + parseFloat(currentNum))
        break;
      case '-':
        newResult = String(parseFloat(result) - parseFloat(currentNum))
        break;
      case 'x':
        newResult = String(parseFloat(result) * parseFloat(currentNum))
        break;
      case '/':
        newResult = String(parseFloat(result) / parseFloat(currentNum))
        break;
      case '%':
        newResult = String(parseFloat(result) % parseFloat(currentNum))
        break;
    }
    setResult(newResult)
    setValue(newResult.slice(0, 12))
    
    return true
  })
  const handleResultClick = (() => {
    const operand = value
    if (flag) {
      if(operand.length)
      setValue(operand)
    }
    else {
      caculate(opera,operand)
    }
    setFlag(true)
  })
  const handleOppositeClick = (() => {
    setValue((-parseFloat(value)).toString())
  })
  return (
    <div className="App">
      <div className='App-header' >
        <p className='App-text'>Calculator</p>
      </div>
      <div className='App-body'>
        <input className="Input" value={value} />
        <Calculator
          onClick={handleClick}
          onClearClick={handleClearClick}
          onResultClick={handleResultClick}
          onCalClick={handleCalClick}
          onOppositeClick={handleOppositeClick}
        />
      </div>
    </div>
  );
}

export default App;
