import "../index.css";
import React from "react";
import Layout from "../components/Layout";
// import fellows from "../../src/assets/images/fellows.png";
import TabComponent from "../components/TabComponent";
import HeroSection from "../components/HeroSection";
import FellowsComp from "../components/FellowsComp";
import FellowsComp1 from "../components/FellowsComp1";
import FellowsComp2 from "../components/FellowsComp2";
import FellowsComp3 from "../components/FellowsComp3";
// import Fellowship from "../components/Fellowship";
import { fadeIn, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Fellows = () => {
  const totalData = [
    {
      id: 1,
      name: "About",
      title: "About",
      text: `QuantPioneers-in-Residence (QiP) Program is a unique opportunity for experienced, international Quant professionals in both the Industry and Academia to join our team and work alongside local Quants and industry stakeholders in the finance and investment ecosystem in Africa. As a QiP, you will receive an equity share in the $1 million QP Incubated Fund and contribute your expertise in delivering consistent and superior returns.`,
      list: [],
      link: "#about",
    },
    {
      id: 2,
      name: "program_structure",
      title: "Program Structure",
      text: `Key features of the QiP Program include:
      `,
      list: [],
      link: "#eligibility",
    },
    {
      id: 3,
      name: "ideal_candidate",
      title: "Ideal Candidate",
      text: `This program is designed for experienced Quant professionals in both the Industry and Academia who would like to help pioneer the Quant Industry in Africa.`,
      list: [
        "International industry professionals and academia who want to work on novel data and Quant-pristine economies",
        "Industry professionals with strong experience applying mathematical models and quantitative finance in the real world settings.",
        "Academic or/and researcher in quantitative fields such as mathematics, physics, computer science, machine learning, engineering, or finance.",
        "Mentor and Collaborator: ideal candidates should be willing to mentor young talented local Quant pioneers, fostering their growth and development in the field. In addition, you should be open to collaborating with other QiPs and local stakeholders.",
        "Can contribute 10-20 hours per week to the program.",
      ],
      link: "#selection",
    },
    {
      id: 4,
      name: "apply",
      title: "Apply",
      text: `To apply, please submit your application and any relevant supporting materials  here  by the deadline of May 31, 2023. We will review all applications and contact shortlisted candidates for interviews. Thank you for your interest in the Quant in Residence Program, and we look forward to receiving your application.`,
      list: [],
      link: "#apply",
    },
  ];

  const data = [
    {
      id: 1,
      name: "About",
      link: "#about",
      content: <FellowsComp data={totalData[0]} />,
    },
    {
      id: 2,
      name: "Program Structure",
      link: "#eligibility",
      content: <FellowsComp1 data={totalData[1]} />,
    },
    {
      id: 3,
      name: "Ideal Candidate",
      link: "#selection",
      content: <FellowsComp2 data={totalData[2]} />,
    },
    {
      id: 4,
      name: "Apply",
      link: "#apply",
      content: <FellowsComp3 data={totalData[3]} />,
    },
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Fellows - QPAfrica</title>
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
            title={
              "An invitation to pioneer the last frontier of Quant investing!"
            }
            imgUrl="https://res.cloudinary.com/ddlupbcws/image/upload/v1680800158/WhatsApp_Image_2023-04-06_at_17.36.40-removebg-preview_jlx3p9.png"
          />
          <motion.div variants={fadeIn("up", "teween", 0.2, 1)}>
            <TabComponent links={data} />
          </motion.div>
        </Layout>
      </motion.div>
    </>
  );
};

export default Fellows;
