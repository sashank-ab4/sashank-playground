import { useEffect, useRef, useState } from "react";
const OTP_DIGITS = 6;

export default function OtpInput() {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS).fill(""));
  const refArray = useRef([]);
  useEffect(() => {
    refArray.current[0]?.focus();
  }, []);

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;
    const newValue = value.trim();
    const newArray = [...inputArr];
    newArray[index] = newValue.slice(-1);
    setInputArr(newArray);
    newValue && refArray.current[index + 1]?.focus();
  };

  const handleKeyPress = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArray.current[index - 1]?.focus();
    }
  };
  return (
    <div>
      <h1 className="font-semibold pl-2">Validate OTP</h1>
      {inputArr.map((input, index) => {
        return (
          <input
            key={index}
            value={inputArr[index]}
            type="text"
            onChange={(e) => handleOnChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyPress(e, index)}
            ref={(input) => {
              refArray.current[index] = input;
            }}
            className="border-black border h-7 w-7 text-center m-0.5 font-semibold "
          />
        );
      })}
      <button className="border p-0.5 bg-green-400 rounded-md border-green-100 cursor-pointer ml-2 font-light">
        Check
      </button>
    </div>
  );
}
