import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import LoginUser from "../pages/user/LoginUser";
import UserRegister from "../pages/user/UserRegister";
import CreateProducts from "../pages/admin/CreateProducts";
import ProductDetails from "../pages/admin/ProductDetails";
import UserProfile from "../pages/user/UserProfile";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginUser />} />
      <Route path="/register" element={<UserRegister />} />
      <Route path="/admin/createProduct" element={<CreateProducts />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
      <Route path="/user/userprofile" element={<UserProfile />} />
    </Routes>
  );
};

export default MainRoutes;
