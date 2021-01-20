import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-backgroundColor-main p-4 text-gray-600 ">
      <hr className="m-4 border-gray-400  " />
      <h1 className=" flex justify-center">
        Made with ❤️ by&nbsp;
        <a
          href="https://github.com/akathecoder"
          target="_blank"
        >
          @akathecoder
        </a>
        &nbsp;&&nbsp;
        <a
          href="https://github.com/akathecoder"
          target="_blank"
        >
          @rg12301
        </a>
        &nbsp;in 🇮🇳
      </h1>
    </footer>
  );
}

export default Footer;
