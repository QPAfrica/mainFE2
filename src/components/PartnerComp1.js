import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const PartnerComp = ({ data }) => {
  console.log(data);
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.1 }}
      className="p-5 mb-10 sm:mb-16"
    >
      <motion.div
        variants={fadeIn("down", "spring", 0.2, 0.75)}
        className="flex gap-10 md:py-8 py-5 flex-col md:flex-row"
      >
        <div className="md:w-2/5 w-full flex items-center justify-center min-w-[280px] max-w-[400px] mx-auto rounded-xl">
          <img src={data?.img} alt="partner" class="rounded-xl" />
        </div>
        <div className="md:w-3/5 w-full flex justify-center">
          <div className="flex flex-col">
            <h1 className="text-3xl pb-3">{data.name}</h1>
            <p class="py-2 text-gray-400">
              <p>
                Bring together Quant finance professionals and academic
                researchers to tackle real-world investment challenges and
                inspire the next generation of Quants and startups in Africa.
              </p>
              <br />
              <p>
                Together, we will work to develop cutting-edge quantitative and
                data science solutions for businesses in the financial service
                industry. By collaborating, we can combine industry and local
                expertise with academic research to develop solutions that are
                both practical and innovative.
              </p>
              <br />
              <p>
                As part of this collaboration, we will provide access to real
                world data, business use-cases, and opportunity to work on novel
                Quant pristine markets (Africa). We believe that academic
                research and collaboration are essential to the advancement of
                the industry and are committed to working closely with our
                partners to develop joint research projects and publications.
              </p>
              <br />
              <p>
                We invite academic institutions to join us in shaping the future
                of Quant finance in Africa through this collaboration. Please
                contact us to learn more about how we can work together to make
                a real difference in the last frontier of Quant finance.
              </p>
            </p>
            {data.addlink && (
              <div className="flex py-2 font-semibold items-center">
                <Link
                  to={data.addlink}
                  target={"_blank"}
                  className="flex flex-row justify-center items-center mr-2"
                >
                  {data.name === "Industry" ? (
                    <a
                      href="mailto:hello@qpafrica.com"
                      className="text-xs sm:text-base"
                    >
                      Contact us
                    </a>
                  ) : (
                    <a
                      href="mailto:hello@qpafrica.com"
                      className="text-xs sm:text-base"
                    >
                      Contact us
                    </a>
                  )}
                  <MdOutlineKeyboardArrowRight className="pt-1" size={25} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PartnerComp;
