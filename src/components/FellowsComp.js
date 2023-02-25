import React, { useEffect, useState } from "react";
import { Link as RLink } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const totalData = [
  {
    id: 1,
    name: "eligibility",
    title: "Eligibility",
    text: `Lorem ipsum dolor sit amet consectetur. Faucibus est ultrices sagittis eu. At morbi aliquet imperdiet elit ipsum egestas nunc volutpat massa. Interdum phasellus feugiat sit feugiat auctor placerat ac. Vel mollis id leo elementum. Neque morbi aenean egestas maecenas nulla non leo proin dignissim. Eu aliquam non laoreet malesuada mi et egestas. Leo dictum ut pulvinar fusce id sed blandit cras volutpat. Facilisi nulla tellus sed vitae enim ipsum sed porttitor sapien.
    Consectetur risus magna volutpat et dignissim euismod. Phasellus est nulla eu est egestas tortor lorem. Egestas maecenas pellentesque pellentesque nunc ac at. Lacus aenean arcu id sed varius proin a. Nullam donec suscipit sit etiam.`,
    link: "#eligibility",
  },
  {
    id: 2,
    name: "selection",
    title: "Selection",
    text: `Lorem ipsum dolor sit amet consectetur. Faucibus est ultrices sagittis eu. At morbi aliquet imperdiet elit ipsum egestas nunc volutpat massa. Interdum phasellus feugiat sit feugiat auctor placerat ac. Vel mollis id leo elementum. Neque morbi aenean egestas maecenas nulla non leo proin dignissim. Eu aliquam non laoreet malesuada mi et egestas. Leo dictum ut pulvinar fusce id sed blandit cras volutpat. Facilisi nulla tellus sed vitae enim ipsum sed porttitor sapien.
    Consectetur risus magna volutpat et dignissim euismod. Phasellus est nulla eu est egestas tortor lorem. Egestas maecenas pellentesque pellentesque nunc ac at. Lacus aenean arcu id sed varius proin a. Nullam donec suscipit sit etiam.`,
    link: "#selection",
  },
];

const FellowsComp = ({ name }) => {
  console.log(name);
  const [data, setData] = useState({});
  useEffect(() => {
    return () => {
      setData(totalData.find((item) => item.name === name));
    };
  }, [name]);

  console.log(data);

  return (
    <div name="academics" className="py-5">
      <h1 className="text-3xl py-3">{data.title}</h1>
      <p class="py-2">{data.text}</p>
      <div className="flex justify-end py-2 font-semibold items-center">
        <RLink
          to={data.link}
          target={"_blank"}
          className="flex flex-row justify-center items-center mr-2"
        >
          <p className="text-xs sm:text-base">Apply</p>
          <MdOutlineKeyboardArrowRight size={25} className="mt-1" />
        </RLink>
      </div>
    </div>
  );
};

export default FellowsComp;
