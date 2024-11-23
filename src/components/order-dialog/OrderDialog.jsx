import { useOrder } from '../../context/OrderContext';
import OrderItem from '../order-item/OrderItem';
import './orderDialog.css'

export default function OrderDialog() {
    const {order, toggleModal, setToggleModal, total, createOrder} = useOrder();
    console.log(toggleModal)
    
    if(!toggleModal) return;

    return (
        <div className="modal-overlay" onClick = {() => setToggleModal(!toggleModal)}>
            <div className="modal-content" onClick = {(e) => e.stopPropagation()}>
                <div className="modal-header">
                   Orden de compra
                </div>
                <div className="modal-body">
                    <ul className="order-list">
                        {order.map((item) => <OrderItem key={item._id} item={item} />)}
                        <br />
                        <li className='order-total'>Total compra <strong>$ {total}</strong></li>
                    </ul>
                </div>
                <div className="modal-footer">
                    <button  onClick = {() => setToggleModal(!toggleModal)}>Cerrar</button>
                    <button onClick={() => createOrder()} >Finalizar compra</button>
                </div>
            </div>
        </div>
  )
}
