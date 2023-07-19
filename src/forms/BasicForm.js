import React, { useState } from 'react';
import "./BasicForm.css"



function Main() {

  const [data, setData] = useState("")

  const handleChange=(e)=>{

    setData(e.target.value)
    console.log(e.target.value);

  }

  return (

    <>
     
        <form className='formContainer'>

          <div className='inputDiv'>

            <label>First Name</label>
            <input name='First Name' type='text'></input>

          </div>
          <div className='inputDiv'>

          <label>First Name</label>
            <input name='First Name' type='text'></input>

          </div>
          <div className='inputDiv'>

            <label>Last Name</label>
            <input name='Last Name' type='text' ></input>

          </div>
          <div className='inputDiv'>

            <label>How should we contact you?</label>
            <select onChange={handleChange}>
              <option value='phone' >Phone</option>
              <option value='email' >Email</option>
            </select>

          </div>

          <div className='inputDiv' style={{display:data? "" : "none"}}>

            <label>{data==="phone" ? "Phone Number" : "Email Adress"}</label>
            <input name='phone' type='text'></input>

          </div>

        </form>

        </>
  )
}

export default Main
