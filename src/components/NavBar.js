import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ home }) => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  console.log(location.pathname);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [nav]);

  return (
    <div>
      <nav
        class={`${
          home ? "sm:bg-transparent" : "bg-gray-900"
        } border-gray-200 sm:px-4 mx-auto opacity-40 max-w-screen-lg z-10 rounded-2xl`}
      >
        <div class="container px-6 sm:px-0 flex items-center justify-between mx-auto">
          <a href="/" class="items-center ml-3">
            <span class="self-center !opacity-100 text-xl font-semibold whitespace-nowrap text-white">
              QPAfrica
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="items-center border-gray-100 block sm:hidden p-2 ml-3 text-sm text-gray-200 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
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
          {/* <div class="sm:block hidden w-full sm:w-auto" id="navbar-default">
            <div
              class={`flex flex-col p-4 mt-4 rounded-lg ${
                home ? "bg-transparent" : "bg-gray-900"
              } sm:flex-row sm:mt-0 sm:font-medium md:border-0 bg-gray-900 md:bg-transparent`}
            >
              <Link
                class={`${
                  location.pathname === "/" && "bg-gray-600 text-gray-300"
                } block mr-2 duration-300 ease-in-out py-2 pl-3 pr-4 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-300 dark:hover:bg-gray-700`}
                to="/partners"
              >
                Career
              </Link>
              <Link
                to="/about"
                className={`${
                  location.pathname === "/about" && "bg-gray-600 text-gray-300"
                } block mr-2 duration-300 ease-in-out py-2 pl-3 pr-4 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-300 dark:hover:bg-gray-700`}
              >
                About
              </Link>
            </div>
          </div> */}
        </div>
        {nav && (
          <div>
            <div
              onClick={() => setNav(false)}
              className="fixed sm:hidden inset-0 bg-gray-300/60 backdrop-blur w-full h-screen top-14 right-0 z-30"
            ></div>
            <div class="flex px-6 py-10 absolute z-30 top-10 w-full sm:hidden flex-col gap-y-3 rounded-b-lg bg-gray-900 sm:mt-0 sm:font-medium md:border-0 md:bg-gray-900">
              <Link
                to="/partners"
                class={` ${
                  location.pathname === "/" && "bg-gray-600 text-gray-300"
                } block py-2 pl-3 duration-300 ease-in-out pr-4 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-300`}
                aria-current="page"
              >
                Career
              </Link>
              <Link
                to="/about"
                class={` ${
                  location.pathname === "/about" && "bg-gray-600 text-gray-300"
                } block py-2 pl-3 pr-4 duration-300 ease-in-out rounded text-gray-300 hover:bg-gray-600 hover:text-gray-300`}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
