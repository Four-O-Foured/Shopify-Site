import { useDispatch, useSelector } from "react-redux";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";
import { useEffect } from "react";
import { asyncUserDets } from "./store/actions/userAction";
import { asyncLoadProduct } from "./store/actions/productActions";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const user = useSelector((state) => state.users.user);

  useEffect(() => {
    !user && dispatch(asyncUserDets());
  }, [user]);
  useEffect(() => {
    products?.length == 0 || !products &&  dispatch(asyncLoadProduct());
  }, [products?.length]);
  return (
    <div className="max-w-screen bg-[#FFFDF6]">
      <div className="w-full px-[8%] py-3">
        <Nav />
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
