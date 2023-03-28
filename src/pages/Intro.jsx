import React from "react";
import photo from "../image/myphoto.jpg";
import "./intro.css";

export default function Intro() {
  return (
    <div className="intro">
      <h1 className="main">JUHWAN SUNG PORTFOLIO</h1>
      <img src={photo} className="photo" />
      <p className="sube">안녕하세요 Front-end developer 성주환 입니다.</p>
    </div>
  );
}
