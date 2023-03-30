import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
//import imgUrl from "../../src/assets/images/hero.jpeg";
import Blog from "../components/Blog";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { Helmet } from "react-helmet";
import axios from "axios";

// const blogs = [
//   {
//     id: 1,
//     title: "How QP Africa will affect the Quant Industry Worldwide",
//     desc: `Lorem ipsum dolor sit amet consectetur. Faucibus est ultrices
//     sagittis eu. At morbi aliquet imperdiet elit ipsum egestas nunc
//     volutpat massa. Interdum phasellus feugiat sit feugiat auctor
//     placerat ac.`,
//     img: imgUrl,
//     date: "15th May, 2023",
//   },
//   {
//     id: 2,
//     title: "How QP Africa will affect the Quant Industry Worldwide",
//     desc: `Lorem ipsum dolor sit amet consectetur. Faucibus est ultrices
//     sagittis eu. At morbi aliquet imperdiet elit ipsum egestas nunc
//     volutpat massa. Interdum phasellus feugiat sit feugiat auctor
//     placerat ac.`,
//     img: imgUrl,
//     date: "15th May, 2023",
//   },
// ];

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://qp-africa-api.vercel.app/api/post"
        );
        setBlogs(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>Blogs - QPAfrica</title>
        <meta name="description" content="Meta Description here" />
      </Helmet>
      <Layout>
        <div className="px-4 bg-gray-900 pt-16 w-full sm:pt-36">
          <div className="max-w-screen-lg mx-auto">
            <h1 className="text-3xl font-bold py-8 sm:py-0 text-white">Blog</h1>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: "false", amount: 0.25 }}
            className="py-10"
          >
            {blogs.map((blog, index) => (
              <Blog blog={blog} />
            ))}
          </motion.div>
        </div>
      </Layout>
    </div>
  );
};

export default Blogs;
