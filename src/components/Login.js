import React from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';

const Login = () => {
  return (
    <form className='form form__autorization'>
      <h2 className='form__title form__title-autorization'>Log in</h2>
      <Input inputType='autorization' placeholder='Email' type='email' />
      <Input inputType='autorization' placeholder='Password' type='password' />
      <button className='form__button form__button_autorization' type='submit'>
        Log in
      </button>
      <Link to='signup' className='form__text'>
        Not a member yet? Sign up here!
      </Link>
    </form>
  );
};

export default Login;
