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
        <p class="py-2 text-gray-300">{data.text}</p>
        <ul className="list-disc text-gray-300 ml-4">
          <li className="mb-2">
            The Residency will last for a period of 12 months, during which time
            you will receive an equity share in the $1 million{" "}
            <a
              target="_blank"
              className="underline"
              href="https://workdrive.zohoexternal.com/external/5eaf33c6edd4aecbb4d79128dbe1d39935f70c30e245c163ef001ecc2bfe5b9a"
              rel="noreferrer"
            >
              QP Incubated Fund
            </a>
          </li>
          <li className="mb-2">
            During the program, you’ll have the opportunity to work on novel and
            cutting-edge research projects with other QiPs, our team and local
            partners. At the end of the program, there may be opportunities to
            continue working with us as a full-time team member.
          </li>
          <li className="mb-2">
            Expert Residencies: as an experienced Quant professional, you
            collaborate with academic researchers and students; together,
            sharing practical insights and industry knowledge to help pioneer
            the Quant field in Africa.
          </li>
          <li className="mb-2">
            Industry-Academia Partnership: collaboration with industry leaders
            and top academic institutions to chart the course for quantitative
            finance in Africa.
          </li>
          <li className="mb-2">
            Cutting-Edge Research: participate in innovative research projects
            that align with local industry needs and have the potential to
            revolutionize the way quantitative methods are applied in finance in
            Africa.
          </li>
          <li className="mb-2">
            Networking Opportunities: engage with industry peers, academics,
            stakeholder and thought leaders, and develop a robust professional
            international network.
          </li>
          <li className="mb-2">
            Virtual Residency: The Program is Conducted Remotely
          </li>
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
