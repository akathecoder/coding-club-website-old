import React from "react";

export default function Section({ children }) {
  return (
    <div className="mt-20 mb-40 pb-10 object-center rounded-3xl align-middle shadow-xl">
      {children}
    </div>
  );
}
