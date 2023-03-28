import React from "react";

export default function StackCard({ icon, title, instruction }) {
  return (
    <div className="skill">
      <img src={icon} className="icon" />
      <h2>{title}</h2>
      <p>{instruction}</p>
    </div>
  );
}
