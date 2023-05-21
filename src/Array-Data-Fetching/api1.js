import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';

function Api1() {
  const[data,setData]=useState([]);
  const [singledata,setSingledata]=useState({});
  const [pos,setPos]=useState(0);

 const getData=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(dataArray=>{
      setData(dataArray);           //02
      setSingledata(dataArray[parseInt(pos)])               //01
      console.log(dataArray[pos])               //01
    })
 }

 useEffect(()=>{
    getData()
 },[]);

 const next=()=>{
    setPos(parseInt(pos+1));
    setSingledata(data[parseInt(pos+1)])
    console.log(pos+1)
 }
//  useEffect(() => {
//   setPos(localStorage.getItem('pos'));
// }, []);

 useEffect(() => {
  localStorage.setItem('pos', pos);
}, [pos]);

  return (
    <div className="container">
        <div className="row mt-4">
          <div className="col-lg-12">
              <h3>User Data List</h3>
--------------------- 01-----------------------------------------------------
              <p>{singledata.name}</p>
              <p>Email : {singledata.email}</p>
              <p>Username : {singledata.username}</p>
             {singledata.address  ? <p>Address : {singledata.address.street}</p> :null } 
             {/* {singledata.address.street}  */}

             <button onClick={next}>Next</button><br /><br />
             
----------------------02---------------------------------------------------------------------------------------------
<br />
             {
              data.slice(0,4).map((info,index)=>{
                  return(
                    <div className='border' key={index}>
                        <p>Name :{info.name}</p>
                        <p>Email :{info.email}</p>
                        <p>Username :{info.username}</p>
                        <p>Address :{info.address.geo.lng}</p>
                    </div>
                  )
              })
             }
          </div>
        </div>
    </div>
  )
}

export default Api1