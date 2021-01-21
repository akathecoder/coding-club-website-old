import React from "react";

export default function Section({ children }) {
  return (
    <div className="my-10 lg:mt-20 lg:mb-40 py-10 object-center rounded-3xl align-middle shadow-2xl bg-white">
      {children}
    </div>
  );
}
