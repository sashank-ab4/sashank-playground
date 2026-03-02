import { NavLink, Outlet } from "react-router-dom";
import { categoriesAndItems } from "../../Utils/categoryConfig";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Playground() {
  const [openCategory, setOpenCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className=" fixed flex min-h-[90vh]">
        <aside
          className={`
      w-64 bg-black text-white p-6
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
    `}
        >
          <h2 className=" flex justify-between text-lg font-bold uppercase tracking-wide mb-6">
            Playground
            <button
              className="border rounded bg-gray-500 p-1"
              onClick={() => setIsOpen(!isOpen)}
            >{`<`}</button>
          </h2>
          {categoriesAndItems.map((category, index) => (
            <div
              key={category.title}
              className={`pb-4 mb-4 ${
                index !== categoriesAndItems.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >
              <button
                onClick={() =>
                  setOpenCategory(
                    openCategory === category.title ? null : category.title,
                  )
                }
                className={`w-full flex items-center justify-between 
             px-3 py-2 rounded-md text-lg uppercase tracking-wider
              transition-all duration-200 ${openCategory === category.title ? "bg-gray-100 text-[#6c86ab]" : "hover:bg-gray-100"}`}
              >
                {category.title}
                <IoIosArrowForward
                  className={`transition-transform duration-300 ${
                    openCategory === category.title ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openCategory === category.title && (
                <div className=" flex flex-col gap-2 pl-3 mt-2">
                  {category.items.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `text-sm px-2 py-1 rounded ${
                          isActive
                            ? "bg-[#6c86ab] text-white"
                            : "hover:bg-gray-200"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>
        <main
          className={`
      flex-1 transition-all duration-300
      ${isOpen ? "ml-0" : "ml-0"}
    `}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
}
