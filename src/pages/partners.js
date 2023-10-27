import "../index.css";
import React from "react";
import Layout from "../components/Layout";
// import Academy from "../../src/assets/images/academy.png";
// import Industry from "../../src/assets/images/industry.png";
// import Partner from "../../src/assets/images/partner.png";
import HeroSection from "../components/HeroSection";
import TabsComponent from "../components/TabComponent";
import PartnerComp from "../components/PartnerComp";
import PartnerComp1 from "../components/PartnerComp1";
import { Helmet } from "react-helmet";

const Partners = () => {
  const componentData = [
    {
      id: 1,
      name: "Industry",
      text: `Are you a company looking to stay ahead of the curve in the fast-paced world of FinTech and WealthTech? Partner with us and experience startup speed in a corporate environment!

      We specialize in developing cutting-edge data science and Quant strategies for businesses in  the financial service industry. And now, we're offering industry partnerships to help take your business to the next level.
      
      Our team of Quants and data scientists have a proven track record of success in developing innovative solutions to complex financial problems. From statistical risk management and loan/insurance underwriting to modern portfolio optimization and algorithmic trading, we have the expertise to help you navigate the complex world of finance.
      
      Partnering with us means gaining access to cutting-edge Quant strategies, as well as our team's expertise. We understand that every business is unique, which is why we work closely with our partners to develop tailored solutions that meet their specific needs.
      
      So why wait? Let’s talk.
      `,
      img: "https://res.cloudinary.com/ddlupbcws/image/upload/v1680795578/abstract1_p1auny.jpg",
      addlink: "/contact",
    },
    {
      id: 2,
      name: "Academics",
      img: "https://res.cloudinary.com/ddlupbcws/image/upload/v1698395978/6539026_1527_rawhsw_huarfl.jpg",
      text: `Bring together Quant finance professionals and academic researchers to tackle real-world investment challenges and inspire the next generation of Quants and startups in Africa.

      Together, we will work to develop cutting-edge quantitative and data science solutions for businesses in the financial service industry. By collaborating, we can combine industry and local expertise with academic research to develop solutions that are both practical and innovative.
      
      As part of this collaboration, we will provide access to real world data, business use-cases, and opportunity to work on novel Quant pristine markets (Africa). We believe that academic research and collaboration are essential to the advancement of the industry and are committed to working closely with our partners to develop joint research projects and publications.
      
      We invite academic institutions to join us in shaping the future of Quant finance in Africa through this collaboration. Please contact us to learn more about how we can work together to make a real difference in the last frontier of Quant finance.
      `,
      addlink: "/",
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
      content: <PartnerComp1 data={componentData[1]} />,
    },
  ];
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>Partners - QPAfrica</title>
        <meta name="description" content="Meta Description here" />
      </Helmet>
      <Layout>
        <HeroSection
          title={
            "Discover the Power of Collaboration: Startup-Industry-Academic Partnership to Pioneer the Quant Industry in Africa"
          }
          imgUrl="https://res.cloudinary.com/ddlupbcws/image/upload/v1680795575/abstract3_t9erv7.jpg"
        />
        <TabsComponent links={data} />
      </Layout>
    </div>
  );
};

export default Partners;
