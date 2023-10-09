import logo from "../assets/getdentallogo.svg";
import menu from "../assets/menu.svg";

function Navbar() {
  return (
    <>
      <div className="mx-7 mt-5">
        <div className="flex items-center justify-between">
          <div className="md:hidden">
            <img src={menu} alt="" className="" />
          </div>
          <div className="ml-5 md:ml-0">
            <img src={logo} alt="" className="w-36" />
          </div>
          <div className="hidden md:flex justify-between">
            <a href="" className="py-1.5 px-3">
              Home
            </a>
            <a href="" className="py-1.5 px-3">
              Services
            </a>
            <a href="" className="py-1.5 px-3">
              Contact Us
            </a>
          </div>
          <button className="rounded-md bg-[#5D93F0] py-1.5 px-3">
            <p className="text-sm text-white">Login</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
