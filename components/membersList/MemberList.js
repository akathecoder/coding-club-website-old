import React from "react";
import MemberBadge from "./MemberBadge";

export default function MembersList({
  members,
}) {
  // console.log(members);

  const membersData = JSON.parse(
    JSON.stringify(members)
  );

  // console.log(membersData);

  var membersDataAsArray;

  for (var i in membersData) {
    membersDataAsArray = membersData[i];
  }

  // console.log(membersDataAsArray);

  return (
    <div className="mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7 align-middle justify-items-center">
      {membersDataAsArray.map(
        (member) => {
          return (
            <MemberBadge
              details={member}
            />
          );
        }
      )}
    </div>
  );
}
