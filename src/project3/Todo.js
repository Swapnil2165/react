import React from 'react'
import classes from "./todo.module.css"
import Header from './Header'
import Form from './Form'
import TodoList from './TodoList'
function Todo() {
  return (
   
   <div className={classes.todoContainer}>
        <div className={classes.todoWrapper}>
            <Header/>
            <Form/>
            <TodoList/>
        </div>

   </div>

  )
}

export default Todo