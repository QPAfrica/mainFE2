import React from "react";
import { Link } from "react-scroll";

const ScrollLinks = ({links}) => {
  return (
    <div className="flex justify-center sticky border-b-[1px] border-gray-300 top-0 z-200 bg-gray-900 text-white">
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
            className={`cursor-pointer py-4 text-center text-base capitalize transition-colors duration-300 border-b-2 border-gray-900 hover:border-b-2 hover:duration-300 hover:border-white sm:px-4`}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ScrollLinks;
