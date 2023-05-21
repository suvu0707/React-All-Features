import React from 'react'
import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'

function User() {
    const dispatch=useDispatch();
    const alluser=useSelector(state=>state.Userlist)
   const[name,pickName]=useState("");
   const[age,pickAge]=useState("");
   const[edu,pickEdu]=useState("");

   const save=()=>{
    var info={type:"uadd",userinfo:{name:name,age:age,edu:edu}}

    return info;
   }

   const deleteUser=(index)=>{
    var info={type:"udelete",userindex:index}

    return info;
   }
  return (
    <div className="container">
        <div className="row mt-4">
            <div className="col-lg-12 text-center">
                <h3 className="text-primary text-center mb-4">User Management</h3>
                <input type="text" onChange={obj=>pickName(obj.target.value)} value={name} placeholder='Full Name'/>
                <input type="text" onChange={obj=>pickAge(obj.target.value)} value={age} placeholder='Age'/>
                <input type="text" onChange={obj=>pickEdu(obj.target.value)} value={edu} placeholder='Education'/>
                <button onClick={()=>(dispatch(save()))} >Save</button>
                <table className="table table-bordered mt-4">
                    <thead>
                        <tr>
                            <th>User Index</th>
                            <th>User Name</th>
                            <th>User Age</th>
                            <th>User Education</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alluser.map((info,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{info.name}</td>
                                        <td>{info.age}</td>
                                        <td>{info.edu}</td>
                                        <td><button onClick={()=>(dispatch(deleteUser(index)))}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default User