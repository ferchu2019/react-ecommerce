 
import { useForm } from "react-hook-form";
import "./adminProduct.css"
import axios from "axios";
import { useEffect, useState } from "react";
import AdminTable from "../../components/admin-table/AdminTable";

const URL ="https://66e84eecb17821a9d9dc3463.mockapi.io/api/v1"

export default function AdminProduct() {

  const [products, setProducts] = useState([]);
  
  const {register, handleSubmit, formState:{errors, isValid}} = useForm();
  
  useEffect(() => {getProducts();}, [])

  //llamo producto
  async function getProducts() {
    try {
      const response = await axios.get(`${URL}/products`);
      setProducts(response.data);
      console.log(response.data)
      
    } catch (error) {
      console.log(error)
    }
  }
  //creo producto nuevo
  async function loadProduct(productData){
   console.log(productData)
   try {
    const response = await axios.post(`${URL}/products`,productData)
    console.log(response.data)
    getProducts();
   } catch (error) {
    console.log(error)
   }
  }
  
  return (<>
  <div className="admin_container">
    <div className="form_container">
      <h1>Admin Product</h1>
      <form className="admin_form" onSubmit={handleSubmit(loadProduct)}>
          <div className="input_container">
            <label htmlFor="name">Nombre Producto</label>
            <input type="text" id="name" {...register("name", {required: true, minLength: 3}) }/>
            {errors.name?.type === "required" && <div className="input-error">El campo es requerido</div>}
            {errors.name?.type === "minLength" && <div className="input-error">El mínimo de caracteres es 3</div>}           
          </div>
          <div className="input_container">
            <label htmlFor="number">Precio</label>
            <input type="number" id="number" {...register("price", {required: true}) }/>
            {errors.price && <div className="input-error">El campo es requerido</div>} 
          </div>
          <div className="input_container">
            <label htmlFor="description">Descripcion</label>
            <textarea name="description" id="description" {...register("description")} rows={5}></textarea>
          </div>
          <div className="input_container">
            <label htmlFor="category">Categoría</label>
            <select {...register("category")}>
              <option value="imagenes">Imagen digital</option>
              <option value="stickers">Stickers</option>
              <option value="impresiones">Impresiones</option>
            </select>
          </div>
          <div className="input_container">
            <label htmlFor="createdAt">Fecha de ingreso</label>
            <input type="date" {...register("createdAt")} />
          </div>
          <div className="input_container">
            <label htmlFor="image">Imagen</label>
            <input type="url" id="image" {...register("image") }/>
          </div>
          <button className="btn" type="submit" disabled={!isValid}>Cargar producto</button>
      </form>
    </div>
    <div className="table_container">
      <AdminTable products={products}/>
    </div>
  </div>
  </>)
}
