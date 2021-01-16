import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <header className="flex justify-between content-center bg-fixed bg-gray-200 p-4">
        <h1 className="text-3xl my-2 mx-4 text-primaryColor-100 font-semibold">
          S.P.A.R.K.S
        </h1>

        <div className="text-2xl my-2 text-primaryColor-100">
          <ul className="flex">
            <li>
              <Link href="/">Home</Link>
            </li>
            {/* <li className="ml-4">
              <Link href="/">Blog</Link>
            </li> */}
            <li className="ml-4">
              {" "}
              <Link href="/">
                Domains
              </Link>
            </li>
            <li className="ml-4">
              {" "}
              <Link href="/">
                Events
              </Link>
            </li>
            <li className="ml-4">
              {" "}
              <Link href="/">
                Project Expo
              </Link>
            </li>
            <li className="ml-4 mr-4">
              {" "}
              <Link href="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
