import React from 'react';
import {useParams} from 'react-router-dom'

function Useparams() {
    const{username}=useParams();
    
  return (
    <div>{username}</div>
  )
}

export default Useparams