import React, { useMemo } from 'react'
import { useState } from 'react'

function Usememo() {
    const[count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(10);
    
 
    // const count1memo=useMemo(
    //     function mymemo(){
    //         console.log("Hiii")
    //         return count1
    //     },[count1]
    // )
    // const count2memo=useMemo(
    //     function mymemo(){
    //         console.log("Helooo")
    //         return count2
    //     },[count2]
    // )
  return (
    <div>
        <h3>{count1}</h3>
        <h3>{count2}</h3>
        <button onClick={()=>{setCount1(count1+1)}}>Count+1</button>
        <button onClick={()=>{setCount2(count2*10)}}>Count*10</button>

    </div>
  )
// const [count, setData] = useState(1)
// const [item, setItem] = useState(20)

// const newApple=useMemo(
//   function appleTime() {
//     console.warn("Hello")
//     return 100 * count;
//   }
// ,[item])
// return (
//   <div className="App">
//     <h1>Hooks in React {count}</h1>
//     {newApple}
//     <button onClick={() => setData(count + 1)}>Update State</button>
//     <button onClick={() => setItem(item * 10)}>Update State</button>

//   </div>
// );

}

export default Usememo


// import React, { useMemo, useState } from "react";

// export default function One() {
//   const [counter1, setCounter1] = useState(0);
//   const [counter2, setCounter2] = useState(10);

//   const add = () => {
//     setCounter1(counter1 + 1);
    
//   };

//   const substract = () => {
//     setCounter2(counter2 - 1);
   
//   };
//   const countMemo=useMemo(
//    function() {
//       console.log("HOOOO");
//       return counter1 + 5;
//     },[counter1]
//   )


// //   function multiCount() {
// //      console.log("HOOOO");
// //     return counter1 + 5;
// //    }

  
//   return (
//     <div>
//       <h1>{counter1}</h1>
//       <h1>{counter2}</h1>
//       <h1>{countMemo}</h1>
//   //    <h1>{multiCount()}</h1>
//       <button onClick={add}>Add</button>
//       <button onClick={substract}>Substract</button>
//     </div>
//   );
// }
