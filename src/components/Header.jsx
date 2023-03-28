import React from "react";
import { Link } from "react-scroll";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="name">JUHWAN</h1>

      <ul className="navbar">
        <Link to="Intro" spy={true} smooth={true}>
          <span className="menu">Intro</span>
        </Link>
        <Link to="Stack" spy={true} smooth={true}>
          <span className="menu">Stack</span>
        </Link>
        <Link to="Project" spy={true} smooth={true}>
          <span className="menu">Project</span>
        </Link>
        <Link to="Outtro" spy={true} smooth={true}>
          <span className="menu">Outtro</span>
        </Link>
      </ul>
    </div>
  );
}
