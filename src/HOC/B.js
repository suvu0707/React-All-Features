import React from 'react'
import { useState } from 'react'
import Counter from './hoc'
// function B({count,increment}) {
function B(props) {
    const {count,increment,name,color}=props 

    // const [count, setCount] = useState(0);
    // const increment = () => {
    //     setCount(count + 1)
    // }


  return (
    <div align="center">
        <button style={{color:color}} onMouseOver={increment}><h1>{name} : {count}</h1></button>
    </div>
  )
}

export default Counter(B,3,"blue")