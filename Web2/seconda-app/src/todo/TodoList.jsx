import React from 'react'
import Todoitem from './Todoitem'

const TodoList = (props) => {
    
  return (
    <div>
        {
            props.tasks.map((task)=>{
                return( <Todoitem></Todoitem>)
            })
        }
       
    </div>
  )
}

export default TodoList