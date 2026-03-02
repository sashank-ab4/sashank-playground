import { useState } from "react";

export default function SeatBooking() {
  const SEC_A = 6;
  const SEC_B = 8;
  const ROWS = 6;

  const [seatsBooked, setSeatsBooked] = useState([]);
  const [seatsSelected, setSeatsSelected] = useState([]);

  function selectSeat(seatNumber) {
    if (seatsBooked.includes(seatNumber)) return;

    setSeatsSelected((prevSeats) =>
      prevSeats.includes(seatNumber)
        ? prevSeats.filter((seat) => seat !== seatNumber)
        : [...prevSeats, seatNumber],
    );
  }

  function bookSeats() {
    if (seatsSelected.length === 0) {
      alert("Please select at least one seat");
      return;
    }

    setSeatsBooked((prevSeats) => [...prevSeats, ...seatsSelected]);
    setSeatsSelected([]);
  }

  function clearSeats() {
    setSeatsSelected([]);
  }

  function resetAll() {
    setSeatsBooked([]);
    setSeatsSelected([]);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Screen */}
      <div className="mb-10 w-3/4 h-6 bg-linear-to-r from-gray-400 to-gray-600 rounded-full text-center text-white text-sm tracking-widest flex items-center justify-center shadow-lg">
        SCREEN THIS WAY
      </div>

      {/* Seats */}
      <div className="flex flex-col gap-4">
        {[...Array(ROWS)].map((_, rowIndex) => {
          const rowLetter = String.fromCharCode(65 + rowIndex);
          let seatCounter = 1;

          const renderSection = (count) =>
            Array.from({ length: count }).map(() => {
              const seatNumber = `${rowLetter}${seatCounter++}`;

              const isBooked = seatsBooked.includes(seatNumber);
              const isSelected = seatsSelected.includes(seatNumber);

              return (
                <div
                  key={seatNumber}
                  onClick={() => selectSeat(seatNumber)}
                  className={`
                    w-9 h-9 rounded flex items-center justify-center text-xs font-semibold cursor-pointer transition-all duration-200
                    ${isBooked ? "bg-gray-600 text-white cursor-not-allowed" : ""}
                    ${
                      !isBooked && isSelected
                        ? "bg-green-500 text-white scale-105"
                        : ""
                    }
                    ${
                      !isBooked && !isSelected
                        ? "bg-gray-300 hover:bg-gray-400"
                        : ""
                    }
                  `}
                >
                  {seatNumber}
                </div>
              );
            });

          return (
            <div key={rowIndex} className="flex items-center gap-6">
              {/* Row Label */}
              <span className="w-6 text-right font-bold text-gray-700">
                {rowLetter}
              </span>

              {/* Left Section */}
              <div className="flex gap-2">{renderSection(SEC_A)}</div>

              {/* Middle Section */}
              <div className="flex gap-2">{renderSection(SEC_B)}</div>

              {/* Right Section */}
              <div className="flex gap-2">{renderSection(SEC_A)}</div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="text-sm text-gray-700">
          Selected Seats:{" "}
          <span className="font-semibold">
            {seatsSelected.length > 0 ? seatsSelected.join(", ") : "None"}
          </span>
        </div>

        {/*  <div className="flex gap-4">
          <button
            onClick={bookSeats}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Book Seats
          </button>

          <button
            onClick={clearSeats}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
          >
            Clear Selection
          </button>

          <button
            onClick={resetAll}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Reset All
          </button>
        </div> */}
        <div className="flex gap-3 border-2 p-1 rounded-full border-gray-400">
          {[
            {
              id: 1,
              label: "Book Seats",
              action: bookSeats,
            },
            {
              id: 2,
              label: "Clear Selection",
              action: clearSeats,
            },
            {
              id: 3,
              label: "Reset all",
              action: resetAll,
            },
          ].map(({ id, label, action }) => (
            <button
              key={id}
              onClick={action}
              className="px-4 py-2 bg-black text-white  hover:bg-red-700 transition rounded-full"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            Available
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            Selected
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-600 rounded"></div>
            Booked
          </div>
        </div>
      </div>
    </div>
  );
}
