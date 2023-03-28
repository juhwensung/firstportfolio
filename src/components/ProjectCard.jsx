import React from "react";
import "./projectCard.css";

export default function ProjectCard({ thumbnail, title }) {
  return (
    <div className="card">
      <img src={thumbnail} className="image" />
      <h1 className="title">{title}</h1>
    </div>
  );
}
