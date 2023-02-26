import "../index.css";
import React from "react";
import Layout from "../components/Layout";
import hero from "../../src/assets/images/hero.jpeg";
import imgUrl from "../../src/assets/images/hero.jpeg";
import HeroSection from "../components/HeroSection";
import TabsComponent from "../components/TabComponent";
import PartnerComp from "../components/PartnerComp";

const Partners = () => {
  const componentData = [
    {
      id: 1,
      name: "Industry",
      text: `We deliver an intensive 6-month program where our software developers learn both full-stack software development and additional soft skills in an immersive environment. Through an agile delivery methodology, mentor matching and leadership modules, our elite engineers are equipped with techniques and a leadership mindset that enables them to work competitively in any team globally.`,
      img: imgUrl,
      addlink: "/contact",
    },
    {
      id: 2,
      name: "Academics",
      img: imgUrl,
      text: `We deliver an intensive 6-month program where our software developers learn both full-stack software development and additional soft skills in an immersive environment. Through an agile delivery methodology, mentor matching and leadership modules, our elite engineers are equipped with techniques and a leadership mindset that enables them to work competitively in any team globally.`,
    },
  ];
  const data = [
    {
      id: 1,
      name: "Industry",
      content: <PartnerComp data={componentData[0]} />,
    },
    {
      id: 2,
      name: "Academics",
      content: <PartnerComp data={componentData[1]} />,
    },
  ];
  return (
    <div>
      <Layout>
        <HeroSection title={"A Subtitle from Partners"} imgUrl={hero} />
        <TabsComponent links={data} />
      </Layout>
    </div>
  );
};

export default Partners;
