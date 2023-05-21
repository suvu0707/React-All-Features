import React,{useRef} from 'react'
import { useState } from 'react';

function UseRef() {
    const[show,setShow]=useState("")
    //1st we have to create a refference to access the input value
    // const ref=useRef(initialvalue);
    const luckyName=useRef(null);

    const submitForm=(e)=>{
        e.preventDefault();    //we have to pass a event object so we can stop the bydefault form submit
        // console.log(luckyName.current)
        setShow(luckyName.current.value);
        luckyName.current.focus()
        
    }

  return (
    <div>
        <br /><br />
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="luckyName">Enter Your Lucky Name</label>
                <input type="text" id='luckyName' ref={luckyName} />  
                {/* //whenever value user write here we will get here */}
                <button>Submit</button>
            </div>
        </form>

        <h1>{show}</h1>
    </div>
  )
}

export default UseRef