import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fadeIn, navVariants, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [nav]);

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "true" }}
      class="absolute sm:top-5 left-0 right-0 justify-center py-5 sm:py-0 sm:bg-gray-800 bg-gray-900 sm:px-4 sm:mx-auto max-w-screen-lg z-10 sm:rounded-3xl"
    >
      <div class="container px-6 sm:px-0 flex items-center justify-between sm:mx-auto">
        <Link to="/" class="items-center ml-3">
          <span class="self-center text-xl font-semibold whitespace-nowrap text-white">
            QPAfrica
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="items-center border-gray-100 block sm:hidden p-2 ml-3 text-sm text-gray-200 rounded-lg focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={nav}
          onClick={() => setNav(!nav)}
        >
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="sm:block hidden w-full sm:w-auto" id="navbar-default">
          <div
            class={`flex flex-col p-4 mt-4 rounded-lg bg-transparent sm:flex-row sm:mt-0 sm:font-medium md:border-0 md:bg-transparent`}
          >
            <Link
              class={`${
                location.pathname === "/partners" && "bg-gray-600 text-gray-300"
              } block mr-2 hover:duration-300 ease-in-out py-2 pl-3 pr-4 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-300 dark:hover:bg-gray-700`}
              to="/partners"
            >
              Partner
            </Link>
            <Link
              class={`${
                location.pathname === "/contact" && "bg-gray-600 text-gray-300"
              } block mr-2 duration-300 ease-in-out py-2 pl-3 pr-4 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-300 dark:hover:bg-gray-700`}
              to="/contact"
            >
              Contact
            </Link>
            <Link
              class={`${
                location.pathname === "/blogs" && "bg-gray-600 text-gray-300"
              } block mr-2 duration-300 ease-in-out py-2 pl-3 pr-4 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-300 dark:hover:bg-gray-700`}
              to="/blogs"
            >
              Blog
            </Link>
            <Link
              class={`${
                location.pathname === "/careers" && "bg-gray-600 text-gray-300"
              } block mr-2 duration-300 ease-in-out py-2 pl-3 pr-4 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-300 dark:hover:bg-gray-700`}
              to="/partners"
            >
              Career
            </Link>
          </div>
        </div>
      </div>
      {nav && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "false", amount: 0.1 }}
        >
          <motion.div
            variants={fadeIn("down", "spring", 0.2, 0.75)}
            onClick={() => setNav(false)}
            className="fixed sm:hidden inset-0 bg-gray-300/60 backdrop-blur min-w-full min-h-screen right-0 top-16 z-30"
          ></motion.div>
          <motion.div
            variants={fadeIn("down", "spring", 0.2, 0.75)}
            class="flex px-6 py-10 absolute z-30 top-18 w-full sm:hidden flex-col gap-y-3 rounded-b-lg bg-gray-900 sm:mt-0 sm:font-medium md:border-0 sm:bg-gray-900"
          >
            <Link
              to="/partners"
              class={` ${
                location.pathname === "/partners" && "bg-gray-600 text-gray-300"
              } block py-2 pl-3 duration-300 ease-in-out pr-4 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-300`}
              aria-current="page"
            >
              Partner
            </Link>
            <Link
              to="/contact"
              class={` ${
                location.pathname === "/contact" && "bg-gray-600 text-gray-300"
              } block py-2 pl-3 pr-4 duration-300 ease-in-out rounded text-gray-300 hover:bg-gray-600 hover:text-gray-300`}
            >
              Contact
            </Link>
            <Link
              to="/blogs"
              class={` ${
                location.pathname === "/blogs" && "bg-gray-600 text-gray-300"
              } block py-2 pl-3 pr-4 duration-300 ease-in-out rounded text-gray-300 hover:bg-gray-600 hover:text-gray-300`}
            >
              Blog
            </Link>
            <Link
              to="/careers"
              class={` ${
                location.pathname === "/careers" && "bg-gray-600 text-gray-300"
              } block py-2 pl-3 pr-4 duration-300 ease-in-out rounded text-gray-300 hover:bg-gray-600 hover:text-gray-300`}
            >
              Career
            </Link>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default NavBar;
