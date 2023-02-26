import "../index.css";
import React from "react";
import Layout from "../components/Layout";
import hero from "../../src/assets/images/hero.jpeg";
import TabComponent from "../components/TabComponent";
import HeroSection from "../components/HeroSection";
import FellowsComp from "../components/FellowsComp";
import About from "../components/About";
import Fellowship from "../components/Fellowship";

const Fellows = () => {
  const totalData = [
    {
      id: 1,
      name: "eligibility",
      title: "Eligibility",
      text: `Lorem ipsum dolor sit amet consectetur. Faucibus est ultrices sagittis eu. At morbi aliquet imperdiet elit ipsum egestas nunc volutpat massa. Interdum phasellus feugiat sit feugiat auctor placerat ac. Vel mollis id leo elementum. Neque morbi aenean egestas maecenas nulla non leo proin dignissim. Eu aliquam non laoreet malesuada mi et egestas. Leo dictum ut pulvinar fusce id sed blandit cras volutpat. Facilisi nulla tellus sed vitae enim ipsum sed porttitor sapien.
      Consectetur risus magna volutpat et dignissim euismod. Phasellus est nulla eu est egestas tortor lorem. Egestas maecenas pellentesque pellentesque nunc ac at. Lacus aenean arcu id sed varius proin a. Nullam donec suscipit sit etiam.`,
      link: "#eligibility",
    },
    {
      id: 2,
      name: "selection",
      title: "Selection",
      text: `Lorem ipsum dolor sit amet consectetur. Faucibus est ultrices sagittis eu. At morbi aliquet imperdiet elit ipsum egestas nunc volutpat massa. Interdum phasellus feugiat sit feugiat auctor placerat ac. Vel mollis id leo elementum. Neque morbi aenean egestas maecenas nulla non leo proin dignissim. Eu aliquam non laoreet malesuada mi et egestas. Leo dictum ut pulvinar fusce id sed blandit cras volutpat. Facilisi nulla tellus sed vitae enim ipsum sed porttitor sapien.
      Consectetur risus magna volutpat et dignissim euismod. Phasellus est nulla eu est egestas tortor lorem. Egestas maecenas pellentesque pellentesque nunc ac at. Lacus aenean arcu id sed varius proin a. Nullam donec suscipit sit etiam.`,
      link: "#selection",
    },
  ];

  const data = [
    {
      id: 1,
      name: "About",
      link: "#about",
      content: <About />,
    },
    {
      id: 2,
      name: "Eligibility",
      link: "#eligibility",
      content: <FellowsComp data={totalData[0]} />,
    },
    {
      id: 3,
      name: "Selection",
      link: "#selection",
      content: <FellowsComp data={totalData[1]} />,
    },
    {
      id: 4,
      name: "Fellowship",
      link: "#fellowship",
      content: <Fellowship />,
    },
  ];

  return (
    <div>
      <Layout>
        <HeroSection title={"A Subtitle from Fellows"} imgUrl={hero} />
        <TabComponent links={data} />
      </Layout>
    </div>
  );
};

export default Fellows;
