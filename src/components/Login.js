import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
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
      <div className='list-group mx-0'>
        <p>
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
      <div className='list-group mx-0'>
        <p className='mb-3'>
          Other login options <strong>(No passwords)</strong>
        </p>
        <button className='btn btn-primary mt-0' onClick={signInWithGoogle}>
          Login With Google
        </button>
      </div>
    </>
  )
}

export default Login
