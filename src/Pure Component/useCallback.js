import React, { useMemo, useState } from 'react'
import { useCallback } from 'react';
import UseCallbackChild from './useCallbackChild';

function UseCallback() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState([]);

    const add = () => {
        setCounter1(counter1 + 1);
    };

    const one=useCallback(()=>{
        console.log("Hello")
    },counter2)

    return (
        <div align="middle">
            <UseCallbackChild counter2={counter2} func ={one}/>
            <button onClick={add}>Counter : {counter1}</button>
        </div>
    );
}

export default UseCallback