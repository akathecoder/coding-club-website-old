import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

export default function MemberBadge() {
  return (
    <div className="h-80 w-64 rounded-3xl pt-5">
      <div className="mx-auto h-48 w-48  bg-green-500 rounded-full justify-self-center">
        {/* <Image src=""/> */}
      </div>
      <div className="mx-auto mt-10 grid grid-cols-4 align-middle justify-items-center">
        <FontAwesomeIcon
          icon={["fab", "instagram"]}
          color="gray"
          size="lg"
        />
        <FontAwesomeIcon
          icon={["fab", "facebook"]}
          color="gray"
          size="lg"
        />
        <FontAwesomeIcon
          icon={faEnvelope}
          color="gray"
          size="lg"
        />
        <FontAwesomeIcon
          icon={["fab", "linkedin"]}
          color="gray"
          size="lg"
        />
      </div>
    </div>
  );
}
