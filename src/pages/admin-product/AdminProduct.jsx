 
import { useForm } from "react-hook-form";
import "./adminProduct.css"

export default function AdminProduct() {
  
  const {register, handleSubmit, formState:{errors}} = useForm();

  function onProductSubmit(productData){
   console.log(productData)
  }
  
  return (<>
   <h1>Admin Product</h1>
   <form className="admin_form" onSubmit={handleSubmit(onProductSubmit)}>
      <div className="input_container">
        <label htmlFor="name">Nombre Producto</label>
        <input type="text" id="name" {...register("name", {required: true}) }/>
        {errors.name && <div className="input-error">El campo es requerido</div>}        
      </div>
      <div className="input_container">
        <label htmlFor="number">Precio</label>
        <input type="number" id="number" {...register("price", {required: true}) }/>
        {errors.price && <div className="input-error">El campo es requerido</div>} 
      </div>
      <div className="input_container">
        <label htmlFor="image">Imagen</label>
        <input type="url" id="image" {...register("image") }/>
      </div>
      <button type="submit">Cargar producto</button>
   </form>

  </>
  )
}
