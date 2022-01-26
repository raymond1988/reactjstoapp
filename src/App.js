import './App.css'
import ToDoList from './components/ToDoList'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalProvider'

const App = () => {
  return (
    <GlobalProvider>
      <div className='col'></div>
      <div className='col-6'>
        <Router>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/todolist' element={<ToDoList />} />
          </Routes>
        </Router>
      </div>
      <div className='col'></div>
    </GlobalProvider>
  )
}

export default App
/* 
<AddToDoForm />
        <ToDoList /> */
