import logo from '../images/header__logo.svg';

export default function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Around US logo' />
    </header>
  );
}
