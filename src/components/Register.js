import React from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';

const Register = () => {
  return (
    <form className='form form__autorization'>
      <h2 className='form__title form__title-autorization'>Sign up</h2>
      <Input inputType='autorization' placeholder='Email' type='email' />
      <Input inputType='autorization' placeholder='Password' type='password' />
      <button className='form__button form__button_autorization' type='submit'>
        Sign up
      </button>
      <Link to='signin' className='form__text'>
        Already a member? Log in here!
      </Link>
    </form>
  );
};

export default Register;
