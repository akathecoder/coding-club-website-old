import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="md:py-32 py-10 bg-backgroundColor-main min-h-screen">
      <div>
        <h1 className="flex  md:justify-center md:text-center text-5xl px-6 md:text-6xl font-semibold md:leading-loose leading-relaxed ">
          We are a community of <br />
          Programmers right here <br />
          at JKLU.
        </h1>
      </div>

      <div className="flex justify-center absolute w-3 mx-auto left-0 right-0 bottom-10 animate-bounce">
        <a
          className=" mx-6 px-4 py-5 bg-primaryColor-blue rounded-full my-2 shadow-xl "
          href="/#domains"
        >
          <FontAwesomeIcon
            icon={faArrowDown}
            size="lg"
            color="white"
          />
        </a>
      </div>
    </div>
  );
}

export default Hero;
