import React, { useState } from 'react'
import classes from "./todo.module.css"

function Form() {



  const [input,setInput]= useState()
  const [todos,setTodos] = useState([])
  console.log(todos)

  const handleChange=(e)=>{
      setInput(e.target.value)

  }

  const handleSubmit=(e)=>{
    e.prevenDefault()
    setTodos([...input, {title:input, completed:false}])
  }
  return (
        <form onSubmit={handleSubmit}>
            
                <input 
                type='text'
                 placeholder='Enter ato do...'
                  onChange={handleChange}
                   className={classes.todoInput}
                   value={input}
                   />
                <button type='submit' className={classes.todoButton}>Add</button>
            
        </form>
  ) 
} 

export default Form