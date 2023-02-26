import React from "react";
import Layout from "../components/Layout";
import imgUrl from "../../src/assets/images/hero.jpeg";
import Blog from "../components/Blog";

const blogs = [
  {
    id: 1,
    title: "How QP Africa will affect the Quant Industry Worldwide",
    desc: `Lorem ipsum dolor sit amet consectetur. Faucibus est ultrices
    sagittis eu. At morbi aliquet imperdiet elit ipsum egestas nunc
    volutpat massa. Interdum phasellus feugiat sit feugiat auctor
    placerat ac.`,
    img: imgUrl,
    date: "15th May, 2023",
  },
  {
    id: 2,
    title: "How QP Africa will affect the Quant Industry Worldwide",
    desc: `Lorem ipsum dolor sit amet consectetur. Faucibus est ultrices
    sagittis eu. At morbi aliquet imperdiet elit ipsum egestas nunc
    volutpat massa. Interdum phasellus feugiat sit feugiat auctor
    placerat ac.`,
    img: imgUrl,
    date: "15th May, 2023",
  },
];

const blog = () => {
  return (
    <div>
      <Layout>
        <div className="px-4 bg-gray-900 pt-16 w-full sm:pt-36">
          <div className="max-w-screen-lg mx-auto">
            <h1 className="text-3xl font-bold py-8 sm:py-0 text-white">Blog</h1>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          <div className="py-10">
          {blogs.map((blog) => (
            <Blog blog={blog} />
          ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default blog;
