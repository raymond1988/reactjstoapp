import React, { useContext} from 'react'
import { GlobalContext } from '../context/GlobalProvider'
import ToDoItem from './ToDoItem'
import AddToDoForm from './AddToDoForm'


const ToDoList = () => {
  const { todos } = useContext(GlobalContext)
  //console.log(auth.currentUser.displayName);
  return (
    <div className='col mt-5'>
      <AddToDoForm />
      {todos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default ToDoList
