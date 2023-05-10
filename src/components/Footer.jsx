import wave from "../assets/svg/wave-footer.svg";
import icon from "../assets/svg/ICON.svg";

import {
  UilTwitter,
  UilFacebook,
  UilLinkedin,
  UilYoutube,
  UilInstagramAlt,
} from "@iconscout/react-unicons";

function Footer() {
  return (
    <div className=" flex flex-col text-white justify-evenly">
      <div className=" hidden xl:flex">
        <img src={wave} alt="" className="w-screen " />
      </div>
      <div className="bg-[#082123] w-full h-full lg:-mt-20 flex flex-col justify-center">
        <div className="flex w-full justify-between  px-10 py-10 md:py-20">
          <div class="w-full flex justify-center item-center">
            <img className="h-20 z-20" src={icon} alt="" />
          </div>
          <div className="flex flex-col md:flex-row justify-center md:mr-20 gap-x-10 gap-y-5 lg:gap-x-20 text-lg w-full">
            <div className="flex ">
              <h1 className="font-bold font-Lobster text-mainTed">Home</h1>
              <div className="flex gap-5 flex-wrap px-5 md:flex-col">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
              </div>
            </div>
            <div className="flex ">
              <h1 className="font-bold font-Lobster text-mainTed">About</h1>
              <div className="flex gap-5 flex-wrap px-5 md:flex-col">
                <p>About us</p>
              </div>
            </div>
            <div className="flex ">
              <h1 className="font-bold font-Lobster text-mainTed">
                Contact us
              </h1>
              <div className="flex gap-5 flex-wrap px-5 md:flex-col">
                <p>+251924472257</p>
                <p>Contact</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-white flex w-full justify-between px-10 md:px-60 py-5">
          <div>©2022 Linkify. All rights reserved.</div>
          <div className="flex gap-x-10">
            <UilTwitter className="text-blue-500 w-6 h-6 " />
            <UilFacebook className="text-blue-500 w-6 h-6 " />
            <UilLinkedin className="text-white w-6 h-6 " />
            <UilYoutube className="text-red-500 w-6 h-6 " />
            <UilInstagramAlt className="text-red-200 w-6 h-6 " />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
