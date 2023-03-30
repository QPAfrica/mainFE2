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
          QuantPioneers-in-Residence (QiP) Program is a unique opportunity for
          experienced, international Quant professionals in both the Industry
          and Academia to join our team and work alongside local Quants and
          industry stakeholders in the finance and investment ecosystem in
          Africa. As a QiP, you will receive an equity share in the $1 million{" "}
          <a
            target="_blank"
            className="underline"
            href="https://workdrive.zohoexternal.com/external/5eaf33c6edd4aecbb4d79128dbe1d39935f70c30e245c163ef001ecc2bfe5b9a"
            rel="noreferrer"
          >
            QP Incubated Fund
          </a>{" "}
          and contribute your expertise in delivering consistent and superior
          returns.
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
            href="https://forms.zoho.com/ayo1/form/QiP"
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
