import { decreaseCart, increaseCart } from "../store/actions/cartActions";

const CartComponent = (props) => {
  const { product, quantity } = props;
  const totalPrice = product?.price * quantity;
  const {user , dispatch} = props;

  return (
    <div className="w-full overflow-hidden max-h-65 flex gap-20 border-1 border-[#e6e5e5] rounded-2xl p-5 ease-in duration-150 hover:border-[#37353e] bg-[#fffbfb]">
      <img
        src={product?.image}
        alt={product?.name}
        className="w-[11%] rounded-2xl object-cover"
      />
      <div className="w-inherit flex flex-col gap-10">
        <h1 className="text-4xl font-semibold text-[#37353e] ">
          {product?.name}
        </h1>
        <div className="w-inherit flex items-center gap-20">
          <h2 className="pl-4 text-4xl text-[#37353E] relative">
            <span className="absolute top-0 left-0 text-2xl text-[#37353E]">
              ₹
            </span>
            {totalPrice}
          </h2>
          <div className="flex w-1/3 -mt-1 items-center gap-4">
            <button onClick={()=> decreaseCart(product.id,user, dispatch)} className="text-6xl -mt-1.5 text-[#37353E] cursor-pointer">-</button>
            <span className="text-2xl px-3 py-2 bg-gray-300 rounded-lg text-[#37353E]">{quantity}</span>
            <button onClick={()=> increaseCart(product.id,user, dispatch)} className="text-[#37353E] -ml-1 -mt-1 text-4xl cursor-pointer">+</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
