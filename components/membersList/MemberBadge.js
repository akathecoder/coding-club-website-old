import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

function Icon({ icon, link }) {
  return (
    <a href={link} target="_blank">
      <div className="cursor-pointer">
        <FontAwesomeIcon
          icon={["fab", icon]}
          size="lg"
          color="gray"
        />
      </div>
    </a>
  );
}

export default function MemberBadge({
  details,
}) {
  const {
    name,
    title,
    image,
    instagram,
    github,
    email,
    linkedin,
  } = details;

  console.log(details);

  return (
    <div className="bg-white rounded-3xl shadow-2xl py-2 px-12">
      <div className="mb-24 h-80 w-64 rounded-xl pt-10">
        <div className="mx-auto h-48 w-48 rounded-full justify-self-center overflow-hidden">
          <Image
            src={image}
            width="256"
            height="256"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col mt-5">
          <h2 className="mx-auto font-bold mt-5 align-middle justify-center">
            {name}
          </h2>

          <h3 className="mx-auto font-medium align-middle justify-center">
            {title}
          </h3>
        </div>
        <div className="mx-auto mt-5 grid grid-cols-4 align-middle justify-items-center">
          <Icon
            icon="instagram"
            link={instagram}
          />
          <Icon
            icon="github"
            link={github}
          />
          <Link
            href={"mailto:" + email}
          >
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faEnvelope}
                color="gray"
                size="lg"
              />
            </div>
          </Link>
          <Icon
            icon="linkedin"
            link={linkedin}
          />
        </div>
      </div>
    </div>
  );
}
