import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("../pages/home"));
const LoginUser = lazy(() => import("../pages/user/LoginUser"));
const UserRegister = lazy(() => import("../pages/user/UserRegister"));
const CreateProducts = lazy(() => import("../pages/admin/CreateProducts"));
const ProductDetails = lazy(() => import("../pages/admin/ProductDetails"));
const UserProfile = lazy(() => import("../pages/user/UserProfile"));
const Setting = lazy(() => import("../pages/Setting"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Cart = lazy(() => import("../pages/user/Cart"));
import AuthWrapper from "./AuthWrapper";
const UnauthWrapper = lazy(() => import("./UnauthWrapper"));


const MainRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UnauthWrapper><LoginUser /></UnauthWrapper>} />
      <Route path="/register" element={<UnauthWrapper><UserRegister /></UnauthWrapper>} />
      <Route path="/admin/createProduct" element={<AuthWrapper><CreateProducts /></AuthWrapper>} />
      <Route path="/productDetails/:id" element={<AuthWrapper><ProductDetails /></AuthWrapper>} />
      <Route path="/user/userprofile" element={<AuthWrapper><UserProfile /></AuthWrapper>} />
      <Route path="/cart" element={<AuthWrapper><Cart /></AuthWrapper>} />
      <Route path="/user/setting" element={<AuthWrapper><Setting /></AuthWrapper>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
