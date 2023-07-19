import React, { useState } from 'react'

function StateBoolean() {
    const[data,setData]=useState(true)

    const [abc,setAbc]=useState(true)

    const handleClick=()=>{
        setData(!data)
        setAbc(!abc)
        console.log("checking")
    }
  return (
    <div>
        <button onClick={handleClick}>click me</button>
        {/* { data ?<div style={{width:"100px", height="100px",backgroundColor:"red"}}>true</div>:<div style={{width:"100px", height="100px",backgroundColor:"green"> false</div>} */}
       {/* {data && <div style={{width:"100px",height:"100px", backgroundColor:"red"}}>True</div> }{abc && "ok"} */}
    </div>
  )
}       

export default StateBoolean