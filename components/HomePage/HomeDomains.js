import React from "react";
import HomeDomain from "./HomeDomain";

function HomeDomains() {
  return (
    <div
      id="domains"
      className="bg-backgroundColor-main "
    >
      <div className="h1 mb-10 flex justify-center text-5xl font-normal ">
        Domains
      </div>
      <div className="">
        <HomeDomain
          title="Android Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, qui corrupti officiis nam incidunt voluptatibus numquam recusandae vitae vero facilis?"
          link="/domains/android-dev"
          img="undraw_Mobile_app_p3ts.svg"
        />
        <HomeDomain
          title="Web Development"
          description="Websites are the backbone of this era of digitalization, where people are always connected wherever and whenever."
          link="/domains/web-dev"
          img="undraw_building_websites_i78t.svg"
          right
        />
        <HomeDomain
          title="AI / ML"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, qui corrupti officiis nam incidunt voluptatibus numquam recusandae vitae vero facilis?"
          link="/domains/ai-ml"
          img="undraw_Artificial_intelligence_re_enpp.svg"
        />
        <HomeDomain
          title="Big Data Analysis"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, qui corrupti officiis nam incidunt voluptatibus numquam recusandae vitae vero facilis?"
          link="/domains/bda"
          img="undraw_design_data_khdb.svg"
          right
        />
      </div>
    </div>
  );
}

export default HomeDomains;
