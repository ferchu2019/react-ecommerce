import './adminTable.css'
import AdminUserRow from '../admin-row/AdminUserRow'

export default function AdminUserTable() {
  return (
    <table className="admin_table">
    <thead>
      <tr>
        <th>Nombre y Apellido</th>
        <th>Correo electronico</th>
        <th>Fecha de nacimiento</th>
        <th>Pais</th>
        <th>Foto</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
        <AdminUserRow />
    </tbody>       
  </table>
  )
}
