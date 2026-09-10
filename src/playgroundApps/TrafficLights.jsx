import { useEffect, useState } from "react";
const trafficStates = {
  red: {
    duration: 4000,
    backgroundColor: "bg-red-500",
    nextColor: "yellow",
  },
  yellow: {
    duration: 1000,
    backgroundColor: "bg-yellow-500",
    nextColor: "green",
  },
  green: {
    duration: 5000,
    backgroundColor: "bg-green-500",
    nextColor: "red",
  },
};
export default function TrafficLights() {
  const [currentColor, setCurrentColor] = useState("red");
  useEffect(() => {
    const { duration, nextColor } = trafficStates[currentColor];
    const timerId = setTimeout(() => {
      setCurrentColor(nextColor);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);
  return (
    <>
      <div>
        <h1 className="mb-2 text-3xl">Traffic Lights Simulator!</h1>
        <div className=" bg-black p-4 flex flex-col rounded-xl gap-3 w-fit ">
          {Object.keys(trafficStates).map((color) => (
            <div
              key={color}
              className={`border-2 border-gray-700  transition-all duration-100 ${color === currentColor ? trafficStates[color].backgroundColor : "bg-gray-500"}  w-17 h-17 rounded-full `}
            />
          ))}
        </div>
      </div>
    </>
  );
}
