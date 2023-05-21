import React,{useState} from 'react'
const Counter = (WrappedComponent,num,color) => {
    function Hoc(props) {
        const [count, setCount] = useState(0);

        const increment = () => {
            setCount(count + num)
        }
        var btnColor=color
        return (
            <div>
                <WrappedComponent color={btnColor} count={count} increment={increment} {...props}/>
            </div>
        )
    }
    return Hoc;
}

export default Counter