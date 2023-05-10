function Section({ reversed, imageSrc, headerTitle, description }) {
  return (
    <div className="flex flex-col justify-center items-center w-full  py-20 ">
      {/* <img src={meetImg} /> */}
      <h1 className="bg-danger px-10 mb-5 lg:mb-0 py-1 rounded-full font-Lobster">
        {headerTitle}
      </h1>
      <div
        className={`flex ${
          reversed ? "flex-col" : "flex-col-reverse"
        }   md:flex-row  w-[80%] justify-center items-center gap-y-10`}
      >
        {reversed ? (
          <img src={`/${imageSrc}.svg`} alt="" className="w-2/5" />
        ) : (
          <>
            <p className="w-full  md:w-4/5  lg:w-3/4text-lg  md:text-xl lg:text-2xl text-left">
              {description}
            </p>
          </>
        )}
        <div className="w-full flex justify-center items-center gap-x-44">
          {reversed ? (
            <p className="w-full  md:w-4/5  lg:w-3/4text-lg  md:text-xl lg:text-2xl font-sans text-left">
              {description}
            </p>
          ) : (
            <img src={`/${imageSrc}.svg`} alt="" className="w-3/5" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Section;
