import React from "react";
import Layout from "../components/Layout";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div className="bg-black">
      <div className="relative min-h-screen bg-gray-900 text-white">
        <NavBar />
        <div class="relative h-[75vh] px-2">
          <div className="mx-auto container pt-[20%]">
            <h1 class="text-2xl sm:text-4xl md:text-5xl w-full sm:w-1/2 p-4 font-bold text-white">
              Pioneering the Quant Industry in Africa
            </h1>
            <div className="flex flex-row py-2 font-semibold items-center px-2">
              <Link
                to="fellows"
                className="flex flex-row justify-center items-center mr-2"
              >
                <MdOutlineKeyboardArrowLeft size={25} />
                <p className="text-xs sm:text-base">QP Fellows</p>
              </Link>
              <Link
                to=""
                className="flex flex-row justify-center font-semibold px-2 items-center mr-2"
              >
                <MdOutlineKeyboardArrowLeft size={25} />
                <p className="text-xs sm:text-base">QP Incubaded Funds</p>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* <div class="flex flex-col min-h-screen" hastransition="true">
        <nav class="absolute top-0 left-0 w-full py-4 md:py-5 z-10 mix-blend-exclusion text-white">
          <div class="container flex justify-between">
            <a
              aria-current="page"
              href="/"
              class="router-link-active router-link-exact-active"
            >
              OpenAI Startup Fund
            </a>
            <div class="grid grid-flow-row md:grid-flow-col gap-y-1.5 gap-x-7 pr-8 md:pr-0">
              <a href="/news" class="opacity-60 hover:opacity-100 ">
                News
              </a>
              <a href="/about" class="opacity-60 hover:opacity-100 ">
                About
              </a>
              <a
                class=" opacity-60 hover:opacity-100 flex items-baseline"
                href="mailto:hello@openai.fund"
              >
                Contact{" "}
              </a>
            </div>
          </div>
        </nav>
        <main>
          <div class="text-white">
            <section class="py-[70px] flex items-end min-h-[100vh] supports-[height:100dvh]:min-h-[100dvh]">
              <div class="container mix-blend-exclusion">
                <h1 class="f-large max-w-[660px]">
                  {" "}
                  Investing in startups with big ideas about AI.{" "}
                </h1>
                <ul class="grid grid-flow-col justify-start gap-x-7 mt-14">
                  <li>
                    <a
                      href="/news/introducing-our-first-investments"
                      class="button rounded-full border px-6 pt-[11px] pb-[13px] justify-self-start hover:bg-transparent transition-colors bg-white text-black border-white hover:text-white"
                    >
                      Read latest
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      class="text-link inline-flex items-end hover:underline justify-self-start decoration-[0.06em] underline-offset-[3px] text-white"
                    >
                      Learn more
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </main>
      </div> */}
    </div>
  );
};

export default home;
