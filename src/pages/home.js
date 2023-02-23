import React from "react";
import { RiArrowRightUpFill } from "react-icons/ri";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import "../index.css";
import "./home.css";
import { TiArrowRightThick } from "react-icons/ti";
import { GrFacebookOption, GrLinkedinOption, GrTwitter } from "react-icons/gr";

const home = () => {
  return (
    <div className="relative w-full App bg-gray-900 max-w-full">
      <div className="relative min-h-screen text-white">
        <div className="circle" style={{ mixBlendMode: "blend" }}></div>
        <div className="littlecircle" style={{ mixBlendMode: "blend" }}></div>
        {/* <NavBar home={true} /> */}
        <div class="max-w-screen-lg mx-auto">
          <div className="absolute top-[50%] translate-y-[-50%] container px-5">
            <h1 class="text-4xl text-center sm:text-left sm:text-5xl w-full md:w-2/3 lg:w-1/2 p-4 font-bold text-white">
              Pioneering the Quant Industry in Africa
            </h1>
            <div className="flex flex-row py-2 gap-6 items-center px-2">
              <Link
                to="fellows"
                className="flex flex-row gap-1 items-center ml-2"
              >
                <p>QP Fellows</p>
                <TiArrowRightThick className="rotate-[-45deg]" size={18} />
              </Link>
              <Link to="" className="flex flex-row gap-1 items-center ml-2">
                <p>QP Incubaded Funds</p>
                <TiArrowRightThick className="rotate-[-45deg]" size={18} />
              </Link>
            </div>
            <div class="flex w-full md:w-2/3 lg:w-1/2 text-sm text-gray-300 p-4">
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
        {/* <Footer home={true} /> */}
      </div>
    </div>
  );
};

export default home;
