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
    <Link href={link}>
      <div>
        <FontAwesomeIcon
          icon={["fab", icon]}
          size="lg"
          color="gray"
        />
      </div>
    </Link>
  );
}

export default function MemberBadge({details}) {

  const {name, title, image, instagram, fb, email, linkedin} = details

  return (
    <div className="group mb-24 h-80 w-64 rounded-xl pt-10">
      <div className="group-hover:transition group-hover:duration-500 group-hover:ease-in-out group-hover:transform mx-auto h-48 w-48  bg-green-500 rounded-full justify-self-center">
        {/* <Image src=""/> */}
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
        <Icon icon="instagram" link={instagram} />
        <Icon icon="facebook" link={fb} />
        <Link href={email}>
          <FontAwesomeIcon
            icon={faEnvelope}
            color="gray"
            size="lg"
          />
        </Link>
        <Icon icon="linkedin" link={linkedin} />
      </div>
    </div>
  );
}