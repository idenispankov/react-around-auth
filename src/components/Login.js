import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <form className='form form_type-authorization' name='login-form'>
      <h3 className='form __title form__title_type-authorization'>Log in</h3>
      <input
        className='form__input form__input_type-authorization'
        type='email'
        placeholder='Email'
      />
      <input
        className='form__input form__input_type-authorization'
        type='password'
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
