import { NavLink, useParams } from 'react-router-dom'
import './productDetail.css'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useOrder } from '../../context/OrderContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faTruck } from '@fortawesome/free-solid-svg-icons';

const URL = import.meta.env.VITE_SERVER_URL;

export default function ProductDetail() {
  const {addProduct} = useOrder();
  const [product, setProduct] = useState()
  const {id} = useParams();

  useEffect(() => {getProduct();},[])

  async function getProduct() {
    try {
      const response = await axios.get(`${URL}/products/${id}`)
      setProduct(response.data)

    } catch (error) {
      alert("error al obtener el producto")
      console.log(error)
    }  
  }

  if(!product){
    return<h5>cargando..</h5>
  }
 
  return (
    <article className="product_info_container">
      <div className="item_info"><img className="item_image"src={product?.image} alt={product?.image}/></div>
      <div className="item_info">
        <h1 className='product_name'>{product?.name}</h1>
        <p className="product_desc">{product?.description}</p>
        <p>Año de publicación: {product?.createdAt}</p>
        <div className="formas_de_pago"> <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon> Paga con Tarjeta hasta 3 cuotas </div>
        <div className="formas_de_envio"><FontAwesomeIcon icon={faTruck}></FontAwesomeIcon> Correo Express</div>
        <div className="purchase"><button onClick={() => addProduct(product)}> Añadir al carrito </button></div>
      </div>
      <button className="back_btn"><NavLink className="link" to="/">Volver</NavLink></button>
  </article>

  )
}
