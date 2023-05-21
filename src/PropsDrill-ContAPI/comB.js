import React from 'react'
import ComC from './comC'


// function ComB() {
//     return (
//       <div>
//           <ComC />
//       </div>
//     )
//   }
  
//   export default ComB


// ---------------------------------Without contextApi--------------------------------------------------
function ComB({name,children}) {
    return (
      <div>
          <ComC name={name}>{children}</ComC>
      </div>
    )
  }
  
  export default ComB


// import React from "react";
// import ComC from "./comC";

// export default function ComB() {
//   return (
//     <div>
//       <ComC />
//     </div>
//   );
// }