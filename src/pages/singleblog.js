import React from "react";
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";
import imgUrl from "../../src/assets/images/hero.jpeg";

const Singleblog = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <Layout>
        <div className="px-4 bg-gray-900 py-16 w-full sm:pt-36 sm:pb-16">
          <div className="max-w-screen-md mx-auto">
            <h1 className="text-3xl font-bold py-8 sm:py-0 text-white">
              How QP Africa will affect the Quant Industry Worldwide
            </h1>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <p className="text-gray-200 font-medium justify-end flex">15th May, 2023</p>
            <img
              src={imgUrl}
              class="my-5 sm:my-10 max-w-full mx-auto rounded-xl"
              alt="Flowbite Logo"
            />
            <p className="text-gray-400 py-1">
              Lorem ipsum dolor sit amet consectetur. Faucibus est ultrices
              sagittis eu. At morbi aliquet imperdiet elit ipsum egestas nunc
              volutpat massa. Interdum phasellus feugiat sit feugiat auctor
              placerat ac. Lorem ipsum dolor sit amet consectetur. Faucibus est
              ultrices sagittis eu. At morbi aliquet imperdiet elit ipsum
              egestas nunc volutpat massa. Interdum phasellus feugiat sit
              feugiat auctor placerat ac. Lorem ipsum dolor sit amet
              consectetur.
            </p>
            <p className="text-gray-400 py-1">
              Lorem ipsum dolor sit amet consectetur. Faucibus est ultrices
              sagittis eu. At morbi aliquet imperdiet elit ipsum egestas nunc
              volutpat massa. Interdum phasellus feugiat sit feugiat auctor
              placerat ac. Lorem ipsum dolor sit amet consectetur. Faucibus est
              ultrices sagittis eu. At morbi aliquet imperdiet elit ipsum
              egestas nunc volutpat massa. Interdum phasellus feugiat sit
              feugiat auctor placerat ac. Lorem ipsum dolor sit amet
              consectetur. Faucibus est ultrices sagittis eu. At morbi aliquet
              imperdiet elit ipsum egestas nunc volutpat massa. Interdum
              phasellus feugiat sit feugiat auctor placerat ac. Lorem ipsum
              dolor sit amet consectetur. Faucibus est ultrices sagittis eu. At
              morbi aliquet imperdiet elit ipsum egestas nunc volutpat massa.
              Interdum phasellus feugiat sit feugiat auctor placerat ac.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Singleblog;
