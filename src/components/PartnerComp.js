import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const PartnerComp = ({ data }) => {
  console.log(data);
  return (
    <div className="p-5">
      <div className="flex gap-10 md:py-8 py-5 flex-col md:flex-row">
        <div className="md:w-2/5 w-full flex items-center justify-center min-w-[280px] max-w-[400px] mx-auto rounded-xl">
          <img src={data?.img} alt="partner" class="rounded-xl" />
        </div>
        <div className="md:w-3/5 w-full flex justify-center">
          <div className="flex flex-col">
            <h1 className="text-3xl pb-3">{data.name}</h1>
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
    </div>
  );
};

export default PartnerComp;
