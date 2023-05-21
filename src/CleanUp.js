import React, { useState } from 'react'
import { useEffect } from 'react';

function CleanUp() {
    const[width,setWidth]=useState(window.screen.width);

    const actualWidth=()=>{
        setWidth(window.innerWidth);
        console.log(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize",actualWidth);
        return()=>{                                                //componentWillUnmount
            window.removeEventListener("resize",actualWidth);
        }
    })
  return (
    <div align="center">The actual size of screen : {width}</div>
  )
}

export default CleanUp