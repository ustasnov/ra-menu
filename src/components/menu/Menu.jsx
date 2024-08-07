
import {NavLink} from 'react-router-dom';

function Menu() {
  const defClassFunc = ({isActive}) => `menu__item${isActive ? " menu__item-active" : ""}`;

  return (
    <nav className="menu">     
      <NavLink to="/" className={defClassFunc}>Главная</NavLink>
      <NavLink to="/drift" className={defClassFunc}>Дрифт-такси</NavLink>
      <NavLink to="/timeattack" className={defClassFunc}>Time Attack</NavLink>
      <NavLink to="/forza" className={defClassFunc}>Forza Karting</NavLink>
    </nav>
  )
}

export default Menu;
