// Component for displaying social media kinda likes, comments, retweeets!
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineRetweet } from "react-icons/ai";
import { TbMessageCircle } from "react-icons/tb";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";
import { useState } from "react";

export default function SocialMedia() {
  const [actions, setActions] = useState([
    { id: 1, icon: <TbMessageCircle size={24} />, count: 0, clicked: false },
    { id: 2, icon: <AiOutlineRetweet size={24} />, count: 0, clicked: false },
    { id: 3, icon: <IoHeartOutline size={24} />, count: 0, clicked: false },
    { id: 4, icon: <IoBookmarkOutline size={24} />, count: 0, clicked: false },
  ]);
  const [rating, setRating] = useState(0);
  const handleClick = (id) => {
    setActions((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.clicked ? item.count - 1 : item.count + 1,
              clicked: !item.clicked,
            }
          : item,
      ),
    );
  };
  const handleRating = (star, e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - left;

    if (clickX < width / 2) {
      setRating(star - 0.5);
    } else {
      setRating(star);
    }
  };

  return (
    <>
      <div className="w-full bg-white px-6 py-3 flex justify-around items-center rounded-full shadow-md">
        {actions.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`
        flex items-center gap-2 px-4 py-2 rounded-full
        transition-all duration-200 ease-in-out
        ${
          item.clicked
            ? "text-pink-500 bg-pink-100 scale-105"
            : "text-gray-500 hover:text-blue-500 hover:bg-gray-100"
        }
      `}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium">{item.count}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center gap-4 mt-2">
        <div className="flex bg-white px-6 py-3 rounded-full shadow-md">
          {[1, 2, 3, 4, 5].map((star) => {
            let icon;

            if (rating >= star) {
              icon = <MdStar />;
            } else if (rating >= star - 0.5) {
              icon = <MdStarHalf />;
            } else {
              icon = <MdStarBorder />;
            }

            return (
              <button
                key={star}
                onClick={(e) => handleRating(star, e)}
                className="text-3xl text-yellow-500 transition-transform duration-150 hover:scale-110"
              >
                {icon}
              </button>
            );
          })}
        </div>

        <div className="text-lg font-semibold text-gray-700">{rating} / 5</div>
      </div>
    </>
  );
}
