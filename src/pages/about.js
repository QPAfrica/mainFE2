import "../index.css";
import React from "react";
import Layout from "../components/Layout";
// import About1 from "../../src/assets/images/about1.png";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import { fadeIn, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Fellows = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>About - QPAfrica</title>
        <meta name="description" content="Meta Description here" />
      </Helmet>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.1 }}
        className="overflow-hidden"
      >
        <Layout>
          <HeroSection
            title={"Pioneer missionaries of the last frontier of Quant finance"}
            imgUrl="https://res.cloudinary.com/ddlupbcws/image/upload/v1698395977/9819776_12830_jsumzd_as64cm.jpg"
          />
          <motion.div variants={fadeIn("up", "teween", 0.2, 1)}>
            <About />
          </motion.div>
        </Layout>
      </motion.div>
    </>
  );
};

export default Fellows;
