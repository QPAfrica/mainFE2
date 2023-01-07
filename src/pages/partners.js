import "../index.css";
import React, { useState } from "react";
import Layout from "../components/Layout";
import logo from "../../src/logo.svg";
import { Link } from "react-scroll";
import { Link as RLink } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Partners = () => {
  let [activePeriod, setActivePeriod] = useState("About");
  const links = [
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
        <div className="px-4 h-[400px] sm:h-[320px] py-5">
          <div className="flex flex-col sm:flex-row justify-center items-center container mx-auto">
            <div className="items-center flex flex-col justify-center w-full sm:w-1/2 text-center sm:text-left py-6 font-bold">
              <h1 className="text-3xl">A Subtitle</h1>
            </div>
            <div className="flex w-full sm:w-1/2 justify-center items-center sm:self-end">
              <img src={logo} class="w-72 h-72" alt="Flowbite Logo" />
            </div>
          </div>
        </div>

        <div className="max-w-screen-full drop-shadow-md">
          <div className="mx-auto ">
            <div className="flex justify-center py-1 sticky top-0 z-200 bg-white">
              <div className="grid gap-x-4 grid-cols-2">
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
                    className={`cursor-pointer ${
                      activePeriod === link ? "" : "text-black"
                    } py-4 text-center text-base capitalize transition-colors duration-300 border-b-[2px] border-white hover:border-b-[2px] hover:border-green-700  sm:px-4`}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            <div className="py-5 md:py-10 px-10 md:px-0">
              <div className="mx-auto max-w-screen-sm text-justify">
                <div name="industry" className="py-5">
                  <h1 className="text-3xl py-3">Industry</h1>
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
                      <MdOutlineKeyboardArrowLeft size={25} />
                      <p className="text-xs sm:text-base">Contact us</p>
                    </RLink>
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
                      <MdOutlineKeyboardArrowLeft size={25} />{" "}
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
