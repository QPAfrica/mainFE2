import { useState } from "react";

export default function TabsComponent({ links }) {
  const [openTab, setOpenTab] = useState(links[0].name);

  return (
    <div className="w-full bg-gray-900">
      <div className="max-w-screen-md md:mx-auto mx-3">
        <div>
          <div className="border-b-[1px] top-0 z-200 sticky bg-gray-900 border-gray-500 sm:px-28">
            <ul
              className={`grid ${
                links.length === 4 ? "grid-cols-4" : "grid-cols-2"
              } gap-2 items-center justify-center`}
            >
              {links.map((tab) => (
                <li
                  key={tab.name}
                  className={`${
                    tab.name === openTab
                      ? "border-b-2 font-bold duration-300 ease-in-out  border-white"
                      : "border-b-2 border-gray-900"
                  } text-center`}
                >
                  <a
                    // href={tab.name}
                    onClick={() => setOpenTab(tab.name)}
                    className="inline-block py-3 cursor-pointer text-white"
                  >
                    {tab.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-3 mt-6 text-white">
            {links.map((tab) => (
              <div
                key={tab.name}
                className={tab.name === openTab ? "block" : "hidden"}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
