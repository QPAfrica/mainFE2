import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="max-w-screen-md mx-auto bg-gray-800 px-5 sm:px-10 mb-10 rounded-lg">
      <div className="flex gap-10 sm:py-8 py-5 flex-col sm:flex-row">
        <img
          src={blog.img}
          class="h-56 sm:w-2/5 w-full min-w-[280px] max-w-[380px] mx-auto rounded-xl"
          alt="Flowbite Logo"
        />
        <div className=" sm:w-3/5 w-full flex justify-center">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-white">{blog.title}</h1>
            <p className="text-gray-400 py-5">{blog.desc}</p>
            <p className="text-gray-300 font-medium">{blog.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
