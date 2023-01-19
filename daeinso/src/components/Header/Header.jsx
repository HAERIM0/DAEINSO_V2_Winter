import React from "react";
import { HeaderBox, HeaderWrap, HeaderLeft, HeaderRight } from "./header.style";
import { BsFillPeopleFill } from "react-icons/bs";

export default function Header() {
  return (
    <HeaderBox>
      <HeaderWrap>
        <HeaderLeft>
          <h2>DAEINSO</h2>
          <text className="project-Bt">프로젝트</text>
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
