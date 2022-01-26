import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalProvider'

const ToDoItem = ({ todo }) => {
  const { setIsCompleted } = useContext(GlobalContext)
  const handleCheckBox = e => {
    setIsCompleted(todo.id)
  }

  return (
    <div className='list-group-item d-flex'>
      <input
        type='checkbox'
        className='form-check-input'
        onClick={e => handleCheckBox(e)}
        // checked = {todo.isCompleted ? true : ''}
        defaultChecked={todo.isCompleted}
      />
      <p
        className={
          todo.isCompleted
            ? 'text-decoration-line-through mb-0 ms-2 fw-light'
            : 'mb-0 ms-2'
        }
      >
        {todo.text}
      </p>
    </div>
  )
}

export default ToDoItem
