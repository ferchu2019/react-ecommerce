import './adminTable.css'
import AdminUserRow from '../admin-row/AdminUserRow'

export default function AdminUserTable({users, deleteUser, editFillForm}) {
  return (<div className="table_container">
    <table className="admin_table">
    <thead>
      <tr>
        <th>Nombre y Apellido</th>
        <th>Correo electronico</th>
        <th>Fecha de nacimiento</th>
        <th>Contraseña</th>
        <th>Telefono</th>
        <th>Pais</th>
        <th>Foto</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {users.map(users => {
        return <AdminUserRow key={users.id} users={users} deleteUser={deleteUser} editFillForm={editFillForm} /> 
      })}
               
    </tbody>       
  </table>
  </div>
  )
}
