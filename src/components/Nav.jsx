import React from "react";
import icon from "../assets/ICON.svg";
import { UilAlignCenterAlt } from "@iconscout/react-unicons";

function Nav() {
  return (
    <div className="flex items-center justify-between h-20 w-full relative p-20 ">
      <div className="flex justify-between items-center w-full">
        <div>
          <img className="h-20" src={icon} alt="" />
        </div>
        <div className="hidden sm:flex gap-x-10 text-lg text-white items-center">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact Us</a>
          <a
            href="#"
            className="border-[1px] border-danger rounded px-10 py-3 hover:bg-danger"
          >
            Login
          </a>
          <a
            href="#"
            className=" bg-danger border-[1px] border-danger hover:bg-opacity-90 rounded px-10 py-3"
          >
            Sign up
          </a>
        </div>
      </div>
      <div>
        <UilAlignCenterAlt className="text-white w-10 h-10 flex sm:hidden" />
      </div>
    </div>
  );
}

export default Nav;
