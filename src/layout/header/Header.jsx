import { NavLink } from "react-router-dom"


export default function Header() {
  return (
    <header className="header_container">
      <input type="checkbox" className="burger_input" id="responsive_menu" />
      <label className="burger_menu" htmlFor="responsive_menu"><div className="burger_line" /></label>
      <NavLink className="logo_container" to='/'><img className="logo_image" src="/src/assets/logo.png" alt="logo" /></NavLink>
      <span className="logo_name">VENUS DEL LITORAL</span>
      <nav className="nav_header">
        <ul className="nav_list_header">
          <li className="nav_header_item">
            <NavLink className="nav_header_link" to='/'>Principal</NavLink>
          </li>
          <li className="nav_header_item">
            <NavLink className="nav_header_link" to='/register'>Registro</NavLink>
          </li>
          <li className="nav_header_item">
            <NavLink className="nav_header_link" to='/about'>Acerca de</NavLink>
          </li>
          <li className="nav_header_item">
            <NavLink className="nav_header_link" to='./contact'>Contacto</NavLink>
          </li>
          <li className="nav_header_item">
            <NavLink className="nav_header_link" to='/admin-product'>Administración de productos</NavLink>
          </li>
        </ul>
      </nav>
      <div className="shop">
        <div className="user_name">Nombre usuario</div>
          <i className="user_icon fas fa-user" />
          <i className="cart_icon fa-solid fa-cart-shopping" />
      </div>
    </header>

  )
}
