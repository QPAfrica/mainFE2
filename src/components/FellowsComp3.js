import React from "react";
// import { Link as RLink } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { fadeIn, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";

const FellowsComp = ({ data }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.1 }}
    >
      <motion.div
        variants={fadeIn("down", "spring", 0.2, 0.75)}
        className="py-5"
      >
        <h1 className="text-3xl py-3 font-bold">{data.title}</h1>
        <p class="py-2 text-gray-300">
          <p>
            To apply, please submit your application and any relevant supporting
            materials{" "}
            <a
              target="_blank"
              className="underline"
              href="https://forms.zoho.com/ayo1/form/QiP"
              rel="noreferrer"
            >
              here
            </a>{" "}
            by the deadline of May 31, 2023. We will review all applications and
            contact shortlisted candidates for interviews.
          </p>
          <br />
          <p>
            Thank you for your interest in the Quant in Residence Program, and
            we look forward to receiving your application.
          </p>
        </p>
        <ul className="list-disc">
          {data.list.map((list) => (
            <li className="mb-2">{list}</li>
          ))}
        </ul>
        <div className="flex justify-end py-2 font-semibold items-center">
          <a
            target="_blank"
            className="flex flex-row justify-center items-center mr-2"
            href="https://forms.zohopublic.com/ayo1/form/QiP/formperma/urfsIbYmEMWzebydWlSNSIM1h4x3GKLiZLucQXEGGPo"
            rel="noreferrer"
          >
            Apply
          </a>
          <MdOutlineKeyboardArrowRight size={25} className="mt-1" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FellowsComp;
