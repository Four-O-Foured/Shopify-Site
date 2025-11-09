import { Link } from "react-router-dom";

const RenderProducts = (props) => {
    const {image,name,price,category,id,description} = props.product;
    
  return (
    <Link to = {`/productDetails/${id}`} key={id} className="w-1/5 h-[35%] rounded-2xl flex flex-col gap-2 shadow-xl p-5 hover:scale-105 ease-in duration-150 relative">
        <img src={image} alt={name} className="w-full rounded-2xl object-cover" />
        <h1 className="text-2xl text-[#37353E] font-semibold">{name}</h1>
        <small className="text-[#37353E] leading-4">{category}</small>
       <div className="flex justify-between">
         <h2 className="pl-4 text-2xl text-[#37353E] relative"><span className="absolute top-0 left-0 text-xl text-[#37353E]">₹</span> {price}</h2>
         <p className="p-2 bg-amber-200 rounded-xl">Add to cart</p>
       </div>
    </Link>
  )
}

export default RenderProducts