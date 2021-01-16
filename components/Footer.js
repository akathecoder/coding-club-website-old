import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-300 absolute inset-x-0 bottom-0 p-4 ">
      <div className="flex grid grid-cols-2">
        <h1>S.P.A.R.K.S</h1>
        <div className="grid grid-cols-4">
          <div>
            <h1>Domains</h1>
            <h3>Inner Text</h3>
            <h3>Inner Text</h3>
            <h3>Inner Text</h3>
            <h3>Inner Text</h3>
            <h3>Inner Text</h3>
          </div>

          <div>
            <h1>Domains</h1>
            <h3>Inner Text</h3>
            <h3>Inner Text</h3>
            <h3>Inner Text</h3>
            <h3>Inner Text</h3>
            <h3>Inner Text</h3>
          </div>

          <div>
            <h1>Domains</h1>
            <h3>Inner Text</h3>
            <h3>Inner Text</h3>
            <h3>Inner Text</h3>
            <h3>Inner Text</h3>
            <h3>Inner Text</h3>
          </div>

          <div>
            <h1>Domains</h1>
            <h3>Inner Text</h3>
            <h3>Inner Text</h3>
            <h3>Inner Text</h3>
            <h3>Inner Text</h3>
            <h3>Inner Text</h3>
          </div>
        </div>
      </div>

      <hr className="m-4 border-black " />

      <div className="flex justify-end mx-4 gap-4 items-center">
        <h2>Follow us: </h2>
        <img
          src="https://img.icons8.com/color/48/000000/instagram-new--v2.gif"
          width="32"
          height="32"
          alt="social-icon"
        />
        <img
          src="https://img.icons8.com/color/48/000000/linkedin-circled--v3.gif"
          width="32"
          height="32"
          alt="social-icon"
        />
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v2.gif"
          width="32"
          height="32"
          alt="social-icon"
        />
      </div>
    </footer>
  );
}

export default Footer;
