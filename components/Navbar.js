import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div>
      <header className="bg-fixed bg-backgroundColor-main p-4 flex justify-between">
        <h1 className="lg:text-3xl text-xl my-2 mx-4 text-gray-800 font-semibold">
          S.P.A.R.K.S
        </h1>
        <div className="flex justify-end mx-2 md:mx-6 gap-2 md:gap-4 items-center">
          <img
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
          />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
