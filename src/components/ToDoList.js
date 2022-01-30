import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalProvider'
import ToDoItem from './ToDoItem'
import AddToDoForm from './AddToDoForm'

const ToDoList = () => {
  const { todos } = useContext(GlobalContext)
  return (
    <div className='row align-items-center py-2 px-md-5'>
      <div className='col px-md-5 mx-md-5'>
        <AddToDoForm />
        {todos.map(todo => (
          <ToDoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default ToDoList
