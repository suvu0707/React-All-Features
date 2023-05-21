
// ----------------------------------------Without UseReducer-----------------------------------------------
// import React from 'react'
// import { useState } from 'react'

// function UseReducer() {
//    const[counter,setCounter]=useState(1)

//    const add=()=>{
//         setCounter(counter+1)
//     }
//     const substract=()=>{
//         setCounter(counter-1)
//     }
//   return (
//     <div align="center">
//         <h1>{counter}</h1>
//         <button onClick={add}>Add +1</button>
//         <button onClick={substract}>Add -1</button>
//     </div>
//   )
// }

// export default UseReducer

// ------------------------------With UseReducer------Simple Example---------------------------------------

// import React from 'react'
// import { useReducer } from 'react';

// const initialState = 0;
// function reducer(state, action) {
//     // switch(action.type){
//     //     case "add":
//     //     return state+1;
//     //     case "substract":
//     //     return state-1;
//     //     default:
//     //     throw new Error();
//     // }

//     if (action.type == "add") {
//         return state + 1;
//     } else {

//         return state - 1
//     }
// }
// function UseReducer() {
//     const [state, dispatch] = useReducer(reducer, initialState)

//     return (
//         <div align="center">
//             <h1>{state}</h1>
//             <button onClick={() => dispatch({ type: "add" })}>Add +1</button>
//             <button onClick={() => dispatch({ type: "substract" })}>Add -1</button>
//         </div>
//     )
// }

// export default UseReducer

// ------------With UseReducer------Complex Example------------------------------

import React from 'react'
import { useState } from 'react';
import { useReducer } from 'react';

const initialState = [{id:Date.now(),name:"Suvendu",email:"sksahoo@gmail.com"}];
function reducer(state, action) {
    switch(action.type){
        case "add":
        return [...state,action.payload];
        case "delete":
        return state.filter(contact=>{
            return contact.id !==action.payload.id
        })
        
        default:
        throw new Error();
    }
//     var oldnewdata=Object.assign([],state);
//     if (action.type == "add") {
//          oldnewdata.push(action.payload);
//     } 
//     if (action.type == "delete") {
//         oldnewdata.splice(action.payload,1);
//    } 
//     return oldnewdata
}
function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");

    const addContact=(e)=>{
        e.preventDefault();
        setName("")
        setEmail("");
        dispatch({type:"add",payload:{id:Date.now(),name:name,email:email}})
        // dispatch({type:"add",payload:{id:Date.now(),name,email}})
        console.log(40)
    }
    // throw new Error("Error")
    return (
        <div align="center">
            <h1>UseReducer Hooks</h1>

            <form onSubmit={addContact}>
                <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <button >Add Contact</button> <br />
            </form> <br />
            

            <div>
                
                    {
                        state.map((contact,index)=>{
                            return(
                              <div key={index}>
                                 <h2 >{contact.name}</h2>
                                 <p >{contact.email}</p>
                                 <button onClick={()=>(dispatch({type:"delete",payload:{id:contact.id}}))}>Delete</button>
                                 </div>
                            )
                        })
                    }
             
            </div>
        </div>
    )
}

export default UseReducer

