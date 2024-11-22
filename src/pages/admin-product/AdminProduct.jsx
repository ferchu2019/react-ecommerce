 
import { useForm } from "react-hook-form";
import "./adminProduct.css"
import axios from "axios";
import { useEffect, useState } from "react";
import AdminTable from "../../components/admin-table/AdminTable";
import Swal from "sweetalert2";

const URL = import.meta.env.VITE_LOCAL_SERVER;

export default function AdminProduct() {

  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] =useState(null);

  const [categories, setCategories] = useState([]);

  const {register, setValue, reset, handleSubmit, formState:{errors, isValid}} = useForm();
  
  useEffect(() => {getProducts(); getCategories();}, [])

  useEffect(() => { 
    if(selectedProduct) {
      setValue("name", selectedProduct.name), 
      setValue("price", selectedProduct.price), 
      setValue("description", selectedProduct.description), 
      //setValue("image", selectedProduct.image),
      setValue("category", selectedProduct.category),
      setValue("createdAt", selectedProduct.createdAt)
      }else{
          reset()
        }
    }, [selectedProduct, setValue, reset])

  async function getCategories() {
    try {
      const response = await axios.get(`${URL}/categories`);
      console.log(response.data);
      setCategories(response.data.categories)
      
    } catch (error) {
      console.log(error)
      Swal.fire({title:"Error al cargar", text: "No se pudieron cargar las categorias", icon:"error"})
    }
  }

  async function getProducts() {
    try {
      const response = await axios.get(`${URL}/products`);
      setProducts(response.data.products);
      console.log(response.data)
      
    } catch (error) {
      console.log(error)
    }
  }
 
  function deleteProduct (productId) {
    Swal.fire({title:"Borrar producto", text:"Seguro que quiere borrar el producto?", icon: "warning", showCancelButton: true, reverseButtons:true,}).then (async(result) => {
      try {
        if(result.isConfirmed){
          const response = await axios.delete(`${URL}/products/${productId}`);
          console.log(response.data);
          getProducts();
        }} catch (error) {
          console.log(error)
          Swal.fire({title:"Error al borrar", text: "El producto no se pudo borrar", icon:"error"})
         }})}

  function editFillForm(product){
    console.log("producto a editar", product);
    setSelectedProduct(product);
  }
  
  async function loadProduct(productData){
   console.log(productData)
   try {
    if(selectedProduct){
      const {_id: id}= selectedProduct;
      const response = await axios.put(`${URL}/products/${id}`, productData);
      console.log(response.data);
      Swal.fire({ title:"Producto actualizado", text:"El producto fue actualizado correctamente", icon:"success", timer:1500})
      setSelectedProduct(null)

      }else{
        const response = await axios.post(`${URL}/products`,productData)
        console.log(response.data)
        Swal.fire({ title:"Producto creado", text:"El producto fue creado correctamente", icon:"success", timer:1500})
        reset()
        ;}
    
    getProducts();

   } catch (error) {
    console.log(error)
   }
  }

  return (<>
  <div className="admin_container">
    <div className="form_container">
      <h1>Administración de Productos</h1>
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
              {categories.map(cat => (<option key={cat._id} value={cat.name}>{cat.viewValue}</option>))}
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
          <div className="input_container">
             <button className={`btn ${selectedProduct && 'btn-success'}`} type="submit" disabled={!isValid}>{selectedProduct? "Editar":"Cargar producto"}</button>
          </div> 
      </form>
    </div>
    <div className="table_container">
      <AdminTable products={products} deleteProduct={deleteProduct} editFillForm={editFillForm}/>
    </div>
  </div>
  </>)
}