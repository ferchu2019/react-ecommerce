import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import OrderDialog from "../components/order-dialog/OrderDialog";

export default function Layout() {
    return(<>
        <OrderDialog />
        <Header/>
        <main className="main_container">
            <Outlet/>
        </main>
        <Footer/>
    </>)
}