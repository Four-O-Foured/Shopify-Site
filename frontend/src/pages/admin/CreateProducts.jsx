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
    <div className="max-w-screen mt-20">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col max-w-screen relative"
      >
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-circle-line absolute text-5xl cursor-pointer -top-20 -left-15"
        ></i>
        <p className="text-[#27391C] my-3 text-2xl leading-none font-semibold ">
          Image Url
        </p>
        <input
          className="text-3xl p-3 block w-full text-[#37353E] font-thin outline-none border-b-2 border-[#e6e5e5] focus:border-b-2 focus:border-[#37353E] "
          {...register("image", { required: "Image is required" })}
          type="url"
          placeholder="Paste the image link here"
        />
        <p className="text-red-400 my-1">{errors.image?.message}</p>
        <p className="text-[#27391C] text-2xl leading-none font-semibold mt-10 mb-3">
          Product Name
        </p>
        <input
          className="text-3xl w-full p-3 block text-[#37353E] border-b-2 border-[#e6e5e5]  font-thin outline-none focus:border-b-2 focus:border-[#37353E] "
          {...register("name", { required: "Name of the product is required" })}
          type="text"
          placeholder="Product Name"
        />
        <p className="text-red-400 my-1">{errors.name?.message}</p>
        <p className="text-[#27391C] text-2xl leading-none font-semibold mt-10 mb-3">
          Product Price
        </p>
        <input
          className="text-3xl w-full p-3 block text-[#37353E] border-b-2 border-[#e6e5e5]  font-thin outline-none focus:border-b-2 focus:border-[#37353E] "
          {...register("price", { required: "Product price is required" })}
          type="number"
          placeholder="Product Price in Rs."
        />
        <p className="text-red-400 my-1">{errors.price?.message}</p>
        <p className="text-[#27391C] text-2xl leading-none font-semibold mt-10 mb-3">
          Product Category
        </p>

        <input
          className="text-3xl w-full p-3 block text-[#37353E] border-b-2 border-[#e6e5e5]  font-thin outline-none focus:border-b-2 focus:border-[#37353E] "
          {...register("category", {
            required: "Product category is required",
          })}
          type="text"
          placeholder="Product category"
        />
        <p className="text-red-400 my-1">{errors.category?.message}</p>
        <p className="text-[#27391C] text-2xl leading-none font-semibold mt-10 mb-3">
          About Product
        </p>

        <textarea
          className="text-3xl p-3 block w-full text-[#37353E] border-b-2 border-[#e6e5e5] font-thin outline-none focus:border-b-2 focus:border-[#37353E]"
          {...register("description", { required: "Description is required" })}
          placeholder="Description of the product"
        />
        <p className="text-red-400 my-1">{errors.description?.message}</p>
        <div className="flex mt-5 gap-8 items-center">
          <button
            className="text-2xl py-3 px-5 font-semibold border-[#e6e5e5] border-2 animate-in duration-150 rounded-xl text-[#37353E] hover:border-[#27391C] hover:shadow-xl hover:scale-105 active:scale-95"
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
