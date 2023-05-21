import React, { useState } from "react";
import { useEffect } from "react";

const Hoc = (WrappedComponenet, entity) => {
    const Abc = () => {
        const [data, setData] = useState([]);
        const [term, setTerm] = useState("")

        useEffect(() => {
            const fetchData = async () => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
                const json = await res.json();
                setData(json);
            };
            fetchData();
        }, [1])

        let filteredData = data.slice(0, 10).filter((d) => {
            if (entity === "users") {
                const { name } = d;
                return name.indexOf(term) >= 0;
            }
            if (entity === "todos") {
                const { title } = d;
                return title.indexOf(term) >= 0;
            }
        });
        return (
            <div>
                <h2>{entity}</h2>
                <input
                    type="text"
                    value={term}
                    onChange={(e) =>
                        setTerm(e.target.value)
                    }
                />
                <WrappedComponenet data={filteredData}></WrappedComponenet>
            </div>
        );
    }
    return Abc
};



export default Hoc;