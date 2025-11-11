import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncDeleteProduct,
  asyncUpdateProduct,
} from "../../store/actions/productActions";

const ProductDetails = () => {
  const { id } = useParams();

  const {
    products: { data },
    users: { user },
  } = useSelector((state) => state);

  console.log(user);

  const product = data?.find((product) => product.id == id);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: product?.image,
      name: product?.name,
      category: product?.category,
      price: product?.price,
      description: product?.description,
    },
  });
  const navigate = useNavigate();
  const deleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigate("/products");
  };

  const formSubmit = (product) => {
    dispatch(asyncUpdateProduct(id, product));
  };

  return (
    product && (
      <>
        <div className="w-full bg-[#FFFDF6] pt-8 overflow-x-hidden">
          <div className="flex flex-col md:flex-row ">
            <div className="w-full md:w-1/4">
              <img
                src={product?.image}
                alt={product?.name}
                className="w-full object-cover"
              />
            </div>

            <div className="w-full md:w-3/4 p-5 flex flex-col gap-5 min-w-0">
              <h1 className="text-5xl text-[#37353E] font-thin break-words">
                {product?.name}
              </h1>

              <p className="text-sm text-[#37353E] break-words">
                {product?.category}
              </p>

              <h2 className="pl-4 text-4xl text-[#37353E] relative">
                <span className="absolute top-0 left-0 text-2xl text-[#37353E]">
                  ₹
                </span>
                {product?.price}
              </h2>

              <div className="h-[1px] mt-5 bg-[#37353E]" />

              <p className="text-3xl font-thin break-words">
                {product?.description}
              </p>
            </div>
          </div>
          {user && user?.isAdmin && (
            <>
              <div className="h-[1px] mt-12 bg-[#37353E]"></div>
              <div className="mt-20">
                <form onSubmit={handleSubmit(formSubmit)} className="w-full">
                  <input
                    className="text-4xl p-3 text-[#37353E] font-semibold outline-none border-b-2 border-[#e6e5e5] w-full focus:border-b-2 focus:border-[#37353E] break-words"
                    {...register("image", { required: "Image is required" })}
                    type="url"
                    placeholder="Paste the image link here"
                  />
                  <p className="text-red-400 my-1">{errors.image?.message}</p>

                  <input
                    className="text-4xl  p-3 mt-16 text-[#37353E] border-b-2 border-[#e6e5e5] w-full font-semibold outline-none focus:border-b-2 focus:border-[#37353E] break-words"
                    {...register("name", {
                      required: "Name of the product is required",
                    })}
                    type="text"
                    placeholder="Product Name"
                  />
                  <p className="text-red-400 my-1">{errors.name?.message}</p>

                  <input
                    className="text-4xl p-3 mt-16 text-[#37353E] border-b-2 border-[#e6e5e5] w-full font-semibold outline-none focus:border-b-2 focus:border-[#37353E]"
                    {...register("price", {
                      required: "Product price is required",
                    })}
                    type="number"
                    placeholder="Product Price in Rs."
                  />
                  <p className="text-red-400 my-1">{errors.price?.message}</p>

                  <input
                    className="text-4xl p-3 mt-16 text-[#37353E] border-b-2 border-[#e6e5e5] w-full font-semibold outline-none focus:border-b-2 focus:border-[#37353E] break-words"
                    {...register("category", {
                      required: "Product category is required",
                    })}
                    type="text"
                    placeholder="Product category"
                  />
                  <p className="text-red-400 my-1">
                    {errors.category?.message}
                  </p>

                  <textarea
                    className="text-4xl p-3 mt-16 h-80 text-[#37353E] border-b-2 border-[#e6e5e5] w-full font-semibold outline-none focus:border-b-2 focus:border-[#37353E] break-words"
                    {...register("description", {
                      required: "Description is required",
                    })}
                    placeholder="Description of the product"
                  />
                  <p className="text-red-400 my-1">
                    {errors.description?.message}
                  </p>

                  <div className="flex mt-16 gap-8 items-center">
                    <button
                      className="text-2xl py-3 px-5 font-semibold border-[#adadad] border-2 rounded-xl text-[#37353E] hover:text-[#e6e5e5] hover:border-emerald-500 hover:bg-[#27391C] ease-in duration-150 active:scale-95"
                      type="submit"
                    >
                      Update Product
                    </button>

                    <button
                      onClick={deleteHandler}
                      className="text-2xl py-3 px-5 font-semibold border-[#adadad] border-2 ease-in duration-150 rounded-xl text-[#37353E] hover:bg-rose-500 hover:border-[#37353E] active:scale-95"
                    >
                      Delete Product
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </>
    )
  );
};

export default ProductDetails;
