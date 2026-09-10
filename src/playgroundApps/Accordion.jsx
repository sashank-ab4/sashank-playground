import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
const items = [
  {
    title: "2015",
    content: "Mumbai Indians",
  },
  {
    title: "2016",
    content: "Sunrisers Hyderabad",
  },
  {
    title: "2017",
    content: "Mumbai Indians",
  },
  {
    title: "2018",
    content: "Chennai Super Kings",
  },
  {
    title: "2019",
    content: "Mumbai Indians",
  },
  {
    title: "2020",
    content: "Mumbai Indians",
  },
];
export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const onToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return !items || items.length === 0 ? (
    "No Items Available"
  ) : (
    <div>
      <h2>IPL Winners (2015-2020) </h2>
      <div className="w-full max-w-2xl m-auto p-5 bg-gray-300 rounded-2xl border">
        {items.map((item, index) => (
          <>
            <div key={index} className="mb-3 rounded-2xl">
              <button
                onClick={() => onToggle(index)}
                className="w-full p-2 text-left bg-gray-200  rounded-xl cursor-pointer text-lg font-bold border"
              >
                {item.title}
                {openIndex === index ? (
                  <FaArrowUp size={10} className=" float-right" />
                ) : (
                  <FaArrowDown size={10} className="float-right" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-2 bg-[#f1ecec] border-t-white">
                  {item.content}
                </div>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
