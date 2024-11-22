import './productGallery.css';
import ProductCard from '../product-card/ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';


const URL = import.meta.env.VITE_LOCAL_SERVER;

export default function ProductGallery() {
    const [productsGallery, setProductsGallery] = useState([]);
    useEffect(()=>{getProducts();}, [])

    async function getProducts() {
        try {
         const response = await axios.get(`${URL}/products`) 
         console.log(response)
         setProductsGallery(response.data.products)
        
        } catch (error) {
            alert("Error al obtener producto")
            console.log(error)
        }
    }

  return ( <>  
    <section className="product_section">
        <h2 className="title_product_section">Productos destacados</h2>
        <div className="product_container">
            {productsGallery.map(products =>(<ProductCard key={products.id} prod={products}/>))}
        </div> 
    </section>
</> 
  )
}
