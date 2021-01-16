import React from "react";
import Image from "next/image";

function HomeDomain({
  title,
  description,
  link,
  right,
}) {
  return (
    <div className="bg-gray-300 mx-80 mt-10 p-0 flex rounded-3xl">
      <div className="m-0">
        <Image
          src="/assets/images/web-dev-1.jpg"
          width="350"
          height="350"
          objectFit="cover"
        />
      </div>
      <div className="mx-10 my-5 align-middle self-center">
        <h1 className="text-3xl font-semibold ">
          {title}
        </h1>
        <p className="text-lg break-words">
          {description}
        </p>

        <button
          type="submit"
          className=" mx-2 my-6 px-10 py-4 bg-blue-500 rounded-full my-2 shadow-xl text-white font-semibold"
        >
          Visit
        </button>

        <button
          type="submit"
          className=" mx-6 my-6 px-6 py-4 bg-blue-500 rounded-full my-2 shadow-xl text-white font-semibold"
        >
          Projects
        </button>
      </div>
    </div>
  );
}
export default HomeDomain;
