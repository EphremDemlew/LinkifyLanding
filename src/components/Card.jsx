import React from "react";
import { UilMapMarker } from "@iconscout/react-unicons";

function Card() {
  return (
    <div className="cardImg w-80 h-80 rounded">
      <div className="text-white flex group justify-start items-end bg-red-0 cursor-pointer hover:bg-darkBG hover:bg-opacity-50 p-5 w-full h-full">
        <div className=" hidden group-hover:block">
          <h1 className="text-2xl">Event title</h1>
          <span className="flex">
            <UilMapMarker className="text-danger w-5 h-5" />
            Lorem Ipsumasd
          </span>

          <p>sum asdLorpsumasdrem</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
