import './adminRow.css'

export default function AdminUserRow() {
  return (
    <tr className="admin_table_row">
    <td><div className="name">{user.name}</div></td>
    <td><div className="email">{user.email}</div></td>
    <td><div className="password">{user.password}</div></td>
    <td><div className="phone">{user.phone}</div></td>
    <td><div className="date_birth">{user.date_birth}</div></td>
    <td><div className="country">{user.country}</div></td>
    <td><div className="image"><img src={user.image} alt={user.name}/></div></td>    
    <td><div className="actions_container">
      <button >Editar</button>
      <button >Eliminar</button>
    </div></td>
  </tr>
  )
}
