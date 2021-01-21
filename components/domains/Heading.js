import React from "react";

export default function Heading({ heading }) {
  return (
    <div className="px-auto">
      <h2 className="ml-10 lg:text-center lg:justify-center text-2xl md:text-2xl lg:text-3xl font-semibold pt-2 pb-1">
        {heading}
      </h2>
    </div>
  );
}
