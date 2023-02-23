import React from "react";

const Footer = ({ home }) => {
  return (
    <div className={`${home ? "absolute bottom-0 w-full" : ""} bg-gray-800`}>
      <footer class="flex text-gray-300 justify-center py-5">
        All Rights Reserved © 2023 QPAfrica.
      </footer>
    </div>
  );
};

export default Footer;
