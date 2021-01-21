import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import Image from "next/image";

function Hero() {
  return (
    <div className="md:py-32 py-10 bg-backgroundColor-main min-h-screen">
      <div className="z-10">
        <h1 className="flex md:justify-center text-center text-4xl px-6 md:text-6xl font-semibold md:leading-loose leading-relaxed">
          We are a community of <br />
          Programmers right here <br />
          at JKLU.
        </h1>
      </div>

      <div className="flex-initial sm:absolute sm:bottom-24   sm:right-40  transform sm:-rotate-6  p-3">
        <Image
          src="/assets/images/svg/undraw_code_thinking_1jeh.svg"
          height="225"
          width="541"
        />{" "}
      </div>

      <div className="flex justify-center absolute w-3 mx-auto left-0 right-0 bottom-0 animate-bounce cursor-pointer">
        <Link
          className=" mx-6 px-4 py-5 bg-primaryColor-blue rounded-full my-2 shadow-xl "
          activeClass="active"
          to="domains"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >
          <FontAwesomeIcon
            icon={faArrowDown}
            size="lg"
            color="white"
          />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
