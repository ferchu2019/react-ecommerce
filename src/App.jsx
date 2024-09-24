import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import About from "./pages/about/About";
import Register from "./pages/register/Register";
import AdminProduct from "./pages/admin-product/AdminProduct"
import ProductDetail from "./pages/product-detail/ProductDetail";
import OrderDialog from "./components/order-dialog/OrderDialog";
import AdminUser from "./pages/admin-user/AdminUser";

export default function App() {
 
  return (
    <>
    <OrderDialog />
    <Header />
    <main className="main_container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product-detail/:id" element={<ProductDetail/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="admin-product" element={<AdminProduct/>}/>
        <Route path="admin-user" element={<AdminUser/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </main>
    <Footer />
    </>
  )
}

