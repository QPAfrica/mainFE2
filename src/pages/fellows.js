import "../index.css";
import React from "react";
import Layout from "../components/Layout";
import logo from "../../src/logo.svg";
import { Link } from "react-scroll";
import hero from "../../src/assets/images/hero.jpeg";
import { Link as RLink } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import TabsComponent from "../components/TabComponent";
import HeroSection from "../components/HeroSection";
import FellowsComp from "../components/FellowsComp";
import About from "../components/About";

const Fellows = () => {
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
      content: <FellowsComp name="eligibility" />,
    },
    {
      id: 3,
      name: "Selection",
      link: "#selection",
      content: <FellowsComp name="selection" />,
    },
    {
      id: 4,
      name: "Fellowship",
      link: "#fellowship",
      content: "Fellowship",
    },
  ];
  return (
    <div>
      <Layout>
        <HeroSection title={"A Subtitle from Fellows"} imgUrl={hero} />
        <TabsComponent links={data} />
        {/* <div className="max-w-screen-full drop-shadow-md">
          <div className="mx-auto ">
            <div className="flex justify-center py-1 sticky top-0 z-200 bg-white">
              <div className="grid gap-x-4 grid-cols-2 sm:grid-cols-4">
                {links.map(({ id, link }) => (
                  <Link
                    key={id}
                    to={link}
                    smooth
                    offset={-70}
                    hashSpy={true}
                    spy={true}
                    activeClass="active"
                    // onClick={() => setActivePeriod(link)}
                    className={`cursor-pointer py-4 text-center text-base capitalize transition-colors duration-300 border-b-[2px] border-white hover:border-b-[2px] hover:border-green-700  sm:px-4`}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            <div className="py-5 md:py-10 px-10 md:px-0">
              <div className="mx-auto max-w-screen-sm text-justify">
                <div name="about" className="py-5">
                  <h1 className="text-3xl py-3">About</h1>
                  <p class="py-2">
                    We deliver an intensive 6-month program where our software
                    developers learn both full-stack software development and
                    additional soft skills in an immersive environment. Through
                    an agile delivery methodology, mentor matching and
                    leadership modules, our elite engineers are equipped with
                    techniques and a leadership mindset that enables them to
                    work competitively in any team globally.
                  </p>
                  <p class="py-2">
                    We deliver an intensive 6-month program where our software
                    developers learn both full-stack software development and
                    additional soft skills in an immersive environment. Through
                    an agile delivery methodology, mentor matching and
                    leadership modules, our elite engineers are equipped with
                    techniques and a leadership mindset that enables them to
                    work competitively in any team globally.
                  </p>
                  <div className="flex justify-end py-2 font-semibold items-center">
                    <RLink
                      to="https://www.greenhouse.com/"
                      target={"_blank"}
                      className="flex flex-row justify-center items-center mr-2"
                    >
                      <MdOutlineKeyboardArrowLeft size={25} />{" "}
                      <p className="text-xs sm:text-base">Apply</p>
                    </RLink>
                  </div>
                </div>
                <div name="eligibility" className="py-5">
                  <h1 className="text-3xl py-3">Eligibility</h1>
                  <p class="py-2">
                    We deliver an intensive 6-month program where our software
                    developers learn both full-stack software development and
                    additional soft skills in an immersive environment. Through
                    an agile delivery methodology, mentor matching and
                    leadership modules, our elite engineers are equipped with
                    techniques and a leadership mindset that enables them to
                    work competitively in any team globally.
                  </p>
                  <p class="py-2">
                    We deliver an intensive 6-month program where our software
                    developers learn both full-stack software development and
                    additional soft skills in an immersive environment. Through
                    an agile delivery methodology, mentor matching and
                    leadership modules, our elite engineers are equipped with
                    techniques and a leadership mindset that enables them to
                    work competitively in any team globally.
                  </p>
                </div>
                <div name="selection" className="py-5">
                  <h1 className="text-3xl py-3">Selection</h1>
                  <p class="py-2">
                    We deliver an intensive 6-month program where our software
                    developers learn both full-stack software development and
                    additional soft skills in an immersive environment. Through
                    an agile delivery methodology, mentor matching and
                    leadership modules, our elite engineers are equipped with
                    techniques and a leadership mindset that enables them to
                    work competitively in any team globally.
                  </p>
                  <p class="py-2">
                    We deliver an intensive 6-month program where our software
                    developers learn both full-stack software development and
                    additional soft skills in an immersive environment. Through
                    an agile delivery methodology, mentor matching and
                    leadership modules, our elite engineers are equipped with
                    techniques and a leadership mindset that enables them to
                    work competitively in any team globally.
                  </p>
                </div>
                <div name="fellowship" className="py-5">
                  <h1 className="text-3xl py-3">Fellowship</h1>
                  <p class="py-2">
                    We deliver an intensive 6-month program where our software
                    developers learn both full-stack software development and
                    additional soft skills in an immersive environment. Through
                    an agile delivery methodology, mentor matching and
                    leadership modules, our elite engineers are equipped with
                    techniques and a leadership mindset that enables them to
                    work competitively in any team globally.
                  </p>
                  <p class="py-2">
                    We deliver an intensive 6-month program where our software
                    developers learn both full-stack software development and
                    additional soft skills in an immersive environment. Through
                    an agile delivery methodology, mentor matching and
                    leadership modules, our elite engineers are equipped with
                    techniques and a leadership mindset that enables them to
                    work competitively in any team globally.
                  </p>
                  <p class="py-2">
                    We deliver an intensive 6-month program where our software
                    developers learn both full-stack software development and
                    additional soft skills in an immersive environment. We
                    deliver an intensive 6-month program where our software
                    developers learn both full-stack software development and
                    additional soft skills in an immersive environment. Through
                    an agile delivery methodology, mentor matching and
                    leadership modules, our elite engineers are equipped with
                    techniques and a leadership mindset that enables them to
                    work competitively in any team globally.
                  </p>
                  <div className="flex justify-end py-2 font-semibold items-center">
                    <RLink
                      to="https://www.greenhouse.com/"
                      target={"_blank"}
                      className="flex flex-row justify-center items-center mr-2"
                    >
                      <MdOutlineKeyboardArrowLeft size={25} />{" "}
                      <p className="text-xs sm:text-base">Apply</p>
                    </RLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Layout>
    </div>
  );
};

export default Fellows;
