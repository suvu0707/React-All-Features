import React from 'react';
import { useContext } from 'react';
// import {Biodata} from "./compA"

// function ComC() {
//     const context=useContext(Biodata)  // useContext is a substitute for Consumer  that consumes and uses the state.
//   return (
//     <div>Hello Suvendu  {context.name} 
      // {context.array} </div>
//   )
// }

// export default ComC



// ------------------------Without contextApi--------------------------------------------
function ComC({name,children}) {
    return (
      <div>Hello Suvendu {name} {children}</div>
    )
  }
  
  export default ComC

