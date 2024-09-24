import './../admin-product/adminProduct.css'
import AdminUserTable from "../../components/admin-table/AdminUserTable";

export default function AdminUser() {
  return (
    //llamar register para completar tabla
    <div className="table_container">
      <AdminUserTable />
    </div>

  )
}

