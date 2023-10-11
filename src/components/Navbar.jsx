import { useState } from "react";
import logo from "../assets/getdentallogo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { animated, useSpring } from "@react-spring/web";

function Navbar() {
  const [show, setShow] = useState(false);

  const spring = useSpring({
    form: {
      transform: show ? "translate(-100%, 0)" : "translate(0%,0)",
      opacity: show ? 1 : 0,
    },
    to: {
      transform: show ? "translate(0%,0)" : "translate(-100%, 0)",
      opacity: show ? 1 : 0,
    },
  });

  return (
    <>
      <div className="mx-7 mt-5 md:mx-20">
        <div className="flex items-center justify-between">
          <div
            className="md:hidden"
            onClick={() => {
              setShow((current) => !current);
            }}
          >
            <img src={menu} alt="" className="" />
          </div>
          <animated.div
            className={`absolute top-0 left-0 border w-full h-full bg-[#1E4D9B] text-white`}
            style={{ ...spring }}
          >
            <div className="flex justify-between mx-5 my-5">
              <img src={logo} alt="" className="w-36" />
              <img
                src={close}
                alt=""
                className="ml-auto w-[30px] m-2 "
                onClick={() => {
                  setShow((current) => !current);
                }}
              />
            </div>
            <div className="flex flex-col gap-2 mx-5 text-4xl">
              <a href="/">Home</a>
              <a href="#services">Services</a>
              <a href="">Contact Us</a>
            </div>
          </animated.div>
          <div className="ml-5 md:ml-0">
            <img src={logo} alt="" className="w-40" />
          </div>
          <div className="hidden md:flex justify-between mr-20">
            <a href="#" className="py-1.5 px-3 group transition duration-300">
              Home
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#5D93F0]"></span>
            </a>
            <a href="#" className="py-1.5 px-3 group transition duration-300">
              Services
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#5D93F0]"></span>
            </a>
            <a href="#" className="py-1.5 px-3 group transition duration-300">
              Contact Us
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#5D93F0]"></span>
            </a>
          </div>
          <button className="rounded-md border bg-[#5D93F0] text-sm text-white py-2 px-5 transition duration-300 hover:bg-[#FFFFFF] hover:text-[#5D93F0] hover:border-[#5D93F0]">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
