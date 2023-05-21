import React, { useState } from 'react'
import NavHeader from './NavHeader'

function Example3() {
    const [person, setPerson] = useState({
        name: "peter",
        age: 24,
        message: "Hii How Are You",
    })

    const change = () => {
        setPerson(
            { ...person, message: "I am OKK" }
        )
    }
    return (
        <>
           
            <div align="center">
                <h2>{person.name}</h2>
                <p>{person.age}</p>
                <p>{person.message}</p>
                <button onClick={change}>Change Message</button>
            </div>
        </>
    )
}

export default Example3