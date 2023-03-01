import "../index.css";
import React from "react";
import Layout from "../components/Layout";
import hero from "../../src/assets/images/hero.jpeg";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import { fadeIn, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";

const Fellows = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.1 }}
      className="overflow-hidden"
    >
      <Layout>
        <HeroSection title={"A Subtitle from Fellows"} imgUrl={hero} />
        <motion.div variants={fadeIn("up", "teween", 0.2, 1)}>
          <About />
        </motion.div>
      </Layout>
    </motion.div>
  );
};

export default Fellows;
