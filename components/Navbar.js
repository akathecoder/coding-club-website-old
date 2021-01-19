import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div>
      <header className="flex justify-between content-center bg-fixed bg-backgroundColor-main p-4  ">
        <h1 className="lg:text-3xl text-xl my-2 mx-4 text-gray-800 font-semibold">
          S.P.A.R.K.S
        </h1>

        <button className="md:hidden">
          <div>
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              color="black"
            />
          </div>
        </button>

        <div className="lg:text-xl my-2 text-gray-700 hidden md:block ">
          <ul className="flex gap-6">
            <li>
              <Link href="/">Home</Link>
              <hr className="border-t-4 border-blue-400" />
            </li>
            {/* <li c>
              <Link href="/">Blog</Link>
              <hr className="border-t-4 border-blue-300" />
            </li> */}
            <li c>
              {" "}
              <Link href="/domains">
                Domains
              </Link>
              <hr className="border-t-4 border-blue-300 border-none" />
            </li>
            <li c>
              {" "}
              <Link href="/events">
                Events
              </Link>
              <hr className="border-t-4 border-blue-300 border-none" />
            </li>
            <li c>
              {" "}
              <Link href="/projects">
                Project Expo
              </Link>
              <hr className="border-t-4 border-blue-300 border-none" />
            </li>
            <li className="mr-4">
              {" "}
              <Link href="/contact">
                Contact
              </Link>
              <hr className="border-t-4 border-blue-300 border-none" />
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
