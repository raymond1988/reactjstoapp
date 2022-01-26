import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
//initial state
const initalState = {
  todos: [
    { id: 1, text: 'Go to the place under the bridge', isCompleted: false },
    {
      id: 2,
      text: 'Read books that are have boring titles',
      isCompleted: false
    },
    { id: 3, text: 'Clean the majesties litter box', isCompleted: false },
    { id: 4, text: 'Have a bath after working out', isCompleted: false },
    { id: 5, text: 'Go to the library', isCompleted: false },
    { id: 6, text: 'Get rid of the trash', isCompleted: false },
    { id: 7, text: 'Practice javascript', isCompleted: false },
    { id: 8, text: 'Prepare YT video', isCompleted: false },
    { id: 9, text: 'Upload projects to github', isCompleted: false },
    { id: 10, text: 'Read some beautiful code', isCompleted: false },
    { id: 11, text: 'Train your legs', isCompleted: false },
    { id: 12, text: 'Meditate for the night is long', isCompleted: false }
  ]
}

//create context
export const GlobalContext = createContext(initalState)

//provider component
export const GlobalProvider = ({ children }) => {
  //use reducer
  const [state, dispatch] = useReducer(AppReducer, initalState)

  //write dispatch functions here
  const createTodo = (newTodo) => {
    dispatch({
      type: 'ADD_NEW_TODO',
      payload: newTodo
    })
  }

  const setIsCompleted = (id) => {
    dispatch({
      type: 'SET_IS_COMPLETED',
      payload: id
    })
  }
  const getListOfTodos = () => {
    dispatch({
      type: ''
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        getListOfTodos,
        createTodo,
        setIsCompleted
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
