import { NavLink } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="footer_container">
      <section className="item footer1">
        <h2 className="header_footer">CONTACTO</h2>
        <div className="footer_menu_container">
          <div className="social_icons"><i className="fa-brands fa-whatsapp" />{" "}
            <a href="https://wa.me/+541156210620" target="_blank">{" "}+54 11 5621-0620</a>{" "}
          </div>
          <div className="social_icons"><i className="fa-brands fa-instagram" />
            <a href="https://www.instagram.com/venusdellitoral/?hl=es" target="_blank">{" "}venusdellitoral</a>{" "}
          </div>
        </div>
      </section>
      <section className="item footer2">
        <h2 className="header_footer">INFORMACION</h2>
        <div className="footer_menu_container">
          <ul className="footer_list">
            <li className="footer_list_item">
              <NavLink href="#" target="_blank">Sobre Venus del Litoral</NavLink>
            </li>
            <li className="footer_list_item">
              <NavLink href="#" target="_blank">Consultas</NavLink>
            </li>
            <li className="footer_list_item">
              <NavLink href="#" target="_blank">Eventos pasados</NavLink>
            </li>
          </ul>
        </div>
      </section>
      <section className="item footer3">
        <h2 className="header_footer">NOVEDADES</h2>
        <div className="footer_menu_container">
          <ul className="footer_list">
            <li className="footer_list_item">
              <NavLink href="#" target="_blank">Próximos eventos</NavLink>
            </li>
          </ul>
        </div>
      </section>
    </footer>

  )
}
