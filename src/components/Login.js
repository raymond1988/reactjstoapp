import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth, loginWithEmailAndPassword, signInWithGoogle } from '../firebase'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) {
      return
    }
    if (user) navigate('/ToDoList')
  }, [user, loading])

  return (
    <div className='row align-items-center g-lg-5 py-2'>
      <div className='col-lg-7 p-md-5'>
        <p className='fs-4 text-center mb-3'>
          <strong>Welcome </strong>to react todo app with firebase backend.
        </p>
        <div className='mb-3'>
          <label htmlFor='inputEmail' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='inputEmail'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='inputPassword' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='inputPassword'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <button
            className='btn btn-primary mt-2'
            onClick={() => loginWithEmailAndPassword(email, password)}
          >
            Login
          </button>
        </div>
        <div className='mb-3'>
          <p className='mb-3 mb-md-2 mb-lg-3 text-center'>
            <strong> Other login options </strong>
          </p>
          <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
            <button className='btn btn-primary my-1' onClick={signInWithGoogle}>
              Login With Google
            </button>
            <button className='btn btn-primary my-1' onClick={signInWithGoogle}>
              Login With GitHub
            </button>
          </div>
        </div>
      </div>
      <div className='col-md-10 mx-auto text-center col-lg-5'>
        <h1 className='display-4 fw-bold'>
          Do some amazing work today. Login.
        </h1>
      </div>
    </div>
  )
}

export default Login
