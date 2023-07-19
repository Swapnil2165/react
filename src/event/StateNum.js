import React, { useState } from 'react'

function StateNum() {
    const [data,setData]=useState(0)

      const increFunc =()=>{
            return setData(data +1)
      }

       
  return (
    <div>
        <button onClick={increFunc}>+</button>
        <h2>{data}</h2>
        <button onClick={ ()=>{return data > 0 ? setData(data-1): data}}>-</button>

    </div>
  )
}

export default StateNum