import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <header className="flex justify-between content-center bg-fixed bg-backgroundColor-main p-4">
        <h1 className="text-3xl my-2 mx-4 text-gray-800 font-semibold">
          S.P.A.R.K.S
        </h1>

        {/* <div>
          <Image
            src="/assets/images/SPARKS_original.svg"
            width="150"
            height="150"
          />
        </div> */}

        <div className="text-xl my-2 text-gray-700 ">
          <ul className="flex gap-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            {/* <li c>
              <Link href="/">Blog</Link>
            </li> */}
            <li c>
              {" "}
              <Link href="/">
                Domains
              </Link>
            </li>
            <li c>
              {" "}
              <Link href="/">
                Events
              </Link>
            </li>
            <li c>
              {" "}
              <Link href="/">
                Project Expo
              </Link>
            </li>
            <li className="mr-4">
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
