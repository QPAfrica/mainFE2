import React from "react";

const HeroSection = ({title,imgUrl}) => {
  return (
    <div className="px-4 h-[550px] sm:h-[500px] bg-gray-900 pt-16 sm:pt-36">
      <div className="flex flex-col sm:flex-row justify-center items-center container mx-auto">
        <div className="items-center flex flex-col justify-center w-full sm:w-1/2 text-center sm:text-left py-6 font-bold">
          <h1 className="text-3xl py-8 sm:py-0 text-white">{title}</h1>
        </div>
        <div className="flex w-full sm:w-1/2 justify-center items-center sm:self-end">
          <img
            src={imgUrl}
            class="w-80 h-52 sm:w-96 sm:h-64 rounded-xl"
            alt="Flowbite Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
