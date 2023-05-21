import React, { useState } from "react";
import { useEffect } from "react";

const Hoc = (WrappedComponenet, entity,sss) => {
    const Abc = () => {
        const [data, setData] = useState([]);
        const [term, setTerm] = useState("")

        useEffect(() => {
            const fetchData = async () => {
                // const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
                const res = await fetch('https://jsonplaceholder.typicode.com/'+entity);
                const json = await res.json();
                setData(json);
            };
            fetchData();
        }, [1])
        var info=sss;
        let filteredData = data.slice(0, 10).filter(() => {
            if (entity === "users") {
                // const { name } = d;
                return info.indexOf(term) >= 0;
            }
            if (entity === "todos") {
                // const { title } = d;
                return info.indexOf(term) >= 0;
            }
        });
        return (
            <div>
              <h3>Higher Order Component</h3><br /><br />

                <h2>{entity}</h2>
                <input
                    type="text"
                    value={term}
                    onChange={(e) =>
                        setTerm(e.target.value)
                    }
                />
                <WrappedComponenet  data={filteredData}></WrappedComponenet>
            </div>
        );
    }
    return Abc
};



export default Hoc;