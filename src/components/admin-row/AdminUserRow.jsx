import './adminRow.css'

export default function AdminUserRow({users, deleteUser, editFillForm}) {
  return (
    <tr className="admin_table_row">
    <td><div className="name">{users.name}</div></td>
    <td><div className="email">{users.email}</div></td>
    <td><div className="date_birth">{users.date_birth}</div></td>
    <td><div className="phone">{users.phone}</div></td>  
    <td><div className="country">{users.country}</div></td>
    <td><div className="image"><img src={users.image} alt={users.name}></img></div></td>    
    <td><div className="actions_container">
    <button onClick={() => editFillForm(users)}>Editar</button>
    <button onClick={() => deleteUser(users._id)}>Eliminar</button>
    </div></td>
  </tr>
  )
}
