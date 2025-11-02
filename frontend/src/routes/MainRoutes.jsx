import { Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import Products from "../pages/Products"
import LoginUser from "../pages/user/LoginUser"
import UserRegister from "../pages/user/UserRegister"


const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<UserRegister />} />
    </Routes>
  )
}

export default MainRoutes