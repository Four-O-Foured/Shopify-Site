import { useSelector } from "react-redux";
import RenderProducts from "../components/RenderProducts";

const home = () => {
  const products = useSelector((state) => state.products.data);
  

  
  


  const render = products?.map((product) => (
    <RenderProducts product={product} key={product.id} />
  ));

  return products?.length > 0 ? (
    <div className="flex gap-12 flex-wrap w-full h-min-screen">{render}</div>
  ) : (
    <h1 className="text-4xl text-[#37353E]">
      Loading...
    </h1>
  );
};
export default home;