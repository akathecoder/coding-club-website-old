import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ data }) {
  return (
    <div className=" p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 align-middle justify-items-center">
      {data.map((project) => {
        return (
          <div>
            <ProjectCard
              data={project}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProjectList;
