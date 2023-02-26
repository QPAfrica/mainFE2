import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const PartnerComp = ({ data }) => {
  console.log(data);
  return (
    <div className="p-5">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        <div className=" flex items-center">
          <img src={data?.img} alt="partner" class="w-72 h-56 rounded-xl" />
        </div>
        <div>
          <h1 className="text-3xl py-3">{data.name}</h1>
          <p class="py-2 text-gray-400">{data.text}</p>
          {data.addlink && (
            <div className="flex py-2 font-semibold items-center">
              <Link
                to={data.addlink}
                target={"_blank"}
                className="flex flex-row justify-center items-center mr-2"
              >
                <p className="text-xs sm:text-base">Contact us</p>
                <MdOutlineKeyboardArrowRight className="pt-1" size={25} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerComp;
