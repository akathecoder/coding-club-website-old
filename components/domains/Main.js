import React from "react";
import Heading from "./Heading";
import MemberList from "../membersList/MemberList";
import Section from "./Section";

export default function Main({
  technologies,
  vision,
  mission,
  projects,
  events,
  members
}) {
  return (
    <div className="container lg:mx-auto lg:px-40 px-5 mt-5 py-10 align-middle justify-items-center">
      {/* Our Vision */}
      <Section>
        <Heading heading="Our Vision" />
        <p className="mt-0 mx-10 lg:px-10 pt-5 font-semibold lg:text-justify text-gray-600">
          {vision}
        </p>
      </Section>

      {/* Senior Members */}
      <Section>
        <Heading heading="Senior Members" />
          <MemberList members={members}/>
      </Section>

      {/* Projects in Limelight */}
      <Section>
        <Heading heading="Projects in Limelight" />
      </Section>

      {/* Events */}
      <Section>
        <Heading heading="Events" />
      </Section>
    </div>
  );
}
