import React from "react";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-router-dom";
// import person1 from "../../src/assets/images/person1.webp";
// import person2 from "../../src/assets/images/person2.jpg";
// import person3 from "../../src/assets/images/person3.jpg";
// // import TeamMember from "./TeamMember";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => {
  // const members = [
  //   {
  //     id: 1,
  //     name: "Adeola Odeku",
  //     img: person1,
  //     position: "Ceo",
  //     linkeding: "linkedin",
  //   },
  //   {
  //     id: 2,
  //     name: "Adeola Odeku",
  //     img: person2,
  //     position: "Ceo",
  //     linkeding: "linkedin",
  //   },
  //   {
  //     id: 3,
  //     name: "Adeola Odeku",
  //     img: person3,
  //     position: "Ceo",
  //     linkeding: "linkedin",
  //   },
  // ];
  // const otherMembers = [
  //   {
  //     id: 1,
  //     name: "Adeola Odeku",
  //     img: person1,
  //     position: "Ceo",
  //     linkeding: "linkedin",
  //   },
  //   {
  //     id: 2,
  //     name: "Adeola Odeku",
  //     img: person2,
  //     position: "Ceo",
  //     linkeding: "linkedin",
  //   },
  //   {
  //     id: 3,
  //     name: "Adeola Odeku",
  //     img: person3,
  //     position: "Ceo",
  //     linkeding: "linkedin",
  //   },
  //   {
  //     id: 4,
  //     name: "Adeola Odeku",
  //     img: person1,
  //     position: "Ceo",
  //     linkeding: "linkedin",
  //   },
  //   {
  //     id: 5,
  //     name: "Adeola Odeku",
  //     img: person2,
  //     position: "Ceo",
  //     linkeding: "linkedin",
  //   },
  //   {
  //     id: 6,
  //     name: "Adeola Odeku",
  //     img: person3,
  //     position: "Ceo",
  //     linkeding: "linkedin",
  //   },
  // ];
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.1 }}
      className="w-full bg-black"
    >
      <div className="max-w-screen-lg px-4 mx-auto">
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex gap-10 sm:py-16 py-7 flex-col sm:flex-row">
          <motion.p
            variants={fadeIn("right", "teween", 0.2, 1)}
            className="text-gray-300 sm:w-3/5 w-full flex flex-col justify-center items-start"
          >
            <p>Bring Science to Financial Services in Africa! </p>
            <br />
            <p>
              Here, scientists apply rigorous scientific process, data science,
              and tech to help solve the last frontier of Quant finance.{" "}
            </p>
            <br />
            <p>Our Initial focus: Trading and Investment Services</p>
            <br />
            <p>
              Quantitative Investment Strategies involve using data science,
              physics-inspired algorithms and mathematical models to uncover
              hidden anomalies in the markets – inefficiencies which can be
              investment opportunities! It is an established and growing field
              in other parts of the world–except Africa. Be the pioneer
              missionary of the last frontier of Quant finance.
            </p>
          </motion.p>
          <motion.span
            className="h-56 sm:w-2/5 max-w-[330px] mx-auto"
            variants={fadeIn("left", "teween", 0.2, 1)}
          >
            <img
              src="https://res.cloudinary.com/ddlupbcws/image/upload/v1680797600/abstract4_ioad4o.jpg"
              class=" rounded-xl"
              alt="Flowbite Logo"
            />
          </motion.span>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "false", amount: 0.1 }}
          className="md:py-16 py-7 w-full flex-col md:flex-row flex"
        >
          <motion.h1
            variants={fadeIn("right", "teween", 0.2, 1)}
            className="text-2xl text-center text-white md:text-left sm:pl-2 pb-5 md:pb-0 font-bold md:w-2/6 w-full"
          >
            Impact
          </motion.h1>
          <motion.p
            variants={fadeIn("left", "teween", 0.2, 1)}
            viewport={{ once: "false" }}
            class="md:w-4/6 text-gray-300 w-full"
          >
            We'll measure success not on financial metrics alone, but by the
            impact on the broader society.
            <ul className="list-disc my-5 ml-4">
              <li className="mb-2">
                Wealth creation and preservation for Africans
              </li>
              <li className="mb-2">
                Towards more efficient Markets in Africa and the consequent
                value creation
              </li>
              <li>
                More career pathways for African scientists, data scientist, AI
                and Finance professionals
              </li>
            </ul>
          </motion.p>
          {/* <div className="flex py-3 px-4 sm:px-4 md:px-2 lg:px-20 flex-row w-full justify-between font-semibold items-center">
              <Link
                to="fellows"
                className="flex flex-row justify-center items-center mr-2"
              >
                <MdOutlineKeyboardArrowLeft size={25} />
                <p className="">Invest</p>
              </Link>
              <Link
                to=""
                className="flex flex-row justify-center font-semibold px-2 items-center mr-2"
              >
                <MdOutlineKeyboardArrowLeft size={25} />
                <p className="">Partner</p>
              </Link>
              <Link
                to=""
                className="flex flex-row justify-center font-semibold px-2 items-center mr-2"
              >
                <MdOutlineKeyboardArrowLeft size={25} />
                <p className="">Apply</p>
              </Link>
            </div> */}
        </motion.div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        {/* <div className="flex md:py-16 py-7 flex-col md:flex-row">
          <motion.h1
            variants={fadeIn("left", "teween", 0.2, 1)}
            className="text-2xl text-white md:pl-2 pb-5 pt-3 text-center md:text-left md:pb-0 font-bold md:w-2/6 w-full"
          >
            Founding Members
          </motion.h1>
          <div className="flex flex-col md:w-4/6 justify-center md:self-end">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: "false", amount: 0.1 }}
              className="grid gap-3 grid-cols-2 sm:grid-cols-3 py-3 flex-row w-full justify-between items-center"
            >
              {members.map((member, index) => (
                <motion.div
                  variants={fadeIn("left", "spring", index * 0.5, 0.75)}
                >
                  <TeamMember member={member} />
                </motion.div>
              ))}
            </motion.div>

            <motion.h1
              variants={fadeIn("left", "spring", 2.5, 0.75)}
              class="font-bold text-white py-5 text-center md:text-left text-2xl"
            >
              Other members
            </motion.h1>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: "false", amount: 0.1 }}
              className="grid gap-3 grid-cols-2 sm:grid-cols-3 py-3 flex-row w-full justify-between items-center"
            >
              {otherMembers.map((member, index) => (
                <motion.div
                  variants={fadeIn("left", "spring", index * 0.5 + 1.5, 0.75)}
                >
                  <TeamMember member={member} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div> */}
        {/* <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> */}
        {/* <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "false", amount: 0.1 }}
          className="flex md:py-16 py-7 flex-col md:flex-row"
        > */}
        {/* <motion.div
            variants={fadeIn("right", "spring", 0.2, 0.75)}
            className="w-full md:pl-2 pb-5 md:pb-0 md:w-2/6 md:text-left font-bold"
          > */}
        {/* <h1 className="text-2xl text-white">News/Press/Insight</h1> */}
        {/* </motion.div> */}
        {/* <motion.div
            variants={fadeIn("left", "spring", 0.2, 0.75)}
            className="flex flex-col md:w-4/6 justify-center"
          > */}
        {/* <h1 class="font-bold py-2 text-center md:text-left text-2xl">
                A Subtitle
              </h1> */}
        {/* <div className="flex flex-col justify-center items-center">
              <p class="py-2 text-justify text-gray-300">
                We deliver an intensive 6-month program where our software
                developers learn both full-stack software development and
                additional soft skills in an immersive environment. Through an
                agile delivery methodology, mentor matching and leadership
                modules, our elite engineers are equipped with techniques and a
                leadership mindset that enables them to work competitively in
                any team globally.
              </p>
              <div className="flex py-3 flex-row w-full justify-start font-semibold items-center">
                <Link
                  to=""
                  className="flex flex-row text-white font-semibold items-center"
                >
                  <p>Read more</p>
                  <MdOutlineKeyboardArrowRight size={25} className="mt-1" />
                </Link>
              </div>
            </div> */}
        {/* </motion.div> */}
        {/* </motion.div> */}
      </div>
    </motion.div>
  );
};

export default About;
