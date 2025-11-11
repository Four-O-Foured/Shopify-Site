import { useDispatch } from "react-redux";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";
import { useEffect } from "react";
import { asyncUserDets } from "./store/actions/userAction";
import { asyncLoadProduct } from "./store/actions/productActions";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncUserDets());
    dispatch(asyncLoadProduct());
  }, []);
  return (
    <div className="w-max-screen h-min-screen bg-[#FFFDF6]">
      <div className=" px-[8%] py-3">
        <Nav />
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
