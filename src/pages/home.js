import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import "./home.css";
import { TiArrowRightThick } from "react-icons/ti";
import { GrFacebookOption, GrLinkedinOption, GrTwitter } from "react-icons/gr";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const home = () => {
  return (
    <div className="relative w-full App bg-gray-900 max-w-full">
      <div className="relative min-h-screen text-white">
        <div className="circle mix-blend-multiply"></div>
        <div className="littlecircle mix-blend-multiply"></div>
        <NavBar />
        <div class="max-w-screen-lg mx-auto">
          <div className="absolute top-[50%] translate-y-[-50%] container px-2 sm:px-5">
            <h1 class="text-4xl text-center sm:text-left sm:text-5xl w-full md:w-2/3 lg:w-1/2 sm:p-4 font-bold text-white">
              Pioneering the Quant Industry in Africa
            </h1>
            <div className="flex flex-row py-4 gap-6 items-center justify-center sm:justify-start px-4">
              <Link to="fellows" className="flex flex-row gap-1 items-center">
                <p className="text-sm sm:text-base">QP Fellows</p>
                <TiArrowRightThick className="rotate-[-45deg]" size={18} />
              </Link>
              <Link to="" className="flex flex-row gap-1 items-center">
                <p className="text-sm sm:text-base">QP Incubaded Funds</p>
                <TiArrowRightThick className="rotate-[-45deg]" size={18} />
              </Link>
            </div>
            <div class="flex w-full md:w-2/3 lg:w-1/2 text-sm justify-center sm:justify-start text-gray-300 p-4">
              <a
                href="/"
                class="mr-4 hover:underline md:mr-6 bg-slate-400 rounded-md p-1"
              >
                <GrFacebookOption size={18} color={"black"} />
              </a>
              <a
                href="/"
                class="mr-4 hover:underline md:mr-6 bg-slate-400 rounded-md p-1"
              >
                <GrLinkedinOption size={18} color={"black"} />
              </a>
              <a
                href="/"
                class="mr-4 hover:underline md:mr-6 bg-slate-400 rounded-md p-1"
              >
                <GrTwitter size={18} color={"black"} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer home={true} />
    </div>
  );
};

export default home;
