import React from 'react'
import { useSelector } from 'react-redux';

function All() {
    
    const allbook = useSelector(state => state.Booklist);
    const alluser = useSelector(state => state.Userlist);
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-lg-12">
                    <h3 className='text-center text-primary'>All Books</h3>
                    <table className="table table-bordered mt-4">
                        <thead>
                            <tr>
                                <th>Book Index</th>
                                <th>Book Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allbook.map((bname, index1) => {
                                    return (
                                        <tr key={index1}>
                                            <td>{index1}</td>
                                            <td>{bname}</td>
                                        </tr>
                                    )
                                })

                            }
                        </tbody>
                    </table> <br /><br />

                    <h3 className='text-center text-primary'>All Users</h3>
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

export default All