import { useParams } from 'react-router-dom'
import './productDetail.css'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const URL = import.meta.env.VITE_SERVER_URL;

export default function ProductDetail() {
  
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
        <h1>{product?.name}</h1>
        <p className="product_desc">{product?.description}</p>
        <p>Año de publicación: {product?.createdAt}</p>
        <div className="formas_de_pago">icono Paga con Tarjeta hasta 3</div>
        <div className="formas_de_envio">icono Correo Express</div>
        <div className="comprar"><button> Añadir al carrito </button></div>
      </div>
      <button className="boton_volver">Volver</button>
  </article>

  )
}
