import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Card from "./components/Card";
import Section from "./components/Section";
import Footer from "./components/Footer";

import Nav from "./components/Nav";
import circleSketch from "./assets/circleSketch.svg";
import wave from "./assets/wave-white.svg";

import stroke from "./assets/stroke.svg";

import {
  UilAngleDown,
  UilAngleRight,
  UilAngleLeft,
} from "@iconscout/react-unicons";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="text-white flex flex-col h-[1100px] w-full  items-center mainBg ">
        <Nav />
        <div className="w-[90%]  bg-red- h-full text-center flex gap-x-20 justify-center items-center text-2xl md:text-3xl lg:text-7xl font-Lobster  ">
          <div className="flex flex-col justify-center items-center  px-20  py-10 rounded-full bg-[rgba(0,0,0,0.2)] ">
            <h1 className="relative w-[25ch] sm:w-[23ch] leading-relaxed ">
              We make connecting with people
              <span className="  pl-10 w-full flex flex-col justify-center ">
                <span className="text-danger z-30">easy.</span>
                <span className="absolute mx-auto -bottom-6  left-[40%] z-10  ">
                  <img src={stroke} alt="" className="text-red-900" />
                </span>
              </span>
            </h1>
            <button className=" bg-danger w-80  text-2xl flex justify-center items-center  mt-10 group hover:bg-opacity-90 rounded px-14 py-4">
              Get Started
              <UilAngleRight className="text-white  w-20 h-10 group-hover:pl-5 " />
            </button>
          </div>
          {/* <div className="flex flex-col justify-center items-center bg-[rgba(0,0,0,0.5)] backdrop-blur-3xl  py-10 rounded-3xl">
            <h1 className="relative  leading-relaxed  ">
              We make connecting with people
              <span className="  pl-10 w-full flex flex-col justify-center ">
                <span className="text-danger z-30">easy.</span>
                <span className="absolute mx-auto -bottom-6  left-[40%] z-10  ">
                  <img src={stroke} alt="" className="text-red-900" />
                </span>
              </span>
            </h1>
            <button className=" bg-danger w-80  text-2xl flex justify-center items-center  mt-10 group hover:bg-opacity-90 rounded px-14 py-4">
              Get Started
              <UilAngleRight className="text-white  w-20 h-10 group-hover:pl-5 " />
            </button>
          </div> */}
        </div>
        <a href="#">
          <UilAngleDown className="text-white mb-40 z-20 w-10 h-10 flex bg-danger rounded-full p-2 cursor-pointer animate-bounce" />
        </a>
      </div>

      <div className="flex flex-col justify-center items-center pt-32 bg-white text-left relative">
        <img src={wave} alt="" className="w-screen absolute -top-32 z-10" />
        <span className="text-5xl w-[85%] text-black mb-20 ">What new</span>
        <div className="relative flex justify-center items-center w-full ">
          <UilAngleLeft className="text-black  opacity-50 w-20 h-20 cursor-pointer hover:opacity-100  absolute left-10 top-44" />
          <div className=" w-[85%] bg-slate-100 p-10 rounded-lg flex gap-x-10 overflow-x-scroll scroll-smooth scrollbar-hide">
            <div>
              <Card className="" />
            </div>
            <div>
              <Card className="" />
            </div>
            <div>
              <Card className="" />
            </div>
            <div>
              <Card className="" />
            </div>
            <div>
              <Card className="" />
            </div>
            <div>
              <Card className="" />
            </div>
            <div>
              <Card className="" />
            </div>
          </div>

          <UilAngleRight className="text-black  opacity-50 w-20 h-20 cursor-pointer hover:opacity-100  absolute right-10 top-44" />
        </div>
      </div>
      <div className="flex flex-col text-left justify-center items-center pt-20 pb-10 bg-white ">
        <span className="text-5xl w-[80%] text-black mb-20">Trending</span>
        <div className="relative flex justify-center items-center w-full ">
          <div className=" w-[80%] bg-slate-100 p-10 rounded-lg grid grid-cols-4 gap-10  ">
            <div>
              <Card className="" />
            </div>
            <div>
              <Card className="" />
            </div>
            <div>
              <Card className="" />
            </div>
            <div>
              <Card className="" />
            </div>
            <div>
              <Card className="" />
            </div>
            <div>
              <Card className="" />
            </div>
            <div>
              <Card className="" />
            </div>
            <div>
              <Card className="" />
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="flex flex-col  bg-white text-center">
        <div className="bg-teal-500 pt-20 text-white">
          <h1 className="text-white text-5xl py-10 font-Lobster">
            What should you expect from <br />
            <span className="text-darkBG">linkify.</span>
          </h1>
          <Section
            reversed={true}
            imageSrc="party"
            headerTitle="Meet new People"
            description="Expand your social circle with ease. Meet new people who share your interests and passions."
          />
        </div>
        <div className="bg-purple-400 text-white ">
          <Section
            reversed={false}
            imageSrc="trip"
            headerTitle="Plan a trip"
            description="Adventure awaits. Plan your next trip with a group of like-minded individuals and make new friends along the way."
          />
        </div>
        <div className="bg-gray-900 text-white py-20">
          <Section
            reversed={true}
            imageSrc="waiting"
            headerTitle="No more Waiting InLine"
            description="Say goodbye to long wait times. With our innovative platform, skip the line and enjoy a hassle-free experience. Join now"
          />
        </div>
        <div className="bg-[#92E3A9] text-black">
          <Section
            reversed={false}
            imageSrc="festival"
            headerTitle="Find Parties and music Fests near your location."
            description="Discover live music and concerts like never before. Find festivals and events near you and enjoy your favorite artists live. Start exploring now."
          />
        </div>

        <div className="bg-gray-900 text-white py-20">
          <Section
            reversed={true}
            imageSrc="group"
            headerTitle="Expand Your Horizons: Meet New People"
            description="Expand your social circle and connect with people who share your passions and interests. Join our community and start making new friends today."
          />
        </div>
      </div>
      <div className="py-20 flex flex-col gap-y-10">
        <h1 className="text-black text-3xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicinging eelit <br />
          Voluptate.
        </h1>
        <div className="flex gap-x-20 justify-center items-center">
          <div className="w-1/6 rounded-md bg-darkBG-2 h-[420px] flex justify-center items-center">
            <h1 className="text-black font-bold text-xl ">Lorem</h1>
          </div>
          <div className="w-1/6 rounded-md bg-darkBG-2 h-[420px] flex justify-center items-center">
            <h1 className="text-black font-bold text-xl ">Lorem</h1>
          </div>
          <div className="w-1/6 rounded-md bg-darkBG-2 h-[420px] flex justify-center items-center">
            <h1 className="text-black font-bold text-xl ">Lorem</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-black py-20">
        <h1 className="text-darkBG text-5xl py-10 font-Lobster">Categories</h1>
        <div className="grid grid-cols-4 grid-rows-10 w-80% gap-x-20  py-14">
          <div className="w-56 rounded-md bg-orange-2 h-56 flex justify-center items-center">
            <p>Lorem</p>
          </div>
          <div className="w-56 mt-20 rounded-md bg-white h-56 flex justify-center items-center">
            <p className="text-black">Lorem</p>
          </div>
          <div className="w-56 rounded-md bg-green-2 h-56 flex justify-center items-center">
            <p>Lorem</p>
          </div>
          <div className="w-56 mt-20 rounded-md bg-brown-2 h-56 flex justify-center items-center">
            <p>Lorem</p>
          </div>
          <div className="w-56 rounded-md bg-green-2 h-56 flex justify-center items-center">
            <p>Lorem</p>
          </div>
          <div className="w-56 mt-20 rounded-md bg-white h-56 flex justify-center items-center">
            <p className="text-black">Lorem</p>
          </div>
          <div className="w-56 rounded-md bg-orange-2 h-56 flex justify-center items-center">
            <p>Lorem</p>
          </div>
          <div className="w-56 mt-20 rounded-md bg-brown-2 h-56 flex justify-center items-center">
            <p>Lorem</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-10 py-10  text-black">
        <p className="text-4xl w-[50%] font-Lobster">
          Love to hear from you,
          <br />
          Get in touch <span>&#128075;</span>
        </p>
        <div className="w-[50%]  flex flex-col gap-y-10">
          <div className="flex gap-x-20 w-full ">
            <div className="flex flex-col gap-y-1 w-full">
              <label htmlFor="name">Your Name</label>
              <input
                className="px-10 text-black outline-none  py-5 rounded w-full"
                type="text"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-y-1 w-full">
              <label htmlFor="email">Your Email</label>
              <input
                className="px-10 text-black outline-none  py-5 rounded w-full"
                type="text"
                id="email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-1 w-full">
            <label htmlFor="msg">Message</label>
            <textarea
              className="px-10 py-10 rounded w-full
              text-black outline-none"
              rows={10}
              id="msg"
            ></textarea>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
