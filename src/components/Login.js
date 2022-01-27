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
    <>
      <div className='col-sm-12 col-md-6 col-lg-6'>
        <p className='text-center mb-3'>
          <strong>Welcome </strong>to react todo app with firebase backend.
        </p>
        <div className=''>
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
      </div>
      <div className='col order-md-last'>
        <div className='mb-3'>
          <p className='mb-3 mb-md-2 mb-lg-3 text-center'>
           <strong> Other login options </strong>
          </p>
          
          <div className='d-flex flex-column flex-wrap py-3 py-md-5 py-lg-3'>
            <button className='btn btn-primary my-1 my-md-3 flex-fill' onClick={signInWithGoogle}>
              Login With Google
            </button>
            <button className='btn btn-primary my-1 my-md-3 flex-fill' onClick={signInWithGoogle}>
              Login With GitHub
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
