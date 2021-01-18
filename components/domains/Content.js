import React from "react";

export default function Content({ content }) {
  return (
    <div className="px-5 mx-20 pb-1 pt-2 rounded-xl bg-green-200">
      <p className="text-base font-normal">{content}</p>
    </div>
  );
}
