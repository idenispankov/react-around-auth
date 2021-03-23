import React from 'react';
import Input from './Input';
import { Link } from 'react-router-dom';

const Register = ({ handleRegister }) => {
  return (
    <form className='form form_type-authorization' name='login-form'>
      <h3 className='form__title form__title_type-authorization'>Sign up</h3>
    </form>
  );
};

export default Register;
