import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Hoc from './hoc';

function Todolist({data}) {
   
    let renderUsers = data.map((todo, index) => {
        return (
            <div key={index}>
                <p>
                    <strong>{todo.title}</strong>
                </p>
            </div>
        )
    });

    
    return (
        <div>
            <div>
                {renderUsers}
            </div>

        </div>
    )
}



export default Hoc(Todolist,"todos","title");


// There is a lot of logic in both the components are same here. So we dont need to write the same logic again
// and again for component. So this is where we use  a react pattern Higher Order component.We are going to create 
// a higher order componentwhich is going to accept a component and going to return a new component like we take the
// common logics from both the component and put it in the HOC.