import React,{useState,useRef} from 'react'

function UseRef2() {
    const[num,setNum]=useState(0);
    const inputone=useRef();
    const inputtwo=useRef();

    const getNumBox=()=>{
        console.log("Hello");
        console.log(inputone.current);
        inputone.current.style.width="400px";
        inputone.current.focus();
        setNum(inputone.current.value)
    }
    const getTextBox=()=>{
        console.log("Hello")
        console.log(inputone.current);
    }
    const ChangeColor=()=>{
        inputone.current.style.color="yellow"
    }
  return (
    <div>
        <h2>Suvendu <span> Hii</span></h2>
        <input type="number" style={{width:"100px"}} ref={inputone}  />
        <input type="number" ref={inputtwo}  />
        <h3>Value is :{num}</h3>

        <button onClick={getNumBox}>Rupees</button>
        <button onClick={getTextBox}>Dollars</button>
        <button onClick={ChangeColor}>Change Text Color</button>
    </div>
  )
}

export default UseRef2