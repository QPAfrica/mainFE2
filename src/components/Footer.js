import React from "react";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";

const Footer = ({ home }) => {
  return (
    <motion.div
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${home ? "absolute bottom-0 w-full" : ""} bg-gray-800`}
    >
      <footer class="flex text-gray-300 justify-center py-5">
        All Rights Reserved © 2023 QPAfrica.
      </footer>
    </motion.div>
  );
};

export default Footer;
