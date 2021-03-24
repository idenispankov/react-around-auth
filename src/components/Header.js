// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/header__logo.svg';

export default function Header({ handleLogout, loggedIn }) {
  // const [showLinks, setShowLinks] = useState(false);

  // const showMenu = () => {
  //   setShowLinks(true);
  // };

  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Around US logo' />
      <ul className='header__links'>
        <NavLink to='/signin' className='header__link'>
          Log out
        </NavLink>
      </ul>
    </header>
  );
}
