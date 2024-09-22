import { useOrder } from '../../context/OrderContext';
import './orderDialog.css'

export default function OrderDialog({showModal, setToggleModal}) {
    const {order} = useOrder
    if(!showModal) return;

  return (
    <div className="modal-overlay">
        <div className="modal-content">
            <div className="modal-header">
                Titulo
            </div>
            <div className="modal-body">
                <ul className="order-list">
                    {order.map((item, index) => <li className="order-item" key={index}>{item}</li>)}
                </ul>
            </div>
            <div className="modal-footer">
                <button onClick={()=>setToggleModal(!showModal)}>cerrar</button>
                <button>Finalizar compra</button>
            </div>
        </div>
    </div>
  )
}
