import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export default function OrderProvider({children}){
    const [count, setCount] = useState(0);
    const [order, setOrder] = useState([]);
    const [toggleModal, setToggleModal] = useState(false)
    const [total, setTotal] =useState(0)

    useEffect(() => {
        countItems()
        totalshopping()    
        }, [order])

    function addProduct(product){
        console.log("Producto cargado", product)
        const productExists = order.find(prod => prod.id === product.id); 

        if(productExists){
            productExists.quantity++;
            setOrder([...order])
        }else{
            product.quantity = 1;
            setOrder([...order, product])     
        }
        
        Swal.fire({position:'bottom-end', icon:'success', padding:'.5rem',title:"Producto Agregado", width:'300px'})    
    }

    function countItems(){
        let numberOfItems = 0;
        for(let item of order){numberOfItems+=item.quantity;}
        setCount(numberOfItems)
    }

    function totalshopping(){
        let total =0;
        order.forEach(item => {total+=item.price*item.quantity})
        setTotal(total)
    }

    function removeShopItem(id){
        const orderFiltered = order.filter(prod => prod.id !== id)
        setOrder(orderFiltered)
    }

    function changeItemQuantity(id, inputValue){
        const product = order.find(prod => prod.id === id);
        product.quantity = inputValue;
        setOrder([...order])
    }

    return(
        <OrderContext.Provider value={{order, addProduct, toggleModal, setToggleModal, count, total, removeShopItem, changeItemQuantity}}>
            {children}
        </OrderContext.Provider>
    )
}