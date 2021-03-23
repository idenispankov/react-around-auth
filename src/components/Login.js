import React from 'react';
import Input from './Input';
import { Link } from 'react-router-dom';

const Login = ({ handleLogin }) => {
  return (
    <form className='form form_type-authorization' name='login-form'>
      <h3 className='form__title form__title_type-authorization'>Log in</h3>
      <Input
        inputType='autorization'
        className='form__input_autorization'
        type='email'
        name='email'
        placeholder='Email'
      />

      <Input
        inputType='autorization'
        className='form__input_autorization'
        type='password'
        name='password'
        placeholder='Password'
      />
      <button className='form__button form__button_type-authorization'>
        Log in
      </button>
      <Link to='/signup' className='form__text'>
        Not a member yet? Sign up here!
      </Link>
    </form>
  );
};

export default Login;
