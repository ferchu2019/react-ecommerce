import './../admin-product/adminProduct.css'
import AdminUserTable from "../../components/admin-table/AdminUserTable";



export default function AdminUser() {
  
  


  return (
    <div className="admin_containe">
      <h1>Administracion de usuarios</h1>
       <div className="table_container">
           <AdminUserTable />
      {/* <Register /> */}
        </div>
    </div>
  )
}

