import wave from "../assets/wave-footer.svg";
import icon from "../assets/ICON.svg";

import {
  UilTwitter,
  UilFacebook,
  UilLinkedin,
  UilYoutube,
  UilInstagramAlt,
} from "@iconscout/react-unicons";

function Footer() {
  return (
    <div className="relative flex flex-col text-white">
      <div className="h-14">
        <img src={wave} alt="" className="w-screen absolute" />
      </div>
      <div className="bg-[#082123] w-full h-full mt-24 flex flex-col justify-center">
        <div className="flex w-full justify-between px-60 py-20">
          <div>
            <img className="h-20 z-20" src={icon} alt="" />
          </div>
          <div className="flex justify-end mr-20 gap-x-20 text-lg w-full">
            <div>
              <h1 className="font-bold font-Lobster">Home</h1>
              <p>Home</p>
              <p>About</p>
              <p>Contact</p>
            </div>
            <div>
              <h1 className="font-bold font-Lobster">About</h1>

              <p>Home</p>
              <p>About</p>
              <p>Contact</p>
            </div>
            <div>
              <h1 className="font-bold font-Lobster">Contact us</h1>

              <p>Home</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-white flex w-full justify-between px-60 py-5">
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
