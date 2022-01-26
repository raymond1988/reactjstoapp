/* eslint-disable no-undef */

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case 'ADD_NEW_TODO':
      return { ...state, todos: [payload, ...state.todos] }
    case 'SET_IS_COMPLETED':
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        })
      }
    default:
      return state
  }
}

