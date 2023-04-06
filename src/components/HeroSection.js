import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const HeroSection = ({ title, imgUrl }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.1 }}
      className="px-4 h-[550px] sm:h-[500px] bg-black pt-16 sm:pt-36"
    >
      <div className="flex flex-col sm:flex-row justify-center items-center container mx-auto">
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="items-center flex flex-col justify-center w-full sm:w-1/2 text-center sm:text-left py-6 font-bold"
        >
          <h1 className="text-3xl sm:pl-48 py-8 sm:py-0 text-white">{title}</h1>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className="flex w-full sm:w-1/2 justify-center items-center sm:self-end"
        >
          <img
            src={imgUrl}
            class="w-80 h-52 sm:w-96 sm:h-64 rounded-xl"
            alt="Flowbite Logo"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
