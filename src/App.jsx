import { useState } from "react";
import reactLogo from "./assets/svg/react.svg";
import Card from "./components/Card";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import circleSketch from "./assets/svg/circleSketch.svg";
import wave from "./assets/svg/wave-white.svg";
import mainBG from "./assets/image/pexel.jpg";
import stroke from "./assets/svg/stroke.svg";

import {
  UilAngleDown,
  UilAngleRight,
  UilAngleLeft,
} from "@iconscout/react-unicons";

// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="text-white flex flex-col h-screen w-full items-center bg-mainBG bg-no-repeat bg-cover bg-center">
        {/* <img src={mainBG} alt="" className="absolute h-screen w-screen " /> */}
        <Nav />
        <div className="w-[90%] h-full text-center flex flex-col gap-y-20  gap-x-20 justify-center items-center text-2xl md:text-3xl lg:text-7xl font-Lobster  ">
          <div className="flex flex-col justify-center items-center  ">
            <h1 className="relative  leading-relaxed rounded-full px-20 pt-5 bg-black bg-opacity-40 mt-20">
              We make connecting with people
              <span className="  lg:pl-10 w-full flex flex-col justify-center  mb-5">
                <span className="text-danger z-30">easy.</span>
                <span className="absolute mx-auto bottom-4  left-[40%] z-10 hidden lg:flex ">
                  <img src={stroke} alt="" className="text-red-900" />
                </span>
              </span>
            </h1>
            <a
              href="https://linkify-eth.vercel.app/home"
              className=" bg-danger w-72  text-xl flex justify-center items-center  mt-10 group hover:bg-opacity-90 rounded px-10 py-3"
            >
              Get Started
              <UilAngleRight className="text-white  w-20 h-10 group-hover:pl-5 " />
            </a>
          </div>
          <a href="#" className="h-32 flex mt-32">
            <UilAngleDown className="text-white mb-40 z-20 w-10 h-10 flex bg-danger rounded-full p-2 cursor-pointer animate-bounce" />
          </a>
        </div>
      </div>

      <div className="flex flex-col text-left justify-center items-center pt-20 pb-10 bg-white ">
        <span className="text-5xl w-[80%] text-black mb-10 font-Lobster">
          Trending
        </span>
        <div className="relative flex justify-center items-center w-full ">
          <div className="grid grid-cols-1 lg:grid-cols-4 w-[90%] gap-5 overflow-x-auto">
            <div className="flex lg:col-span-2 rounded w-[100%]  bg-wendy-pic bg-no-repeat bg-cover bg-center"></div>
            <div className="flex rounded col-start-3 w-full  lg:row-span-2  bg-main-pic bg-no-repeat bg-cover bg-top"></div>
            <div className="flex rounded w-[100%] h-80 bg-photo1-pic bg-no-repeat bg-cover bg-top"></div>
            <div className="flex rounded w-[100%] h-80 bg-event-pic bg-no-repeat bg-cover bg-top"></div>
            <div className="flex rounded w-[100%] h-80 bg-photo2-pic bg-no-repeat bg-cover bg-top"></div>
            <div className="flex rounded w-[100%] h-80 bg-photo3-pic bg-no-repeat bg-cover bg-top"></div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="flex flex-col  bg-white text-center">
        <div className="bg-teal-500 pt-20 text-white">
          <h1 className="text-white text-3xl md:text-5xl md:py-10 font-Lobster">
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
        <div className="flex gap-x-20 gap-y-5 justify-center items-center flex-wrap">
          <div className="w-72 rounded-md bg-orange-400 h-[420px] flex justify-center items-center hover:bg-darkBG-2        text-white cursor-pointer hover:ease-in  ">
            <h1 className=" font-bold text-xl ">Business</h1>
          </div>
          <div className="w-72 rounded-md bg-mainTed h-[420px] flex justify-center items-center hover:bg-darkBG-2     text-white cursor-pointer ">
            <h1 className=" font-bold text-xl ">Entertainment</h1>
          </div>
          <div className="w-72 rounded-md bg-teal-400 h-[420px] place-self-start flex justify-center items-center hover:bg-darkBG-2      text-white cursor-pointer">
            <h1 className=" font-bold text-xl ">Education</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-black py-20">
        <h1 className="text-darkBG text-5xl py-10 font-Lobster">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4 grid-rows-10 w-[80%] gap-x-16  py-14 place-items-center">
          <div
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/668295/pexels-photo-668295.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
            }}
            className="w-64 bg-cover  rounded-md  h-64 flex justify-center items-center shadow-lg cursor-pointer "
          >
            <p className="w-full h-full hover:bg-orange-2/40 flex justify-center items-center rounded-md text-white font-bold">
              Art & Entertainment
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
            }}
            className="w-64 xl:mt-20 rounded-md bg-cover h-64 flex justify-center items-center shadow-lg cursor-pointer hover:"
          >
            <p className="w-full h-full hover:bg-green-2/40 flex justify-center items-center rounded-md text-white font-bold">
              Sport & Fitness
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
            }}
            className="w-64 rounded-md bg-cover h-64 flex justify-center items-center shadow-lg cursor-pointer hover:"
          >
            <p className="w-full h-full hover:bg-green-2/40 flex justify-center items-center rounded-md text-black font-bold">
              Education
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600`,
            }}
            className="w-64 xl:mt-20 rounded-md bg-cover h-64 flex justify-center items-center shadow-lg cursor-pointer hover:"
          >
            <p className="w-full h-full hover:bg-brown-2/40 flex justify-center items-center rounded-md text-white font-bold">
              Business
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url(https://img.freepik.com/free-photo/high-angle-shot-delicious-traditional-ethiopian-food-with-vegetables-wooden-surface_181624-35933.jpg)`,
            }}
            className="w-64 rounded-md bg-cover h-64 flex justify-center items-center shadow-lg cursor-pointer hover:"
          >
            <p className="w-full h-full hover:bg-green-2/40 flex justify-center items-center rounded-md text-white font-bold">
              Food & Drink
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url(https://news-ug.churchofjesuschrist.org/media/orig/Ethiopia_Patients_waiting_for_lunch.png)`,
            }}
            className="w-64 xl:mt-20 rounded-md bg-cover h-64 flex justify-center items-center shadow-lg cursor-pointer hover:"
          >
            <p className="w-full h-full hover:bg-green-2/40 flex justify-center items-center rounded-md text-white font-bold">
              Charity & Causes
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url(https://gdb.voanews.com/65c072cc-5de3-4552-88dd-08533ab37bd0_w1200_r1.jpg)`,
            }}
            className="w-64 rounded-md bg-cover h-64 flex justify-center items-center shadow-lg cursor-pointer hover:"
          >
            <p className="w-full h-full hover:bg-green-2/40 flex justify-center items-center rounded-md text-white font-bold">
              Community
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url(https://ak.picdn.net/shutterstock/videos/1046533549/thumb/1.jpg?ip=x480)`,
            }}
            className="w-64 xl:mt-20 rounded-md bg-cover h-64 flex justify-center items-center shadow-lg cursor-pointer hover:"
          >
            <p className="w-full h-full hover:bg-brown-2/40 flex justify-center items-center rounded-md text-white font-bold">
              Family & Kids
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col justify-center items-center text-black py-20">
        <h1 className="text-darkBG text-5xl py-10 font-Lobster">Categories</h1>
        <div className="grid grid-cols-4 grid-rows-10 w-80% gap-x-20  py-14">
          <div className="w-64 rounded-md bg-orange-2h4-56 flex justify-center items-center">
            <p>Lorem</p>
          </div>
          <div className="w-64 xl:mt-20 rounded-md bg-white h-64 flex justify-center items-center">
            <p className="text-black">Lorem</p>
          </div>
          <div className="w-64 rounded-md bg-green-2 -456 flex justify-center items-center">
            <p>Lorem</p>
          </div>
          <div className="w-64 xl:mt-20 rounded-md bg-brown-2 -456 flex justify-center items-center">
            <p>Lorem</p>
          </div>
          <div className="w-64 rounded-md bg-green-2 -456 flex justify-center items-center">
            <p>Lorem</p>
          </div>
          <div className="w-64 xl:mt-20 rounded-md bg-white h-64 flex justify-center items-center">
            <p className="text-black">Lorem</p>
          </div>
          <div className="w-64 rounded-md bg-orange-2h4-56 flex justify-center items-center">
            <p>Lorem</p>
          </div>
          <div className="w-64 xl:mt-20 rounded-md bg-brown-2 -456 flex justify-center items-center">
            <p>Lorem</p>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col justify-center items-center gap-y-10 py-10  text-black">
        <p className="text-4xl w-[50%] font-Lobster">
          Love to hear from you,
          <br />
          Get in touch <span>&#128075;</span>
        </p>
        <div className="w-[80%] lg:w-[50%]  flex flex-col gap-y-10">
          <div className="flex gap-x-5 lg:gap-x-20 w-full ">
            <div className="flex flex-col gap-y-1 w-full">
              <label htmlFor="name">Your Name</label>
              <input
                className="px-5 md:px-10 text-black outline-none  py-3 md:py-5  rounded w-full"
                type="text"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-y-1 w-full">
              <label htmlFor="email">Your Email</label>
              <input
                className="px-5 md:x-10 text-black outline-none  py-3 md:py-5  rounded w-full"
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
