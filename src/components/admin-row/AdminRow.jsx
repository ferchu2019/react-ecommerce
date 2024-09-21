import './adminRow.css'

export default function AdminRow({product, deleteProduct, editFillForm}) {
  return (
    <tr className="admin_table_row">
      <td><div className="image"><img src={product.image} alt={product.name}/></div></td>
      <td><div className="name">{product.name}</div></td>
      <td><div className="description_container">{product.description}</div></td>
      <td><div className="price">{product.price}</div></td>
      <td><div className="category">{product.category}</div></td>
      <td><div className="date">{product.createdAt}</div></td>
      <td><div className="actions_container">
        <button onClick={() => editFillForm(product)}>Editar</button>
        <button onClick={() => deleteProduct(product.id) }>Eliminar</button>
      </div></td>
    </tr>
  )
}
