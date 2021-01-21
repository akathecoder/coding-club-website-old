import React from "react";
import MemberBadge from "./MemberBadge";

export default function MembersList({members}) {
  return (
    <div className="mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7 align-middle justify-items-center">
    {members.map((member)=>{return(
      <MemberBadge details={member}/>)
      }
    )}
    </div>
  );
}
