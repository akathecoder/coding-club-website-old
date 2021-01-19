import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-backgroundColor-main p-4 ">
      <div className="grid lg:grid-cols-2 md:grid-cols-1">
        {/* <h1>S.P.A.R.K.S</h1> */}
        <div>
          <Image
            src="/assets/images/mini_logo_original.svg"
            width="150"
            height="150"
          />
        </div>

        <div className="lg:flex lg:justify-end gap-16 mr-10 justify-center grid md:grid-cols-2 sm:grid-cols-1">
          <div>
            <h1 className="text-xl font-medium mb-6">
              Domains
            </h1>
            <h3>Web Development</h3>
            <h3>Android Development</h3>
            <h3>AI / ML</h3>
            <h3>Big Data Analysis</h3>
          </div>

          <div>
            <h1 className="text-xl font-medium mb-6">
              Events
            </h1>
            <h3>React Workshop</h3>
            <h3>Past Events</h3>
            <h3>Gallery</h3>
            {/* <h3>Inner Text</h3>
            <h3>Inner Text</h3> */}
          </div>

          {/* <div>
            <h1 className="text-xl font-medium mb-6">
              Projects
            </h1>
            <h3>Project 1</h3>
            <h3>Project 2</h3>
            <h3>Project 3</h3>
            <h3>Project 4</h3>
            <h3>Project 5</h3>
          </div> */}

          <div>
            <h1 className="text-xl font-medium mb-6">
              Company
            </h1>
            <h3>About</h3>
            <h3>Blog</h3>
            <h3>Jobs</h3>
            <h3>Privacy</h3>
            <h3>Terms</h3>
          </div>
        </div>
      </div>

      <hr className="m-4 border-black " />

      <div className="flex justify-end mx-6 gap-4 items-center">
        <h2>Follow us: </h2>
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
    </footer>
  );
}

export default Footer;
