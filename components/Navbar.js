import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <div>
      <header className="bg-fixed bg-backgroundColor-main p-4 flex justify-between">
        <a href="/">
          {/* <h1 className="lg:text-3xl text-xl my-2 mx-4 text-gray-800 font-semibold">
            S.P.A.R.K.S
          </h1> */}
          <Image
            className="my-2 mx-4"
            src="/assets/images/SPARKS_mini.svg"
            width="40"
            height="40"
          />
        </a>
        <div className="flex justify-end mx-2 md:mx-6 gap-2 md:gap-4 items-center">
          <a
            href="https://www.instagram.com/sparks_jklu/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              color="black"
            />
          </a>
          <a
            href="https://github.com/CodingClubJKLU"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              color="black"
            />
          </a>
          <a
            href="https://chat.whatsapp.com/DOPt14uV1H0EbXojJpB0Nf"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="lg"
              color="black"
            />
          </a>

          {/* <img
            src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
            width="32"
            height="32"
            alt="social-icon"
          />
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            width="32"
            height="32"
            alt="social-icon"
          />
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp.png"
            width="32"
            height="32"
            alt="social-icon"
          /> */}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
