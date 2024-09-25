import './register.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Swal from "sweetalert2";
import AdminUserTable from '../../components/admin-table/AdminUserTable';

const URL =import.meta.env.VITE_SERVER_URL

export default function Register() {

  const [user, setUser] = useState([]);
  const [selectedUser, setSelectedUser] =useState(null);
  const {register, reset, setValue, handleSubmit, formState:{errors,isValid}} = useForm();

  useEffect(() => {getUser();}, [])

  useEffect(() => { 
    if(selectedUser) {
      setValue("name", selectedUser.name), 
      setValue("email", selectedUser.email), 
      setValue("password", selectedUser.password), 
      setValue("phone", selectedUser.phone),
      setValue("date_birth", selectedUser.date_birth),
      setValue("country", selectedUser.country)
      setValue("avatar", selectedUser.avatar)
    }else{
          reset()
        }
    }, [selectedUser, setValue, reset])
  
  async function getUser() {
    try {
      const response = await axios.get(`${URL}/users`);
      setUser(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  function deleteUser (userId) {
    Swal.fire({title:"Borrar usuario", text:"Seguro quiere borrar el usuario", icon: "warning", showCancelButton: true, reverseButtons:true,}).then (async(result) => {
    try {
      if(result.isConfirmed){
        const response = await axios.delete(`${URL}/users/${userId}`);
        console.log(response.data);
        getUser();
      }} catch (error) {
        console.log(error)
        Swal.fire({title:"Error al borrar", text: "El usuario no se pudo borrar", icon:"error"})
       }})}

    function editFillForm(users){
      console.log("usuario a editar", users);
      setSelectedUser(users);
     }

  async function newRegister(userData){
    console.log(userData)
    try {
     if(selectedUser){
        const {id}= selectedUser;
        const response = await axios.put(`${URL}/users/${id}`, userData);
        console.log(response.data);
        Swal.fire({ title:"Producto actualizado", text:"El producto fue actualizado correctamente", icon:"success", timer:1500})
        setSelectedUser(null)
     }else{
        const response = await axios.post(`${URL}/users`,userData)
        console.log(response.data)
        reset()
        ;}
       
      getUser(<AdminUserTable/>);
   
      } catch (error) {console.log(error)}


}

  return (
    <div className="register_container">
      <h2>REGISTRO DE NUEVO USUARIO</h2>
      <h3>Complete con sus datos personales</h3>
      <form className="register_form"  onSubmit={handleSubmit(newRegister)}>
        <div className="input_container">
          <label htmlFor='name'>Nombre y Apellido </label>
          <input type="text" name="name" id="name" {...register("name", {required:true})}/>
          {errors.name?.type === "required" && <div className="input-error">El campo es requerido</div>}
          {errors.name?.type === "minLength" && <div className="input-error">El mínimo de caracteres es 6</div>}   
        </div>
        <div className="input_container">
          <label htmlFor="email">Correo electronico</label>
          <input type="email" name="email" id="email" {...register("email", {required:true, minLength:10, maxLength:50})}/>
        </div>
        <div className="input_container">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" {...register("password", {required:true, minLength:5, maxLength:8})}/>
        </div>
        <div className="input_container">
          <label htmlFor="phone">Telefono</label>
          <input type="tel" name="phone" id="phone" {...register("phone")}/>
        </div> 
        <div className="input_container">
          <label htmlFor="date_birth">Fecha de Nacimiento</label>
          <input type="date" name="date_birth" id="date_birth" {...register("date_birth", {required:true})} />
        </div>
        <div className="input_container">
          <label htmlFor="country">Pais</label>
          <select name="country" id="country" {...register("country")}>
            <option value="" selected="">Elija una opción</option>
            <option value="ARG">Argentina</option>
            <option value="BOL">Bolivia</option>
            <option value="BRA">Brasil</option>
            <option value="CHI">Chile</option>
            <option value="COL">Colombia</option>
            <option value="COR">Costa Rica</option>
            <option value="CUB">Cuba</option>
            <option value="ECU">Ecuador</option>
            <option value="ELS">El Salvador</option>
            <option value="GFR">Guayana Francesa</option>
            <option value="GRA">Granada</option>
            <option value="GUAT">Guatemala</option>
            <option value="GUAY">Guayana</option>
            <option value="HAI">Haiti</option>
            <option value="HON">Honduras</option>
            <option value="JAM">Jamaica</option>
            <option value="MEX">Mexico</option>
            <option value="NIC">Nicaragua</option>
            <option value="PAR">Paraguay</option>
            <option value="PAN">Panama</option>
            <option value="PER">Peru</option>
            <option value="PTR">Puerto Rico</option>
            <option value="RDO">Republica Dominicana</option>
            <option value="SUR">Surinam</option>
            <option value="URU">Uruguay</option>
            <option value="VEN">Venezuela</option>
          </select>
        </div>
        <div className="input_container">
          <label htmlFor="avatar">Foto avatar</label>
          <input type="url" name="avatar" id="avatar" {...register("avatar")} />
        </div>
        <div className="input_container">
        <button type="submit" disabled={!isValid}>Cargar nuevo</button>
        </div>
     </form>
  </div>
  )
}
