import { useSelector } from "react-redux";
import React from "react";
const RenderProducts = React.lazy(() => import("../components/RenderProducts"));
import InfiniteScroll from "react-infinite-scroll-component";
import { Suspense, useEffect, useState } from "react";
import axios from "../APIs/axios";

const home = () => {
  const [products, setproducts] = useState([]);
  const user = useSelector((state) => state.users.user);
  const [hasMore, sethasMore] = useState(true);

  const fetchMoreData = async () => {
    try {
      const { data } = await axios.get(
        `/products?_start=${products?.length}&_limit=9`
      );

      if (data.length == 0) {
        sethasMore(false);
      } else {
        sethasMore(true);
      }
      setproducts([...products, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  const render = products?.map((product) => (
    <Suspense
      key={product.id}
      fallback={
        <h1 className="text-4xl text-[#37353E]">
          Loading<span className="animate-ping">. . .</span>
        </h1>
      }
    >
      <RenderProducts product={product} key={product.id} user={user} />
    </Suspense>
  ));

  return (
    <InfiniteScroll
      dataLength={products?.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={
        <h1 className="text-4xl text-[#37353E]">
          Loading<span className="animate-ping">. . .</span>
        </h1>
      }
      style={{ overflow: "hidden" }}
      endMessage={
        <h1 className="text-4xl mt-15 text-[#37353E]">
          No more products, you've seen it all.
        </h1>
      }
    >
      <div className="flex flex-wrap mt-10 gap-20">
        <Suspense
          fallback={
            <h1 className="text-4xl text-[#37353E]">
              Loading<span className="animate-ping">. . .</span>
            </h1>
          }
        >
          {render}
        </Suspense>
      </div>
    </InfiniteScroll>
  );
};
export default home;
