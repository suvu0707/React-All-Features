import React from 'react'
import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'

function Book() {

    const dispatch=useDispatch();
    const allbook=useSelector(state=>state.Booklist)
    const[bname,pickName]=useState("");
    // const save=()=>{
    //     var info={type:'add',bookinfo:bname}
    //     console.log(info)
    //     return info
    // }

    const deleteBook=(index)=>{
        var info={type:'delete',bookindex:index}

        return info
    }

  return (
    <div className="container">
        <div className="row mt-4">
            <div className="col-lg-12 text-center">
                <h3 className="text-primary text-center mb-4">Book Management</h3>
                <input type="text" placeholder='Book Name' value={bname}  onChange={obj=>pickName(obj.target.value)}/>
                <button onClick={()=>(dispatch({type:'add',bookinfo:bname}))}>Save</button>
                <table className="table table-bordered mt-4">
                    <thead>
                        <tr>
                            <th>Book Index</th>
                            <th>Book Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allbook.map((info,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{info}</td>
                                        <td><button onClick={()=>(dispatch(deleteBook(index)))}>Delete</button></td>
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

export default Book