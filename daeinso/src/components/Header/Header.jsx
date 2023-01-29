import React from "react";
import { HeaderBox, HeaderWrap, HeaderLeft, HeaderRight } from "./header.style";
import { BsFillPeopleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const PostonClick = () => {
    navigate("/project");
  };
  return (
    <HeaderBox>
      <HeaderWrap>
        <HeaderLeft>
          <h2>DAEINSO</h2>
          <text className="project-Bt" onClick={PostonClick}>
            프로젝트
          </text>
        </HeaderLeft>
        <HeaderRight>
          <p>회원가입</p>
          <p>/</p>
          <p>로그인</p>
          <BsFillPeopleFill className="header-Icon"></BsFillPeopleFill>
        </HeaderRight>
      </HeaderWrap>
    </HeaderBox>
  );
}
