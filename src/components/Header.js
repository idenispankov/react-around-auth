import logo from '../images/header__logo.svg';

export default function Header({ handleLogout }) {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Around US logo' />
      <button className='header__button' onClick={handleLogout}>
        Log Out
      </button>
    </header>
  );
}
