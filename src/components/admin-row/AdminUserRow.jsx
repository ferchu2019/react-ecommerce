import './adminRow.css'

export default function AdminUserRow() {
  return (
    <tr className="admin_table_row">
    <td><div className="name"></div></td>
    <td><div className="email"></div></td>
    <td><div className="password"></div></td>
    <td><div className="phone"></div></td>
    <td><div className="date_birth"></div></td>
    <td><div className="country"></div></td>
    <td><div className="image"></div></td>    
    <td><div className="actions_container">
    <button >Editar</button>
    <button >Eliminar</button>
    </div></td>
  </tr>
  )
}
