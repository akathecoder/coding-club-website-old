import React from "react";

export default function Heading({ heading }) {
  return (
    <div className="mt-10 px-20 w-max">
      <h2 className="self-center text-3xl font-semibold pt-2 pb-1">
        {heading}
      </h2>
    </div>
  );
}
