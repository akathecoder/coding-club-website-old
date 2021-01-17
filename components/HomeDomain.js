import React from "react";
import Image from "next/image";

function HomeDomain({
  title,
  description,
  link,
  right,
}) {
  if (right) {
    return (
      <div className="bg-gray-200 mx-80 mt-44 p-0 flex rounded-3xl relative h-96 shadow-2xl ">
        <div className="mx-10 my-5 align-middle self-center ml-16 ">
          <h1 className="text-3xl font-semibold mb-8">
            {title}
          </h1>
          <p className="text-lg break-words pr-24 ">
            {description}
          </p>

          <a href={link}>
            <button
              type="submit"
              className="  my-6 px-10 py-4 bg-blue-500 rounded-full  shadow-xl text-white font-semibold"
            >
              Visit
            </button>
          </a>

          <a href={link + "/#projects"}>
            <button
              type="submit"
              className=" mx-6 my-6 px-6 py-4 bg-blue-500 rounded-full shadow-xl text-white font-semibold"
            >
              Projects
            </button>
          </a>
        </div>

        <div className="transform scale-150 overflow-hidden">
          <Image
            className="rounded-2xl"
            src="/assets/images/web-dev-1.jpg"
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-gray-200 mx-80 mt-44 p-0 flex rounded-3xl relative h-96 shadow-2xl">
        <div className="transform scale-150 overflow-hidden">
          <Image
            className="rounded-2xl"
            src="/assets/images/web-dev-1.jpg"
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="mx-10 my-5 align-middle self-center ml-28">
          <h1 className="text-3xl font-semibold mb-8">
            {title}
          </h1>
          <p className="text-lg break-words">
            {description}
          </p>

          <a href={link}>
            <button
              type="submit"
              className=" mx-2 my-6 px-10 py-4 bg-blue-500 rounded-full  shadow-xl text-white font-semibold"
            >
              Visit
            </button>
          </a>

          <a href={link + "/#projects"}>
            <button
              type="submit"
              className=" mx-6 my-6 px-6 py-4 bg-blue-500 rounded-full shadow-xl text-white font-semibold"
            >
              Projects
            </button>
          </a>
        </div>
      </div>
    );
  }
}
export default HomeDomain;
