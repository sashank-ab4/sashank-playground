import { FaGithub } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const navbarItems = [
    { page: "Playground", path: "/playground" },
    { page: "About", path: "/about" },
    { page: "Contact", path: "/contact" },
  ];
  return (
    <header className=" absolute top-0 left-0 w-full h-20 shadow-md bg-[#ddd0c8]">
      <div className=" max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        <div className=" text-xl font-bold tracking-wider uppercase">
          Sashank
        </div>
        {/* center links */}
        <nav className=" flex gap-10 text-sm font-medium uppercase ">
          {/*  <div>Playground</div>
          <div>About</div>
          <div>Contact</div> */}
          {navbarItems.map((item) => (
            <NavLink
              key={item.page}
              to={item.path}
              className={({ isActive }) =>
                `transition ${isActive ? "text-[#6c86ab] font-semibold" : "text-[#323232] hover:text-[#6c86ab]"}`
              }
            >
              {item.page}
            </NavLink>
          ))}
        </nav>
        <div>
          <button className="px-4 py-2 border rounded-full hover:bg-[#323232]/40  transition cursor-pointer">
            <FaGithub size={26} />
          </button>
        </div>
      </div>
    </header>
  );
}
