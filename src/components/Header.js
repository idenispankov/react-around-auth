// import { useState } from 'react';
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
        <button className='header__link-button' onClick={handleLogout}>
          Log out
        </button>
      </ul>
    </header>
  );
}
