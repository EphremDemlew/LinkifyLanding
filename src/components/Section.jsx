import React from "react";
import meetImg from "../assets/svg/party.svg?url";
import trip from "../assets/svg/trip.svg?url";
import hiking from "../assets/svg/hiking.svg?url";
import celebration from "../assets/svg/celebration.svg?url";
import party from "../assets/svg/party.svg?url";
import group from "../assets/svg/group.svg?url";
import festival from "../assets/svg/festival.svg?url";
import waiting from "../assets/svg/waiting.svg?url";

function Section({ reversed, imageSrc, headerTitle, description }) {
  return (
    <div className="flex flex-col justify-center items-center w-full  py-20 ">
      {/* <img src={meetImg} /> */}
      <h1 className="bg-danger px-10 mb-5 md:mb-0 py-1 rounded-full font-Lobster">
        {headerTitle}
      </h1>
      <div
        className={`flex ${
          reversed ? "flex-col" : "flex-col-reverse"
        }   md:flex-row  w-[80%] justify-center items-center gap-y-10`}
      >
        {/* <img src={`/src/assets/${imageSrc}.svg`} alt="" className="w-2/5" /> */}

        {reversed ? (
          <img
            src={`/src/assets/svg/${imageSrc}.svg`}
            alt=""
            className="w-2/5"
          />
        ) : (
          <>
            <p className="w-full md:w-3/4 text-lg md:text-2xl text-left">
              {description}
            </p>
          </>
        )}
        <div className="w-full flex justify-center items-center gap-x-44">
          {reversed ? (
            <p className="w-full md:w-3/4 text-lg md:text-2xl font-sans text-left">
              {description}
            </p>
          ) : (
            <img
              src={`/src/assets/svg/${imageSrc}.svg`}
              alt=""
              className="w-3/5"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Section;
