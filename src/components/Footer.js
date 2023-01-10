import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = ({ home }) => {
  return (
    <div className={`${home ? "" : "bg-gray-900"}`}>
      <footer class="p-5 container mx-auto rounded-lg shadow flex flex-col sm:flex-row items-center justify-between sm:p-6">
        <span class="text-sm text-gray-300 pb-3 sm:pb-0 text-center">
          All Rights Reserved © 2023{" "}
          <a href="/" class="hover:underline">
            QP.Africa.
          </a>
        </span>
        <div class="flex items-center justify-center text-sm text-gray-300 sm:mt-0">
          <a href="/" class="mr-4 hover:underline md:mr-6">
            <BsLinkedin size={18} />
          </a>
          <a href="/" class="mr-4 hover:underline md:mr-6 ">
            <BsTwitter size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
