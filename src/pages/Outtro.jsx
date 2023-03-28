import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import "./outtro.css";

export default function Outtro() {
  const handleNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <div className="outtro">
      <h1 className="outtitle">ending</h1>
      <h3 className="headwrite">
        더 좋은 UI,UX를 위해 끊임없이 고민하는 개발자
      </h3>
      <p className="bodywrite">
        프론트 엔드 개발자 성주환입니다.
        <br />
        <br /> 전공을 바꾸면서 사이버대학을 들어가 첫 개발을 시작하였고
        <br /> 웹 개발에 전반적인 흐름을 이해 할 수 있었습니다.
        <br />
        <br /> 프론트 엔드 개발자라면 항상 사용자들을 위해 끊임없이
        <br /> 더 좋은 UI,UX를 위해 연구와 개발을 해야 한다고 생각 합니다.
        <br />
        <br /> 화려하고 거창한 성과보단 작은 문제라도 깊게 생각하고
        <br /> 끝까지 해결 할 수 있는 개발자입니다.
        <br />
        <br /> 어제보단 오늘, 오늘보단 내일 항상 발전하며 성장 가능성이 있는
        <br /> 저를 믿고 함께 할 회사를 찾고 있습니다.
      </p>
      <h3 className="subtitle">Link</h3>

      <button
        onClick={() => handleNewTab("https://github.com/juhwensung")}
        className="button"
      >
        <AiFillGithub className="linkicon" />
      </button>

      <button
        onClick={() => handleNewTab("https://www.instagram.com/ju_hwan0123/")}
        className="button"
      >
        <BsInstagram className="linkicon" />
      </button>

      <h3 className="subtitle">contact</h3>

      <button
        onClick={() => handleNewTab("https://www.instagram.com/ju_hwan0123/")}
        className="contact"
      >
        <RiKakaoTalkFill className="linkicon" />
      </button>

      <button
        onClick={() => handleNewTab("https://www.instagram.com/ju_hwan0123/")}
        className="contact"
      >
        <FiMail className="linkicon" />
      </button>
    </div>
  );
}
