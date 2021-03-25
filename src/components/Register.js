import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../images/header__logo.svg';
import Input from './Input';

const Register = () => {
  return (
    <div className='page'>
      <div className='page__container'>
        <header className='header'>
          <img className='header__logo' src={logo} alt='Around US logo' />
          <ul className='header__menu'>
            <li>
              <NavLink to='/signin' className='header__link'>
                Sign in
              </NavLink>
            </li>
          </ul>
        </header>
        <form className='form form__autorization'>
          <h2 className='form__title form__title-autorization'>Sign up</h2>
          <Input
            name='email'
            inputType='autorization'
            placeholder='Email'
            type='email'
          />
          <Input
            name='password'
            inputType='autorization'
            placeholder='Password'
            type='password'
          />
          <button
            className='form__button form__button_autorization'
            type='submit'
          >
            Sign up
          </button>
          <Link to='signin' className='form__text'>
            Already a member? Log in here!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
