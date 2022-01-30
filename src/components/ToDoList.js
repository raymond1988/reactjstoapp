import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalProvider'
import ToDoItem from './ToDoItem'
import AddToDoForm from './AddToDoForm'

const ToDoList = () => {
  const { todos } = useContext(GlobalContext)
  return (
    <>
      <div className='col'>
        <AddToDoForm />
      </div>
      <div className='col-sm-12 col-md-7 col-lg-6 order-md-last'>
        {todos.map(todo => (
          <ToDoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  )
}

export default ToDoList
