import React, { useState } from 'react'
import './App.css'
function App() {
  const [inputValue,setValue]=useState('')


  function inputs(e){
    setValue(inputValue+e.target.value)
  }

  function total(){


   let number=Number(inputValue)
try{

  setValue(eval(inputValue).toString())
}
catch(error)
{
  alert("you entered wrong expression!")
  setValue('');
}
  }
  function clear(){
    setValue("");
  }
  return (
<>
<p>YOUR VERY OWN CALCULATOR</p>
    <div className='baksa'>
      
      <input className="display" placeholder=
{inputValue}

/>
        

<div className="numbers">
  <button onClick={inputs} value={1}>1</button>
  <button onClick={inputs} value={2}>2</button>
  <button onClick={inputs} value={3}>3</button>
  <button onClick={inputs} value={4}>4</button>
  <button onClick={inputs} value={5}>5</button>
  <button onClick={inputs} value={6}>6</button>
  <button onClick={inputs} value={7}>7</button>
  <button onClick={inputs} value={8}>8</button>
  <button onClick={inputs} value={9}>9</button>
  <button onClick={inputs} value={0}>0</button>
  <button onClick={inputs} value={'-'}> - </button>
  <button onClick={inputs} value={'*'}>*</button>

  <button onClick={inputs} value={'+'}>+</button>
  <button onClick={total} value={'='}>=</button>
  <button onClick={clear} >C</button>

</div>


    </div>
</>
  )
}

export default App


