import { useNavigate } from "react-router-dom";
import { cartHandler } from "../store/actions/cartActions";
import { useDispatch } from "react-redux";

const RenderProducts = (props) => {
  const { image, name, price, category, id } = props.product;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      key={id}
      className="w-1/5 max-h-[35%] rounded-2xl border-1 border-[#e6e5e5] flex flex-col justify-between gap-2 hover:shadow-xl p-5 hover:scale-105 ease-in duration-150 relative"
    >
      <div
        className="flex flex-col gap-2 w-full"
        onClick={() => navigate(`/productDetails/${id}`)}
      >
        <img
          src={image}
          alt={name}
          className="w-full rounded-2xl object-cover"
        />
        <h1 className="text-2xl text-[#37353E] font-semibold">{name}</h1>
        <small className="text-[#37353E] leading-4">{category}</small>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="pl-4 text-2xl text-[#37353E] relative">
          <span className="absolute top-0 left-0 text-xl text-[#37353E]">
            ₹
          </span>{" "}
          {price}
        </h2>
        <button
          onClick={() => cartHandler(id, props.user, dispatch )}
          className="p-2 bg-amber-200 border-2 ease-in duration-150 border-amber-200 rounded-xl hover:text-[#27391C] hover:font-semibold hover:border-[#27391C] "
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default RenderProducts;
