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
    <div className='row align-items-center g-lg-5 py-2'>
      <div className='col-lg-7 p-md-5'>
        <p className='fs-4 text-center mb-3'>
          <strong>Welcome </strong>to react todo app with firebase backend.
        </p>
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
          <hr />
          <p className='mb-3 mb-md-2 mb-lg-3 text-center'>
            <strong> Other register options </strong>
          </p>

          <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={signInWithGoogle}
            >
              Register In With Google
            </button>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={signInWithGoogle}
            >
              Register In With GitHub
            </button>
          </div>
        </div>
      </div>
      <div className='col-md-10 mx-auto text-center col-lg-5'>
        <h1 className='display-4 fw-bold'>
          Do some amazing work today. Register.
        </h1>
      </div>
    </div>
  )
}

export default Register
