import React from "react";
import meetImg from "../assets/party.svg";
import trip from "../assets/trip.svg";
import hiking from "../assets/hiking.svg";
import celebration from "../assets/celebration.svg";
import party from "../assets/party.svg";
import group from "../assets/group.svg";
import festival from "../assets/festival.svg";
import waiting from "../assets/waiting.svg";

function Section({ reversed, imageSrc, headerTitle, description }) {
  return (
    <div className="flex flex-col justify-center items-center w-full  py-20">
      <h1 className="bg-danger px-10 py-1 rounded-full font-Lobster">
        {headerTitle}
      </h1>
      <div className="flex flex-col md:flex-row  w-[80%] justify-center items-center gap-y-20">
        {/* <img src={`/src/assets/${imageSrc}.svg`} alt="" className="w-2/5" /> */}

        {reversed ? (
          <img src={`/src/assets/${imageSrc}.svg`} alt="" className="w-2/5" />
        ) : (
          <>
            <p className="w-3/4 text-2xl text-left">{description}</p>
          </>
        )}
        <div className="w-full flex justify-center items-center gap-x-44">
          {reversed ? (
            <p className="w-3/4 text-2xl font-sans text-left">{description}</p>
          ) : (
            <img src={`/src/assets/${imageSrc}.svg`} alt="" className="w-3/5" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Section;
