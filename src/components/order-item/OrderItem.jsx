import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './orderItem.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {useOrder} from './../../context/OrderContext';

export default function OrderItem({item}) {
  const {removeShopItem, changeItemQuantity} = useOrder()

  return (
   <li className='order-item'>
        <div className="item-image"><img src={item.image} alt="" /></div>
        <div className="item-info">{item.name}</div>
        <div className="item-count">
          <input type="number" defaultValue={item.quantity} min="1" onChange={(evt) => changeItemQuantity(item.id, +evt.target.value)}/></div>
        <div className="item-actions"><FontAwesomeIcon icon={faTrash} onClick={() => removeShopItem(item.id)} /></div>
   </li>
  )
}
