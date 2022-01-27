import './App.css'
import ToDoList from './components/ToDoList'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalProvider'

const App = () => {
  return (
    <GlobalProvider>
      <div className='d-flex flex-wrap gap-5 mt-5'>
        <Router>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/todolist' element={<ToDoList />} />
          </Routes>
        </Router>
      </div>
    </GlobalProvider>
  )
}

export default App
/* 
<AddToDoForm />
        <ToDoList /> */
