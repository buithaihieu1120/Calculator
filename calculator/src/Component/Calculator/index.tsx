import React from 'react';
import Button  from '../Button'
import './Button.css'
type Props ={
    onClick:(value:string)=>void
    onClearClick:()=>void
    onResultClick:()=>void
    onCalClick:(value:string)=>void
    onOppositeClick:(value:string)=>void
}
const Calculator:React.FC<Props>=({onClick,onClearClick,onResultClick,onCalClick,onOppositeClick})=>{
    
    const handleClick=(value:string)=> {
        if(onClick){
            onClick(value)
        }
    }
    const handleClearClick=()=> {
        if(onClearClick){
            onClearClick()
        }
    }
    const handleResultClick=()=>{
        if(onResultClick){
            onResultClick()
        }
    }
    const handleCalClick=(value:string)=> {
        if(onCalClick){
            onCalClick(value)
        }
    }
    const handleOppositeClick=(value:string)=> {
        if(onOppositeClick){
            onOppositeClick(value)
        }
    }
    return (
        <div>
            <div className='table'>
            <Button content='Button-num' label="AC" onClick={()=>handleClearClick()}/>
            <Button content='Button-num' label="+/-" onClick={()=>handleOppositeClick("+/-")}/>
            <Button content='Button-num' label="%" onClick={()=>handleCalClick("%")}/>
            <Button content='Button-cal' label="/" onClick={()=>handleCalClick("/")}/>
            <Button content='Button-num' label="7" onClick={()=>handleClick("7")}/>
            <Button content='Button-num' label="8" onClick={()=>handleClick("8")}/>
            <Button content='Button-num' label="9" onClick={()=>handleClick("9")}/>
            <Button content='Button-cal' label="x" onClick={()=>handleCalClick("x")}/>
            <Button content='Button-num' label="4" onClick={()=>handleClick("4")}/>
            <Button content='Button-num' label="5" onClick={()=>handleClick("5")}/>
            <Button content='Button-num' label="6" onClick={()=>handleClick("6")}/>
            <Button content='Button-cal' label="-" onClick={()=>handleCalClick("-")}/>
            <Button content='Button-num' label="1" onClick={()=>handleClick("1")}/>
            <Button content='Button-num' label="2" onClick={()=>handleClick("2")}/>
            <Button content='Button-num' label="3" onClick={()=>handleClick("3")}/>
            <Button content='Button-cal' label="+" onClick={()=>handleCalClick("+")}/>
            <Button content='Button-0' label="0" onClick={()=>handleClick("0")}/>
            <Button content='Button-num' label="." onClick={()=>handleClick(".")}/>
            <Button content='Button-cal' label="=" onClick={handleResultClick}/>
            </div>
        </div>
    );
}

export default Calculator;