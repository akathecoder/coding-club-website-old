import React from "react";
import Heading from "./Heading";
import ProjectList from "./ProjectList";
import Section from "./Section";

export default function Main({
  vision,
  projects,
}) {
  // console.log(projects);

  return (
    <div className="container lg:mx-auto lg:px-40 px-5 mt-5 py-10 align-middle justify-items-center">
      {/* Our Vision */}
      <Section>
        <Heading heading="Our Vision" />
        <p className="mt-0 mx-10 lg:px-10 pt-5 font-semibold text-justify text-gray-600">
          {vision}
        </p>
      </Section>

      {projects.length > 0 && (
        <Section>
          <Heading heading="Projects" />
          <ProjectList
            data={projects}
          />
        </Section>
      )}
    </div>
  );
}
