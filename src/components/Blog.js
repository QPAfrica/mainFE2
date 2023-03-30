import React from "react";
import { Link } from "react-router-dom";
import convert from "../utils/date";
import getText from "../utils/getText";

const Blog = ({ blog }) => {
  return (
    <div className="max-w-screen-md hover:scale-105 duration-300 ease-in-out cursor-pointer mx-auto bg-gray-800 px-5 md:px-10 mb-10 rounded-lg">
      <Link
        to={{
          pathname: `/blogs/${blog._id}`,
          state: { id: blog._id, title: blog.title, desc: blog.desc },
        }}
      >
        <div className="flex gap-10 md:py-8 py-5 flex-col md:flex-row">
          <img
            src={blog.imageUrl}
            class="h-56 md:w-2/5 w-full min-w-[280px] max-w-[400px] mx-auto rounded-xl"
            alt="Flowbite Logo"
          />
          <div className=" md:w-3/5 w-full flex">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-white">{blog.title}</h1>
              <p className="text-gray-400 py-5">
                {getText(blog.desc).substring(0, 90)}
              </p>
              <p className="text-gray-300 font-medium">
                {convert(blog.createdAt)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
