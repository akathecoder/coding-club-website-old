import React from "react";
import Image from "next/image";

function ProjectCard({ data }) {
  const {
    name,
    developer,
    link,
    gh,
    image,
  } = data;

  return (
    <div className="m-5 text-center mx-5">
      <div className="rounded-3xl overflow-hidden bg-cover h-60 w-60">
        <div className="transform hover:scale-110 duration-500 bg-gray-300">
          <a href={gh}>
            {image && (
              <Image
                src={image}
                width="256"
                height="256"
              />
            )}
          </a>
        </div>
      </div>

      <h1 className="mt-5 text-xl font-semibold ">
        <a href={gh}>{name}</a>
      </h1>
      <h1 className="text-base font-normal">
        <a href={link}>{developer}</a>
      </h1>
    </div>
  );
}

export default ProjectCard;