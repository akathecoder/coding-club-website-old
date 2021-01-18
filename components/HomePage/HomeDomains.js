import React from "react";
import HomeDomain from "./HomeDomain";

function HomeDomains() {
  return (
    <div className="bg-backgroundColor-main pb-20">
      <div className="h1 flex justify-center text-5xl font-normal ">
        Domains
      </div>
      <div className="">
        <HomeDomain
          title="Android Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, qui corrupti officiis nam incidunt voluptatibus numquam recusandae vitae vero facilis?"
          link="/domains/android-dev"
        />
        <HomeDomain
          title="Web Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, qui corrupti officiis nam incidunt voluptatibus numquam recusandae vitae vero facilis?"
          link="/domains/web-dev"
          right
        />
        <HomeDomain
          title="AI / ML"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, qui corrupti officiis nam incidunt voluptatibus numquam recusandae vitae vero facilis?"
          link="/domains/ai-ml"
        />
        <HomeDomain
          title="Big Data Analysis"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, qui corrupti officiis nam incidunt voluptatibus numquam recusandae vitae vero facilis?"
          link="/domains/bda"
          right
        />
      </div>
    </div>
  );
}

export default HomeDomains;
