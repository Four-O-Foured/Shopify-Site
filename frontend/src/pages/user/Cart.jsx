import { useDispatch, useSelector } from "react-redux";
import CartComponent from "../../components/CartComponent";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.products.data);
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const render = user?.cart.map((item) => item.quantity > 0 && <CartComponent key={item.productId} user={user} dispatch={dispatch} navigate={navigate} product={products?.find((product) => product.id === item.productId)} quantity={item.quantity} />);

  return <div className="w-full flex mt-10 flex-col gap-20">
    {render[0] ? render : <h1 className="text-4xl text-[#37353E]">Your cart is empty....</h1>}
  </div>;
};

export default Cart;
