import React from "react";
import Image from "next/image";

function HomeDomain({
  title,
  description,
  link,
  img,
  right,
}) {
  return (
    <div className="py-14 px-6 md:px-60 md:py-16">
      <div className="bg-white grid md:grid-cols-4 rounded-3xl shadow-2xl ">
        <div className="flex justify-center">
          <div className="col-span-1 relative flex justify-center left-1/4 md:-left-10 -top-10 md:-top-14 w-coverpic transform md:scale-110 ">
            <Image
              className="rounded-3xl"
              src={
                "/assets/images/svg/" +
                img
              }
              width="350"
              height="350"
              // objectFit="cover"
            />
          </div>
        </div>
        <div className="col-span-3 pb-10 md:pt-10 px-10">
          <h1 className="text-3xl font-semibold mb-8">
            {title}
          </h1>
          <p className="text-lg break-words">
            {description}
          </p>

          <div className="flex justify-between md:justify-start">
            <a href={link}>
              <button
                type="submit"
                className="mt-6 px-10 py-4 bg-primaryColor-blue rounded-full  shadow-xl text-white font-semibold"
              >
                Learn More
              </button>
            </a>

            {/* <a
              href={link + "/#projects"}
            >
              <button
                type="submit"
                className="mt-6 px-6 py-4 md:ml-6 bg-blue-500 rounded-full shadow-xl text-white font-semibold"
              >
                Projects
              </button>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeDomain;
