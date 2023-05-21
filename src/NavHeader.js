import React from 'react';


import {Link,useLocation} from 'react-router-dom'


function NavHeader(){
    const location=useLocation()
    return(
        <>
            <nav className='navbar navbar-expand-lg bg-primary'>
                <div className='container-fluid'>
                    <ul className='navbar-nav'>
                        {/* <li className='nav-item pe-4'><Link to="/examp3" className={location.pathname=="/" ? "nav-link active" : "nav-link text-white"}>Example3</Link></li>
                        <li className='nav-item pe-4'><Link to="/examp6" className={location.pathname=="/" ? "nav-link active" : "nav-link text-white"}>Register</Link></li> */}
                        <li className='nav-item pe-4'><Link to="/" className={location.pathname=="/" ? "nav-link active" : "nav-link text-white"}>P-Drill</Link></li>
                        <li className='nav-item pe-4'><Link to="/api/:iid"  className= "nav-link text-white">API</Link></li>
                        <li className='nav-item pe-4 '><Link to="/com1" className={location.pathname=="/com1" ? "nav-link active" : "nav-link text-white"}>P-Valid</Link></li>
                        {/* <li className='nav-item pe-4'><Link to="/comp1" className={location.pathname=="/comp1" ? "nav-link active" : "nav-link text-white"}>Composition</Link></li> */}
                        <li className='nav-item pe-4'><Link to="/usememo" className={location.pathname=="/usememo" ? "nav-link active" : "nav-link text-white"}>UMemo</Link></li>
                        <li className='nav-item pe-4'><Link to="/usecallback" className={location.pathname=="/usecallback" ? "nav-link active" : "nav-link text-white"}>UCallback</Link></li>
                        <li className='nav-item pe-4'><Link to="/a" className={location.pathname=="/a" ? "nav-link active" : "nav-link text-white"}>Hoc1</Link></li>
                        <li className='nav-item pe-4'><Link to="/b" className={location.pathname=="/b" ? "nav-link active" : "nav-link text-white"}>Hoc2</Link></li>
                        <li className='nav-item pe-4'><Link to="/useref" className={location.pathname=="/useref" ? "nav-link active" : "nav-link text-white"}>URef</Link></li>
                        <li className='nav-item pe-4'><Link to="/usereducer" className={location.pathname=="/usereducer" ? "nav-link active" : "nav-link text-white"}>UReducer</Link></li>
                        {/* <li className='nav-item pe-4'><Link to="/userlist" className={location.pathname=="/userlist" ? "nav-link active" : "nav-link text-white"}>Userlist</Link></li> */}
                        {/* <li className='nav-item pe-4'><Link to="/userlist" className={location.pathname=="/userlist" ? "nav-link active" : "nav-link text-white"}>Userlist</Link></li> */}
                        <li className='nav-item pe-4'><Link to="/user" className={location.pathname=="/user" ? "nav-link active" : "nav-link text-white"}>User</Link></li>
                        <li className='nav-item pe-4'><Link to="/book" className={location.pathname=="/book" ? "nav-link active" : "nav-link text-white"}>Book</Link></li>
                        <li className='nav-item pe-4'><Link to="/all" className={location.pathname=="/all" ? "nav-link active" : "nav-link text-white"}>All</Link></li>
                        <li className='nav-item pe-4'><Link to="/lifecycle" className={location.pathname=="/lifecycle" ? "nav-link active" : "nav-link text-white"}>LifeCycle</Link></li>
                        <li className='nav-item pe-4'><Link to="/useparams" className={location.pathname=="/useparams" ? "nav-link active" : "nav-link text-white"}>UParams</Link></li>
                        <li className='nav-item pe-4'><Link to="/cleanup" className={location.pathname=="/cleanup" ? "nav-link active" : "nav-link text-white"}>CleanUp</Link></li>
                    </ul>
                </div>
            </nav>
           
        </>
    )
}

export default NavHeader;