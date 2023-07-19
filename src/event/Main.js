import React, { useState } from 'react'

function Main() {

//     2
// function handleClick(){
//         console.log("button clicked");
//         alert("button clicked");

// }
    // 3

    // function handleClick(e){
    //             console.log(e);
    //             alert("button clicked");
        
    //     }
        // 4
        // function handleClick(){
        //         console.log("button clicked");
        //         alert("button clicked")
        // }
    // 5
    const [str,setstr] = useState("")

    const handleChange =(e) => {
        console.log(e.target.value);
        setstr(e.target.value)
    }

    const handleSubmit=(e) => {
        e.preventDefault()
        console.log("submitted succesfully");

    }

  return (
    <div>

        {/* 1 */}
        {/* <button onClick={()=>console.log("button clicked")}>Click</button> */}

        {/* 2 */}
        {/* <button onClick={()=> handleClick()}>Click</button> */}

        {/* 3 */}
        {/* <button onClick={(event)=>handleClick(event)}> Click</button> */}

        {/* 4 */}
        {/* <button onClick={handleClick}>Click</button> */}

        {/* 5 */}
        <form onSubmit={handleSubmit}>
            <input placeholder='Enter Name' onChange={handleChange}/>
            <button type='Submit'>Submit</button>
        </form>
        <div>
            <h1>{str}</h1>
        </div>
    </div>
  )
}

export default Main