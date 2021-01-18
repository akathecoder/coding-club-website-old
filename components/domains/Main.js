import React from "react";
import Heading from "./Heading";
import MemberBadge from "./MemberBadge";
import Section from "./Section";

export default function Main({
  technologies,
  vision,
  mission,
  projects,
  events,
}) {
  return (
    <div className="container mx-auto lg:px-40 md:px-20 sm:px-10 mt-5 py-10 align-middle justify-items-center">
      {/* Our Vision */}
      <Section>
        <Heading heading="Our Vision" />
        <p className="mt-0 mx-10 px-10 pt-5 font-semibold text-justify text-gray-600">
          {vision}
        </p>
      </Section>

      {/* Senior Members */}
      <Section>
        <Heading heading="Senior Members" />
        <div className="mx-auto mt-10 grid grid-cols-3 lg:grid-flow-col sm:grid-flow-row md:grid-flow-row align-middle justify-items-center">
          <MemberBadge />
          <MemberBadge />
        </div>
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
