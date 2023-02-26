import React from "react";
import { Link as RLink } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Fellowship = () => {
  const fellowship = [
    {
      id: 1,
      title: "A Subtitle",
      text: `Lorem ipsum dolor sit amet consectetur. Faucibus est ultrices sagittis eu. At morbi aliquet imperdiet elit ipsum egestas nunc volutpat massa. Interdum phasellus feugiat sit feugiat auctor placerat ac. Vel mollis id leo elementum. Neque morbi aenean egestas maecenas nulla non leo proin dignissim. Eu aliquam non laoreet malesuada mi et egestas. Leo dictum ut pulvinar fusce id sed blandit cras volutpat. Facilisi nulla tellus sed vitae enim ipsum sed porttitor sapien.
          Consectetur risus magna volutpat et dignissim euismod. Phasellus est nulla eu est egestas tortor lorem. Egestas maecenas pellentesque pellentesque nunc ac at. Lacus aenean arcu id sed varius proin a. Nullam donec suscipit sit etiam.`,
      link: "#eligibility",
    },
    {
      id: 2,
      title: "A Subtitle",
      text: `Lorem ipsum dolor sit amet consectetur. Faucibus est ultrices sagittis eu. At morbi aliquet imperdiet elit ipsum egestas nunc volutpat massa. Interdum phasellus feugiat sit feugiat auctor placerat ac. Vel mollis id leo elementum. Neque morbi aenean egestas maecenas nulla non leo proin dignissim. Eu aliquam non laoreet malesuada mi et egestas. Leo dictum ut pulvinar fusce id sed blandit cras volutpat. Facilisi nulla tellus sed vitae enim ipsum sed porttitor sapien.
          Consectetur risus magna volutpat et dignissim euismod. Phasellus est nulla eu est egestas tortor lorem. Egestas maecenas pellentesque pellentesque nunc ac at. Lacus aenean arcu id sed varius proin a. Nullam donec suscipit sit etiam.`,
      link: "#selection",
    },
    {
      id: 3,
      title: "A Subtitle",
      text: `Lorem ipsum dolor sit amet consectetur. Faucibus est ultrices sagittis eu. At morbi aliquet imperdiet elit ipsum egestas nunc volutpat massa. Interdum phasellus feugiat sit feugiat auctor placerat ac. Vel mollis id leo elementum. Neque morbi aenean egestas maecenas nulla non leo proin dignissim. Eu aliquam non laoreet malesuada mi et egestas. Leo dictum ut pulvinar fusce id sed blandit cras volutpat. Facilisi nulla tellus sed vitae enim ipsum sed porttitor sapien.
            Consectetur risus magna volutpat et dignissim euismod. Phasellus est nulla eu est egestas tortor lorem. Egestas maecenas pellentesque pellentesque nunc ac at. Lacus aenean arcu id sed varius proin a. Nullam donec suscipit sit etiam.`,
      link: "#eligibility",
    },
    {
      id: 4,
      title: "A Subtitle",
      text: `Lorem ipsum dolor sit amet consectetur. Faucibus est ultrices sagittis eu. At morbi aliquet imperdiet elit ipsum egestas nunc volutpat massa. Interdum phasellus feugiat sit feugiat auctor placerat ac. Vel mollis id leo elementum. Neque morbi aenean egestas maecenas nulla non leo proin dignissim. Eu aliquam non laoreet malesuada mi et egestas. Leo dictum ut pulvinar fusce id sed blandit cras volutpat. Facilisi nulla tellus sed vitae enim ipsum sed porttitor sapien.
            Consectetur risus magna volutpat et dignissim euismod. Phasellus est nulla eu est egestas tortor lorem. Egestas maecenas pellentesque pellentesque nunc ac at. Lacus aenean arcu id sed varius proin a. Nullam donec suscipit sit etiam.`,
      link: "#selection",
    },
  ];
  return (
    <div className="py-5">
      {fellowship.map((item) => (
        <div key={item.id}>
          <h1 className="text-3xl py-3 font-bold">{item.title}</h1>
          <p class="py-2 text-gray-300">{item.text}</p>
          <div className="flex justify-end py-2 font-semibold items-center">
            <RLink
              to={item.link}
              target={"_blank"}
              className="flex flex-row justify-center items-center mr-2"
            >
              <p>Apply</p>
              <MdOutlineKeyboardArrowRight size={25} className="mt-1" />
            </RLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fellowship;
