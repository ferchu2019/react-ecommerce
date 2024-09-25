import './../admin-product/adminProduct.css'
import AdminUserTable from "../../components/admin-table/AdminUserTable";
import Register from '../register/Register';


export default function AdminUser({users,deleteUser,editFillForm}) {
 
  


  return (
    //llamar register para completar tabla
    <div className="table_container">
     
      <AdminUserTable users={users} deleteUser={deleteUser} editFillForm={editFillForm}/>

      <Register />
    </div>

  )
}

