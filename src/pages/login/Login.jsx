import { useForm } from "react-hook-form";
import "./login.css";
import { useUser } from "../../context/UserContext";


export default function Login() {
 
    const {register,handleSubmit} = useForm();

    const { login } = useUser();
   
    function handleLogin(data) {
      login(data);
    }

  return (
    <div className="login_container">
      <form className="login_form" onSubmit={handleSubmit(handleLogin)}>
        <h1>Login</h1>
        <div>
          <label> Correo electrónico <input type="email" placeholder="Correo electrónico" {...register("email", {required:"El email es requerido", minLength:{value:4, message:"Debe tener al menos 4 caracteres"}})}/></label>
          <label> Contraseña <input type="password" placeholder="Contraseña" {...register("password", {required: "El password es requerido"})}/></label>
        </div>
        <button type="submit" className="button">Ingresar</button>
      </form>
    </div>
  );
}