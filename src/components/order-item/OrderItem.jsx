import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './orderItem.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {useOrder} from './../../context/OrderContext';

const URL = import.meta.env.VITE_LOCAL_SERVER;

export default function OrderItem({item}) {
  const {removeShopItem, changeItemQuantity} = useOrder()

  return (
  
   <li className='order-item'>
        <div className="item-image"><img src={`${URL}/images/products/${item.image}`} alt="" /></div>
        <div className="item-info">{item.name}</div>
        <div className="item-count">
          <input className="item-input" type="number" defaultValue={item.quantity} min="1" onChange={(evt) => changeItemQuantity(item._id, +evt.target.value)}/></div>
        <div className="item-actions"><FontAwesomeIcon icon={faTrash} onClick={() => removeShopItem(item._id)} /></div>
   </li>
  )

}