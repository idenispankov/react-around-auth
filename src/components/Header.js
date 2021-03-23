export default function Header({logo}) {
  return (
    <header className = "header">
      <img className = "header__logo" src = {logo} alt = "Around US logo"/>
    </header>
  )
}