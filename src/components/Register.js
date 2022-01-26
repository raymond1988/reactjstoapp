import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle
} from '../firebase'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const register = () => {
    if (!name) alert('Please enter name')
    registerWithEmailAndPassword(name, email, password)
  }
  return (
    <div className='list-group'>
      <div className='mb-3'>
        <label htmlFor='inputName' className='form-label'>
          Name
        </label>
        <input
          type='text'
          className='form-control'
          id='inputName'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
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
      <div className='mb-3'>
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
        <button type='submit' className='btn btn-primary' onClick={register}>
          Register
        </button>
      </div>
      <div className='mb-3'>
        <button
          type='submit'
          className='btn btn-primary'
          onClick={signInWithGoogle}
        >
          Sign In With Google
        </button>
      </div>
    </div>
  )
}

export default Register
