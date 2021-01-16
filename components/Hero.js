import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="py-32 bg-backgroundColor-main">
      <div>
        <h1 className="flex justify-center text-center leading-loose text-6xl font-semibold">
          We are a community of <br />
          Programmers right here <br />
          at JKLU.
        </h1>
      </div>

      <div className="flex justify-center my-14">
        <form action="">
          <label
            for="fname"
            className="text-2xl font-semiBold ml-4"
          >
            JOIN US
          </label>
          <br />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="placeholder placeholder-gray-500 p-4 rounded-full w-96 ml-2 my-2 shadow-lg  "
          />

          <button
            type="submit"
            className=" mx-6 px-5 py-4 bg-blue-500 rounded-full my-2 shadow-xl "
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              size="lg"
              color="white"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
