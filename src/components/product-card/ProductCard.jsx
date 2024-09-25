import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './productCard.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useOrder } from '../../context/OrderContext'

export default function ProductCard({prod}) {
  const {addProduct} = useOrder();

  return (
    <article className="product_card_container">      
      <div className="product_card_header">
        <div className="product_image">
          <img src={prod.image} alt={prod.name} />
          <button className="button_quickview"><NavLink to={`/product-detail/${prod.id}`}>Ver mas</NavLink></button>
        </div>
      </div>
      <div className="product_card_body">
        <div className="product_category">{prod.category}</div>
        <div className="product_name">{prod.name}</div>
        <div className="product_info">
          <div className="product_price">$ {prod.price}</div>
          <div className="date_of_entry">{prod.createdAt}</div>
        </div>
      </div>
      <div className="product_card_footer">
        <button onClick={()=>addProduct(prod)}><FontAwesomeIcon icon={faCartShopping} /> Agregar al carrito</button>
      </div>
  </article>
  )
}
