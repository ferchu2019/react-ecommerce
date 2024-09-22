import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export default function OrderProvider({children}){
    const [order, setOrder] = useState([]);

    function addProduct(product){
        console.log("Producto cargado", product.name)
        setOrder([...order, product.name])
    }
    return(
        <OrderContext.Provider value={{order,addProduct}}>
            {children}
        </OrderContext.Provider>
    )
}