import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <form className='form form_type-authorization' name='login-form'>
      <h3 className='form __title form__title_type-authorization'>Sign up</h3>
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
      <Link to='/login' className='form__text'>
        Already a member? Log in here!
      </Link>
    </form>
  );
};

export default Register;
