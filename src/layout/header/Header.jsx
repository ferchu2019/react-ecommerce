import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="header_container">
  <input type="checkbox" className="burger_input" id="responsive_menu" />
  <label className="burger_menu" htmlFor="responsive_menu">
    <div className="burger_line" />
  </label>
  <NavLink className="logo_container" href="index.html">
    <img className="logo_image" src="/assets/img/logo.png" alt="logo" />
  </NavLink>
  <span className="logo_name">VENUS DEL LITORAL</span>
  <nav className="nav_header">
    <ul className="nav_list_header">
      <li className="nav_header_item">
        <NavLink className="nav_header_link" href="index.html">
          Principal
        </NavLink>
      </li>
      <li className="nav_header_item">
        <NavLink className="nav_header_link" href="/pages/registro/registro.html">
          Registro
        </NavLink>
      </li>
      <li className="nav_header_item">
        <NavLink className="nav_header_link" href="/pages/acerca_de/acerca_de.html">
          Acerca de
        </NavLink>
      </li>
      <li className="nav_header_item">
        <NavLink className="nav_header_link" href="/pages/contacto/contacto.html">
          Contacto
        </NavLink>
      </li>
      <li className="nav_header_item">
        <a
          className="nav_header_link"
          href="/pages/adm_productos/adm_productos.html"
        >
          Administración de productos
        </a>
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
