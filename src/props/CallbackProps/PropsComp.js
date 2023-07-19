import React, { useState } from 'react'
import PropsSibling1 from './PropsSibling1'
import PropsSibling2 from './PropsSibling2'

function PropsComp() {

    const  [data, setData] = useState("")
    // console.log(data);
    // console.log(setData)
    // console.log(useState());

    const parentStore =(d) =>{
        console.log("parent",d);
    }

  return (
    <div>
        <h1>PropsComp </h1>
        <PropsSibling1/>
        <PropsSibling2/>
    </div>
  )
}

export default PropsComp