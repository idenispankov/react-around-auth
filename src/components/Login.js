import React from 'react';
import Input from './Input';
import { Link } from 'react-router-dom';

const Login = ({ handleLogin }) => {
  return (
    <form className='form form_type-authorization' name='login-form'>
      <h3 className='form__title form__title_type-authorization'>Log in</h3>
    </form>
  );
};

export default Login;
