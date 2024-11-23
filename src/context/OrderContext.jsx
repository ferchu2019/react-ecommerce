import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useUser } from "./UserContext";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export default function OrderProvider({children}){
    const {user} = useUser();
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
        const productExists = order.find(prod => prod._id === product.id); 

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
        const orderFiltered = order.filter(prod => prod._id !== id)
        setOrder(orderFiltered)
    }

    function changeItemQuantity(id, inputValue){
        const product = order.find(prod => prod._id === id);
        product.quantity = inputValue;
        setOrder([...order])
    }

    async function createOrder() {
        try {
            if(!user?._id){
                Swal.fire({title:"Error al crear la orden", text: "Usuario no registrado", icon:"error"})
            }
                    
            const products = order.map(prod => {
                return{ product:prod._id, quantity: prod.quantity, price: prod.price}
            })
            console.log(products)
            await axios.post("http://localhost:3000/order", {products, user: user._id, total}) 
            Swal.fire({ title:"Orden creada", text:"La orden se creó correctamente", icon:"success", timer:1500}) 

        } catch (error) {
            console.log(error);
            Swal.fire({title:"Error al crear la orden", text: "La orden no se pudo crear", icon:"error"})
        }  
    }

    return(
        <OrderContext.Provider value={{order, addProduct, toggleModal, setToggleModal, count, total, removeShopItem, changeItemQuantity, createOrder}}>
            {children}
        </OrderContext.Provider>
    )
}