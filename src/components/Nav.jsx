import React, { useState } from "react";
import icon from "../assets/svg/ICON.svg";
import { UilAlignCenterAlt } from "@iconscout/react-unicons";
function Nav() {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <div className="flex items-center justify-between h-20 w-full relative p-20 ">
      <div className="flex justify-between items-center w-full relative">
        <div>
          <img className="h-20" src={icon} alt="" />
        </div>
        <div className="hidden md:flex gap-x-10 text-lg text-white items-center">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact Us</a>
          <a
            href="https://linkify-eth.vercel.app/login"
            className="border-[1px] border-danger rounded px-10 py-3 hover:bg-danger"
          >
            Login
          </a>
          <a
            href="https://linkify-eth.vercel.app/signup"
            className=" bg-danger border-[1px] border-danger hover:bg-opacity-90 rounded px-10 py-3"
          >
            Sign up
          </a>
        </div>
      </div>
      <div className="absolute right-10">
        <UilAlignCenterAlt
          className="text-white w-7 flex md:hidden cursor-pointer"
          onClick={() => setNavToggle((prev) => !prev)}
        />
      </div>
      {navToggle && (
        <div className="absolute md:hidden top-32 left-0 w-[90%]  bg-gray-900 bg-opacity-90 z-50 flex flex-col gap-5 p-5 rounded-b-xl ml-[5%] ">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact Us</a>
          <a
            href="http://localhost:5173/login"
            className="border-[1px] border-danger rounded px-10 py-3 hover:bg-danger"
          >
            Login
          </a>
          <a
            href="http://localhost:5173/signup"
            className=" bg-danger border-[1px] border-danger hover:bg-opacity-90 rounded px-10 py-3"
          >
            Sign up
          </a>
        </div>
      )}
    </div>
  );
}

export default Nav;
