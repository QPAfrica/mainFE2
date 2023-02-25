import "../index.css";
import React from "react";
import Layout from "../components/Layout";
import hero from "../../src/assets/images/hero.jpeg";
import { Link as RLink } from "react-router-dom";
import {
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import HeroSection from "../components/HeroSection";
import ScrollLinks from "../components/ScrollLinks";

const Partners = () => {
  const data = [
    {
      id: 1,
      link: "industry",
    },
    {
      id: 2,
      link: "academics",
    },
  ];
  return (
    <div>
      <Layout>
        <HeroSection title={"A Subtitle from Partners"} imgUrl={hero} />
        <div className="max-w-screen-full bg-gray-900 drop-shadow-md">
          <div className="mx-auto max-w-screen-md">
            <ScrollLinks links={data} />
            <div className="py-5 md:py-10 px-10 md:px-0">
              <div className="mx-auto text-white max-w-screen-md text-justify">
                <div name="industry" className="py-5 px-5">
                  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                    <div className=" flex items-center">
                      <img
                        src={hero}
                        class="w-72 h-56 rounded-xl"
                        alt="Flowbite Logo"
                      />
                    </div>
                    <div>
                      <h1 className="text-3xl py-3">Industry</h1>
                      <p class="py-2 text-gray-400">
                        We deliver an intensive 6-month program where our
                        software developers learn both full-stack software
                        development and additional soft skills in an immersive
                        environment.
                      </p>
                      <p class="py-2 text-gray-400">
                        Through an agile delivery methodology, mentor matching
                        and leadership modules, our elite engineers are equipped
                        with techniques and a leadership mindset that enables
                        them to work competitively in any team globally.
                      </p>
                      <div className="flex py-2 font-semibold items-center">
                        <RLink
                          to="https://www.greenhouse.com/"
                          target={"_blank"}
                          className="flex flex-row justify-center items-center mr-2"
                        >
                          <p className="text-xs sm:text-base">Contact us</p>
                          <MdOutlineKeyboardArrowRight className="pt-1" size={25} />
                        </RLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div name="academics" className="py-5">
                  <h1 className="text-3xl py-3">Academics</h1>
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
                      <MdOutlineKeyboardArrowRight size={25} />{" "}
                      <p className="text-xs sm:text-base">Apply</p>
                    </RLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Partners;
