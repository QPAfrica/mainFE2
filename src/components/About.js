import React from "react";
import imgUrl from "../../src/assets/images/hero.jpeg";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import person1 from "../../src/assets/images/person1.webp";
import person2 from "../../src/assets/images/person2.jpg";
import person3 from "../../src/assets/images/person3.jpg";
import TeamMember from "./TeamMember";

const About = () => {
  const members = [
    {
      id: 1,
      name: "Adeola Odeku",
      img: person1,
      position: "Ceo",
      linkeding: "linkedin",
    },
    {
      id: 2,
      name: "Adeola Odeku",
      img: person2,
      position: "Ceo",
      linkeding: "linkedin",
    },
    {
      id: 3,
      name: "Adeola Odeku",
      img: person3,
      position: "Ceo",
      linkeding: "linkedin",
    },
  ];
  const otherMembers = [
    {
      id: 1,
      name: "Adeola Odeku",
      img: person1,
      position: "Ceo",
      linkeding: "linkedin",
    },
    {
      id: 2,
      name: "Adeola Odeku",
      img: person2,
      position: "Ceo",
      linkeding: "linkedin",
    },
    {
      id: 3,
      name: "Adeola Odeku",
      img: person3,
      position: "Ceo",
      linkeding: "linkedin",
    },
    {
      id: 4,
      name: "Adeola Odeku",
      img: person1,
      position: "Ceo",
      linkeding: "linkedin",
    },
    {
      id: 5,
      name: "Adeola Odeku",
      img: person2,
      position: "Ceo",
      linkeding: "linkedin",
    },
    {
      id: 6,
      name: "Adeola Odeku",
      img: person3,
      position: "Ceo",
      linkeding: "linkedin",
    },
  ];
  return (
    <div className="w-full bg-gray-900">
      <div className="container mx-auto">
        <div className="flex gap-10 sm:py-16 py-7 flex-col sm:flex-row">
          <p className="text-gray-300 sm:w-3/5 w-full flex justify-center items-center">
            Lorem ipsum dolor sit amet consectetur. Faucibus est ultrices
            sagittis eu. At morbi aliquet imperdiet elit ipsum egestas nunc
            volutpat massa. Interdum phasellus feugiat sit feugiat auctor
            placerat ac. Vel mollis id leo elementum. Neque morbi aenean egestas
            maecenas nulla non leo proin dignissim. Eu aliquam non laoreet
            malesuada mi et egestas. Leo dictum ut pulvinar fusce id sed blandit
            cras volutpat.
          </p>
          <img
            src={imgUrl}
            class="h-56 sm:w-2/5 max-w-[330px] mx-auto rounded-xl"
            alt="Flowbite Logo"
          />
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="md:py-16 py-7 w-full flex-col md:flex-row flex">
          <h1 className="text-2xl text-center md:text-left sm:pl-2 pb-5 md:pb-0 font-bold md:w-2/6 w-full">
            Be a Pioneer
          </h1>
          <p class="md:w-4/6 text-gray-300 w-full">
            We deliver an intensive 6-month program where our software
            developers learn both full-stack software development and additional
            soft skills in an immersive environment. Through an agile delivery
            methodology, mentor matching and leadership modules, our elite
            engineers are equipped with techniques and a leadership mindset that
            enables them to work competitively in any team globally.
          </p>
          {/* <div className="flex py-3 px-4 sm:px-4 md:px-2 lg:px-20 flex-row w-full justify-between font-semibold items-center">
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
            </div> */}
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex md:py-16 py-7 flex-col md:flex-row">
          <h1 className="text-2xl md:pl-2 pb-5 pt-3 text-center md:text-left md:pb-0 font-bold md:w-2/6 w-full">
            Founding Members
          </h1>
          <div className="flex flex-col md:w-4/6 justify-center md:self-end">
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 py-3 flex-row w-full justify-between items-center">
              {members.map((member) => (
                <TeamMember member={member} />
              ))}
            </div>

            <h1 class="font-bold py-5 text-center md:text-left text-2xl">
              Other members
            </h1>
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 py-3 flex-row w-full justify-between items-center">
              {otherMembers.map((member) => (
                <TeamMember member={member} />
              ))}
            </div>
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex md:py-16 py-7 flex-col md:flex-row">
          <div className="w-full md:pl-2 pb-5 md:pb-0 md:w-2/6 md:text-left font-bold">
            <h1 className="text-2xl">News/Press/Insight</h1>
          </div>
          <div className="flex flex-col md:w-4/6 justify-center">
            <div>
              {/* <h1 class="font-bold py-2 text-center md:text-left text-2xl">
                A Subtitle
              </h1> */}
              <div className="flex flex-col justify-center items-center">
                <p class="py-2 text-justify text-gray-300">
                  We deliver an intensive 6-month program where our software
                  developers learn both full-stack software development and
                  additional soft skills in an immersive environment. Through an
                  agile delivery methodology, mentor matching and leadership
                  modules, our elite engineers are equipped with techniques and
                  a leadership mindset that enables them to work competitively
                  in any team globally.
                </p>
                <div className="flex py-3 flex-row w-full justify-start font-semibold items-center">
                  <Link
                    to=""
                    className="flex flex-row font-semibold items-center"
                  >
                    <p>Read more</p>
                    <MdOutlineKeyboardArrowRight size={25} className="mt-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
