import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalProvider'

function AddToDoForm () {
  const [todo, setTodo] = useState('')
  const { createTodo } = useContext(GlobalContext)

  const handleOnClick = e => {
    e.preventDefault()
    if(todo === "") return
    const newTodo = {
      id: Math.floor(Math.random() * 10000000),
      text: todo,
      isCompleted: false
    }
    createTodo(newTodo)
  }
  return (
    <>
      <form className='form-floating'>
        <div className='input-group'>
          <input
            type='text'
            className='form-control'
            id='inputTodo'
            aria-describedby='todoHelp'
            placeholder='never ending todos'
            onChange={e => setTodo(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault()
                handleOnClick(e)
              }
            }}
            value={todo}
          />
          <button
            type='button'
            className='btn btn-outline-secondary'
            onClick={e => handleOnClick(e)}
          >
            Add
          </button>
        </div>
      </form>
    </>
  )
}

export default AddToDoForm
