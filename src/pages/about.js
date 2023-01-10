import React from "react";
import Layout from "../components/Layout";
import logo from "../../src/logo.svg";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import person1 from "../../src/assets/images/person1.webp";
import person2 from "../../src/assets/images/person2.jpg";
import person3 from "../../src/assets/images/person3.jpg";

const about = () => {
  return (
    <div>
      <Layout>
        <div className="flex px-4 py-5 flex-col md:flex-row justify-center items-center container mx-auto">
          <div className="items-center flex flex-col justify-center w-full md:w-1/2 text-center md:text-left py-6 font-bold">
            <h1 className="text-2xl py-1">Mission statement</h1>
            <h1 className="text-2xl py-1">Mission statement</h1>
            <h1 className="text-2xl py-1">Mission statement</h1>
          </div>
          <div className="flex w-full md:w-1/2 justify-center items-center md:self-end">
            <img src={logo} class="w-72 h-72" alt="Flowbite Logo" />
          </div>
        </div>
        <hr />
        <div className="flex px-4 py-5 flex-col md:flex-row container mx-auto">
          <div className="flex flex-col items-center w-full md:w-1/2 md:text-left py-6 font-bold">
            <h1 className="text-2xl py-1">Be a Pioneer</h1>
          </div>
          <div className="flex flex-col max-w-[300px] sm:max-w-[450px] md:max-w-none mx-auto md:w-1/2 justify-center items-center md:self-end">
            <p class="py-2 px-4 sm:px-4 md:px-2 lg:px-20 text-justify">
              We deliver an intensive 6-month program where our software
              developers learn both full-stack software development and
              additional soft skills in an immersive environment. Through an
              agile delivery methodology, mentor matching and leadership
              modules, our elite engineers are equipped with techniques and a
              leadership mindset that enables them to work competitively in any
              team globally.
            </p>
            <div className="flex py-3 px-4 sm:px-4 md:px-2 lg:px-20 flex-row w-full justify-between font-semibold items-center">
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
            </div>
          </div>
        </div>
        <hr />
        <div className="flex px-4 py-5 flex-col md:flex-row container mx-auto">
          <div className="flex flex-col items-center w-full md:w-1/2 md:text-left py-6 font-bold">
            <h1 className="text-3xl py-1">Team</h1>
          </div>
          <div className="flex flex-col px-8 sm:px-4 md:px-2 lg:px-20 md:w-1/2 justify-center  md:self-end">
            <h1 class="font-bold py-2 text-center md:text-left text-2xl">
              A Subtitle
            </h1>
            <div className="grid gap-2 max-w-[300px] sm:max-w-[450px] md:max-w-none mx-auto grid-cols-2 sm:grid-cols-3 py-3 flex-row w-full justify-between font-semibold items-center">
              <div className="flex flex-col justify-center">
                <img
                  src={person1}
                  alt="img1"
                  className="w-32 h-36 rounded-md items-center"
                />
                <div class="flex items-center text-sm text-gray-800 sm:mt-0">
                  <a href="/" class="mr-4 py-2 hover:underline md:mr-6">
                    <BsLinkedin size={28} />
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <img
                  src={person2}
                  alt="img1"
                  className="w-32 h-36 rounded-md items-center"
                />
                <div class="flex items-center text-sm text-gray-800 sm:mt-0">
                  <a href="/" class="mr-4 py-2 hover:underline md:mr-6">
                    <BsLinkedin size={28} />
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <img
                  src={person3}
                  alt="img1"
                  className="w-32 h-36 rounded-md items-center"
                />
                <div class="flex items-center text-sm text-gray-800 sm:mt-0">
                  <a href="/" class="mr-4 py-2 hover:underline md:mr-6">
                    <BsLinkedin size={28} />
                  </a>
                </div>
              </div>
            </div>
            <hr />

            <h1 class="font-bold py-2 text-center md:text-left text-2xl">
              A Subtitle
            </h1>
            <div className="grid gap-2 max-w-[300px] sm:max-w-[450px] md:max-w-none mx-auto grid-cols-2 sm:grid-cols-3 py-3 flex-row w-full justify-between font-semibold items-center">
              <div className="flex flex-col justify-center">
                <img
                  src={person1}
                  alt="img1"
                  className="w-32 h-36 rounded-md items-center"
                />
                <div class="flex items-center text-sm text-gray-800 sm:mt-0">
                  <a href="/" class="mr-4 py-2 hover:underline md:mr-6">
                    <BsLinkedin size={28} />
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <img
                  src={person2}
                  alt="img1"
                  className="w-32 h-36 rounded-md items-center"
                />
                <div class="flex items-center text-sm text-gray-800 sm:mt-0">
                  <a href="/" class="mr-4 py-2 hover:underline md:mr-6">
                    <BsLinkedin size={28} />
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <img
                  src={person3}
                  alt="img1"
                  className="w-32 h-36 rounded-md items-center"
                />
                <div class="flex items-center text-sm text-gray-800 sm:mt-0">
                  <a href="/" class="mr-4 py-2 hover:underline md:mr-6">
                    <BsLinkedin size={28} />
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <img
                  src={person1}
                  alt="img1"
                  className="w-32 h-36 rounded-md items-center"
                />
                <div class="flex items-center text-sm text-gray-800 sm:mt-0">
                  <a href="/" class="mr-4 py-2 hover:underline md:mr-6">
                    <BsLinkedin size={28} />
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <img
                  src={person2}
                  alt="img1"
                  className="w-32 h-36 rounded-md items-center"
                />
                <div class="flex items-center text-sm text-gray-800 sm:mt-0">
                  <a href="/" class="mr-4 py-2 hover:underline md:mr-6">
                    <BsLinkedin size={28} />
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <img
                  src={person3}
                  alt="img1"
                  className="w-32 h-36 rounded-md items-center"
                />
                <div class="flex items-center text-sm text-gray-800 sm:mt-0">
                  <a href="/" class="mr-4 py-2 hover:underline md:mr-6">
                    <BsLinkedin size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex px-4 py-5 flex-col md:flex-row container mx-auto">
          <div className="flex flex-col items-center w-full md:w-1/2 md:text-left py-6 font-bold">
            <h1 className="text-3xl py-1">News/Press/Insight</h1>
          </div>
          <div className="flex flex-col px-4 sm:px-4 md:px-2 lg:px-20 md:w-1/2 justify-center">
            <div>
              <h1 class="font-bold py-2 text-center md:text-left text-2xl">
                A Subtitle
              </h1>
              <div className="flex flex-col max-w-[300px] sm:max-w-[450px] md:max-w-none mx-auto justify-center items-center">
                <p class="py-2 text-justify">
                  We deliver an intensive 6-month program where our software
                  developers learn both full-stack software development and
                  additional soft skills in an immersive environment. Through an
                  agile delivery methodology, mentor matching and leadership
                  modules, our elite engineers are equipped with techniques and
                  a leadership mindset that enables them to work competitively
                  in any team globally.
                </p>
                <div className="flex py-3 flex-row w-full justify-center sm:justify-end font-semibold items-center">
                  <Link
                    to=""
                    className="flex flex-row justify-end font-semibold items-center mr-2"
                  >
                    <MdOutlineKeyboardArrowLeft size={25} />
                    <p>Read more</p>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h1 class="font-bold py-2 text-center md:text-left text-2xl">
                A Subtitle
              </h1>
              <div className="flex flex-col max-w-[300px] sm:max-w-[450px] md:max-w-none mx-auto justify-center items-center">
                <p class="py-2 text-justify">
                  We deliver an intensive 6-month program where our software
                  developers learn both full-stack software development and
                  additional soft skills in an immersive environment. Through an
                  agile delivery methodology, mentor matching and leadership
                  modules, our elite engineers are equipped with techniques and
                  a leadership mindset that enables them to work competitively
                  in any team globally.
                </p>
                <div className="flex py-3 flex-row w-full justify-center sm:justify-end font-semibold items-center">
                  <Link
                    to=""
                    className="flex flex-row justify-end font-semibold items-center mr-2"
                  >
                    <MdOutlineKeyboardArrowLeft size={25} />
                    <p>Read more</p>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h1 class="font-bold py-2 text-center md:text-left text-2xl">
                A Subtitle
              </h1>
              <div className="flex flex-col max-w-[300px] sm:max-w-[450px] md:max-w-none mx-auto justify-center items-center">
                <p class="py-2 text-justify">
                  We deliver an intensive 6-month program where our software
                  developers learn both full-stack software development and
                  additional soft skills in an immersive environment. Through an
                  agile delivery methodology, mentor matching and leadership
                  modules, our elite engineers are equipped with techniques and
                  a leadership mindset that enables them to work competitively
                  in any team globally.
                </p>
                <div className="flex py-3 flex-row w-full justify-center sm:justify-end font-semibold items-center">
                  <Link
                    to=""
                    className="flex flex-row justify-end font-semibold items-center mr-2"
                  >
                    <MdOutlineKeyboardArrowLeft size={25} />
                    <p>Read more</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default about;
