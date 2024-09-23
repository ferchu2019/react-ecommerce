import './register.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState, useEffect } from 'react';

const URL =import.meta.env.VITE_SERVER_URL

export default function Register() {

  const [user, setUser] = useState([]);

  const {register, reset, handleSubmit, formState:{errors,isValid}} = useForm();

  useEffect(() => {getUser();}, [])
  
  async function getUser() {
    try {
      const response = await axios.get(`${URL}/register`);
      setUser(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function newRegister(userName) {
    console.log(userName)
    try {
      const response = await axios.post(`${URL}/register`, userName)
      console.log(response.data)
      getUser();
      reset()
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <div className="register_container">
      <h2>REGISTRO DE NUEVO USUARIO</h2>
      <h3>Complete con sus datos personales</h3>
      <form className="register_form"  onSubmit={handleSubmit(newRegister)}>
        <div className="input_container">
          <label htmlFor='fullname'>Nombre y Apellido </label>
          <input type="text" name="fullname" id="fullname"/>
          {errors.fullname?.type === "required" && <div className="input-error">El campo es requerido</div>}
          {errors.fullname?.type === "minLength" && <div className="input-error">El mínimo de caracteres es 6</div>}   
        </div>
        <div className="input_container">
          <label htmlFor="email">Correo electronico</label>
          <input type="email" name="email" id="email" required="" placeholder="nombre@misitio.com" minLength={10} maxLength={50}pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$" 
          />
        </div>
        <div className="input_container">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" required=""  minLength={6} maxLength={10}/>
        </div>
        {/* <div className="input_container">
          <label htmlFor="password">Repetir Contraseña</label>
          <input type="password" name="password" id="password" required="" />
        </div> */}
        <div className="input_container">
          <label htmlFor="date_birth">Fecha de Nacimiento</label>
          <input type="date" name="date_birth" id="date_birth" required="" />
        </div>
        <div className="input_container">
          <label htmlFor="country">Pais</label>
          <select name="country" id="country" required="">
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
          <input type="file" name="avatar" id="avatar" accept="image/*" />
        </div>
        <div className="input_container">
          <button type="submit">Enviar</button>
        </div>
     </form>
  </div>
  )
}
