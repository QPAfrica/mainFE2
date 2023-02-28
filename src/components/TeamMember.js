import React from "react";
import { BsLinkedin } from "react-icons/bs";

const TeamMember = ({ member }) => {
  return (
    <div className="flex flex-col bg-gray-800 rounded-md justify-center hover:scale-105 duration-200 cursor-pointer">
      <img
        src={member.img}
        alt="img1"
        className="w-full h-40 rounded-md items-center"
      />
      <div class="flex flex-col px-2 py-2 text-sm text-white sm:mt-0">
        <p className="font-semibold text-base">{member.name}</p>
        <p className="text-sm font-light">{member.position}</p>
        <a
          href={member.linkedin}
          class="mr-4 py-2 text-gray-300 hover:underline md:mr-6"
        >
          <BsLinkedin size={22} className="rounded-md" />
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
