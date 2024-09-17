

export default function AdminTable({products}) {
  return (
    <table className="admin_table">
        {products.map (eachProd => {
          return<h2 key={eachProd.id}> {eachProd.name}</h2>
        })
      } 
    </table>
  )
}
