import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../store/actions/productActions";
import { nanoid } from "nanoid";

const CreateProducts = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const formSubmit = (product) => {
    navigate("/products");
    product.id = nanoid();

    dispatch(asyncCreateProduct(product));

    reset();
  };

  return (
    <div className="mt-20">
      <form onSubmit={handleSubmit(formSubmit)}>
        <input
          className="text-4xl p-3 block w-1/2 text-[#37353E] font-semibold outline-none border-b-2 border-[#e6e5e5] focus:border-b-2 focus:border-[#37353E]"
          {...register("image", { required: "Image is required" })}
          type="url"
          placeholder="Paste the image link here"
        />
        <p className="text-red-400 my-1">{errors.image?.message}</p>
        <input
          className="text-4xl w-1/2 p-3 block mt-15 text-[#37353E] border-b-2 border-[#e6e5e5]  font-semibold outline-none focus:border-b-2 focus:border-[#37353E] "
          {...register("name", { required: "Name of the product is required" })}
          type="text"
          placeholder="Product Name"
        />
        <p className="text-red-400 my-1">{errors.name?.message}</p>
        <input
          className="text-4xl w-1/2 p-3 block mt-15 text-[#37353E] border-b-2 border-[#e6e5e5]  font-semibold outline-none focus:border-b-2 focus:border-[#37353E] "
          {...register("price", { required: "Product price is required" })}
          type="number"
          placeholder="Product Price in Rs."
        />
        <p className="text-red-400 my-1">{errors.price?.message}</p>

        <input
          className="text-4xl w-1/2 p-3 block mt-15 text-[#37353E] border-b-2 border-[#e6e5e5]  font-semibold outline-none focus:border-b-2 focus:border-[#37353E] "
          {...register("category", { required: "Product category is required" })}
          type="text"
          placeholder="Product category"
        />
        <p className="text-red-400 my-1">{errors.category?.message}</p>

        <textarea
          className="text-4xl p-3 block mt-15 w-1/2 text-[#37353E] border-b-2 border-[#e6e5e5] font-semibold outline-none focus:border-b-2 focus:border-[#37353E]"
          {...register("description", { required: "Description is required" })}
          placeholder="Description of the product"
        />
        <p className="text-red-400 my-1">{errors.description?.message}</p>
        <div className="flex mt-18 gap-8 items-center">
          <button
            className="text-2xl py-3 px-5 font-semibold border-[#adadad] border-2 rounded-xl text-[#37353E] hover:border-[#37353E] active:scale-95"
            type="submit"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProducts;
