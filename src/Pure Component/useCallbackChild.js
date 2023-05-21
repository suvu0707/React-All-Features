import React, { memo } from 'react'

function UseCallbackChild({counter2,func}) {
    console.log("Child Render")
  return (
    <div>UseCallbackChild</div>
  )
}

export default memo(UseCallbackChild)   //memo used to stop the rerendoring. It memorizes the component