import logo from "../logo.svg";
import React, { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div>
      <nav class="bg-gray-900 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex items-center justify-between mx-auto">
          <a href="/" class="flex items-center">
            <img src={logo} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-white">
              QP. Africa
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="items-center block sm:hidden p-2 ml-3 text-sm text-gray-200 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
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
            <ul class="flex flex-col p-4 mt-4 rounded-lg bg-gray-900 sm:flex-row sm:mt-0 sm:font-medium md:border-0 md:bg-gray-900">
              <li>
                <a
                  href="/"
                  class="block py-2 pl-3 pr-4 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-300 dark:hover:bg-gray-700"
                  aria-current="page"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  class="block py-2 pl-3 pr-4 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-300 dark:hover:bg-gray-700"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
        {nav && (
          <ul class="flex sm:hidden flex-col gap-y-3 p-4 mt-4 rounded-lg bg-gray-900 sm:mt-0 sm:font-medium md:border-0 md:bg-gray-900">
            <li>
              <a
                href="/"
                class="block py-2 pl-3 pr-4 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-300 dark:hover:bg-gray-700"
                aria-current="page"
              >
                Career
              </a>
            </li>
            <li>
              <a
                href="/about"
                class="block py-2 pl-3 pr-4 rounded text-gray-300 hover:bg-gray-600 hover:text-gray-300 dark:hover:bg-gray-700"
              >
                About
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
