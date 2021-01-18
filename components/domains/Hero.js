import React from "react";
import Image from "next/image";

export default function Hero({ domain, image }) {
  return (
    <div className="container mx-auto px-20 pt-20 grid gap-x-10 gap-y-20 lg:grid-flow-col sm:grid-flow-row md:grid-flow-row items-center align-middle justify-items-center">
      <h1 className="mt-20 font-bold text-5xl flex-initial">
        {domain}
      </h1>
      <div className="flex-initial">
        <Image
          src={"/assets/images/" + image}
          height="500"
          width="813"
        />
      </div>
    </div>
  );
}
