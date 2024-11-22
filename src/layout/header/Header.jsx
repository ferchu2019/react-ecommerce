import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"
import { useOrder } from "../../context/OrderContext"
import { useUser } from "../../context/UserContext";


export default function Header() {
  const {setToggleModal, count} = useOrder();
  const {user, logout} = useUser();

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
          {
            user?.role === "admin" && <>
            <li className="nav_header_item">
                <NavLink className="nav_header_link" to='/admin-product'>Administración de productos</NavLink>
            </li>
            <li className="nav_header_item">
                <NavLink className="nav_header_link" to='/admin-user'>Administración de usuarios</NavLink>
            </li>
            </>
          }
          {
          user?
          (<li className="nav_header_item">
            <NavLink className="nav_header_link" onClick={logout}>Logout</NavLink>
          </li>) :
          (<li className="nav_header_item">
            <NavLink className="nav_header_link" to='./login'>Login</NavLink>
          </li>)
          }
        </ul>
      </nav>
      <div className="user">
        <div className="user_name">
          {user?.name || "usuario"}
        </div>
        <div className="order cart_icon">
          <div className="order-count">{count}</div>
          <FontAwesomeIcon icon={faCartShopping} onClick = {() => setToggleModal(modalState=>!modalState)} />
        </div>
        <div className="avatar user_icon"><FontAwesomeIcon icon={faUser}/></div>
      </div>
    </header>
    )
  }
  
