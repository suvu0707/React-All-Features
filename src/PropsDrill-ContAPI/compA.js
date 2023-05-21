import React from 'react'
// import { createContext } from 'react'
import ComB from './comB'


// const Biodata = createContext(); //createContext() is all you need. It returns a consumer and a provider.

// function CompA() {
  // var arr = [1, 3, 4];
//     return (
//         <div>
//             <Biodata.Provider value={{ name: "Suvendu", array: arr }}>  
//             {/* Use a Provider to pass the current data to the tree below. Provider is a component that as it's names suggests provides the state to its children. */}
//                 <ComB/>
//             </Biodata.Provider>
//         </div>
//     )
// }

// export default CompA;

// export {Biodata};




// -------------------------------Without contextApi-----------------------------------------------
function CompA() {
  return (
    <div>
        <ComB name={"Sahoo "}>, How are u</ComB>
    </div>
  )
}

export default CompA


