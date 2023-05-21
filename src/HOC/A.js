


import React from 'react'
import Counter from './hoc'
// function A({count,increment}) {
function A(props) {
    const { count, increment,name,color } = props

    // const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(count + 1)
    // }
    return (
        <div align="center">
            <button style={{color:color}} onClick={increment}><h1>{name}: {count}</h1></button>
        </div>
    )
}

export default Counter(A,4,"red");