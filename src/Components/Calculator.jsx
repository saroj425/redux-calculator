import React, { useState } from 'react'
import './calculator.css'
import { useDispatch,useSelector } from 'react-redux';
import {add,subtract,multiply,divide,clear} from '../Redux/Action'

const Calculator = () => {
    const dispatch = useDispatch();
    const result = useSelector((state)=>state.calculator.result)
    const [value1,setNumber1] = useState("");
    const [value2,setNumber2] = useState("");

    const handleAdd = ()=>{
        dispatch(add(Number(value1),Number(value2)));
        setNumber1("");
        setNumber2("");
    }
    const handleSubtract = ()=>{
        dispatch(subtract(Number(value1),Number(value2)));
        setNumber1("");
        setNumber2("");
    }
    const handleMultiply = ()=>{
        dispatch(multiply(Number(value1),Number(value2)));
        setNumber1("");
        setNumber2("");
    }
    const handleDivide = ()=>{
        dispatch(divide(Number(value1),Number(value2)));
        setNumber1("");
        setNumber2("");
    }
    const handleClear = ()=>{
        dispatch(clear());
        setNumber1("");
        setNumber2("");
    }

  return (
    <div className='container-fluid p-3'>
        <div class="calculator-main">
            <h3>Redux Calculator</h3>
            <div class="calculator">
                <input type="number" name="" placeholder="Enter number1" value={value1} onChange={(e)=>setNumber1(e.target.value)}/>
                <input type="number" name="" placeholder="Enter number2" value={value2} onChange={(e)=>setNumber2(e.target.value)}/>
            </div>
            <div class="buttons">
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleSubtract}>Substract</button>
                <button onClick={handleMultiply}>Multiply</button>
                <button onClick={handleDivide}>Divide</button>
                <button onClick={handleClear}>Clear</button>
            </div>
            <hr/>
            <h2>Result : {result}</h2>
        </div>
    </div>
  )
}

export default Calculator