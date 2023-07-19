import React, { useState } from "react";


function StateString(){

    const [name, setName] = useState("Swapnil")

    const handleClick= ()=>{
        setName("Akash")
        console.log(name);
    }
    console.log(name);
    return(
       <div>
            <h1>{name}</h1>
        <button onClick={handleClick}>Change name</button>
       </div>
    )
}

export default StateString;