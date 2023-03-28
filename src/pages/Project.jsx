import React from "react";
import ProjectCard from "../components/ProjectCard";
import { project } from "../util/ProjectData";
import "./project.css";

export default function Project() {
  return (
    <div className="cards">
      <h1 className="cardtitle">Project</h1>
      {project.map((post) => {
        return (
          <ProjectCard
            key={post.id}
            thumbnail={post.thumbnail}
            title={post.title}
          />
        );
      })}
    </div>
  );
}
