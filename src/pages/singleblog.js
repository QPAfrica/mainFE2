import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";
//import imgUrl from "../../src/assets/images/hero.jpeg";
import { Helmet } from "react-helmet";
import axios from "axios";
import convert from "../utils/date";
import getText from "../utils/getText";

const Singleblog = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://qp-africa-api.vercel.app/api/post/${pathId}`
        );
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [pathId]);

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>Blog - QPAfrica</title>
        <meta name="description" content="Meta Description here" />
      </Helmet>
      <Layout>
        <div className="px-4 bg-gray-900 py-16 w-full sm:pt-36 sm:pb-16">
          <div className="max-w-screen-md mx-auto">
            <h1 className="text-3xl font-bold py-8 sm:py-0 text-white">
              {post?.title}
            </h1>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <p className="text-gray-200 font-medium justify-end flex">
              {convert(post?.createdAt)}
            </p>
            <img
              src={post?.imageUrl}
              class="my-5 sm:my-10 max-w-full mx-auto rounded-xl"
              alt="Featured"
            />
            {/* <h2 className="text-xl font-bold py-2 text-white">
              How QP Africa will affect the Quant Industry Worldwide
            </h2>
            <a
              href="/"
              className="text-xs text-white hover:underline duration-200 sm:text-base"
            >
              Some link here
            </a>
            <button class="bg-gray-800 my-2 flex hover:bg-gray-700 duration-200 text-white py-2 px-4 rounded">
              Button
            </button>
            <img
              src={imgUrl}
              class="my-5 sm:my-10 max-w-sm mx-auto rounded-xl"
              alt="Flowbite Logo"
            /> */}
            <p className="text-gray-400 py-1">{getText(post?.desc)}</p>
            {/* <p className="text-gray-400 py-1">
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
            </p> */}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Singleblog;
