import React from "react";
import Image from "next/image";

export default function Hero({ domain, image }) {
  return (
    <div className="container mx-auto lg:px-20 pt-20 grid gap-x-10 gap-y-20 lg:grid-flow-col sm:grid-flow-row md:grid-flow-row items-center align-middle justify-items-center">
      <h1 className="text-center justify-center font-bold text-3xl flex-initial md:text-4xl lg:text-5xl">
        {domain}
      </h1>
      <div className="flex-initial">
        <Image
          src={image}
          height="500"
          width="813"
        />
      </div>
    </div>
  );
}
