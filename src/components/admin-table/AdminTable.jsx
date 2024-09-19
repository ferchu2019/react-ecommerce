import AdminRow from '../admin-row/AdminRow';
import './adminTable.css'

export default function AdminTable({products}) {
  
  return (
    <table className="admin_table">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre producto</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Categoria</th>
          <th>Fecha de Ingreso</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map (eachProd => {
          return <AdminRow key={eachProd.id} product={eachProd}/>
        })
      }
      </tbody>       
    </table>
  )
}