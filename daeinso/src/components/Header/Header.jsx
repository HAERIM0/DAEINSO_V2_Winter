import React from "react";
import * as H from "./header.style";
import { BsFillPeopleFill } from "react-icons/bs";
import { useNav } from "../../hooks/Nav/useNav";

export default function Header() {
  const { HomeNav, ProjectNav, MyNav } = useNav();
  return (
    <H.HeaderBox>
      <H.HeaderWrap>
        <H.HeaderLeft>
          <h2 onClick={HomeNav}>DAEINSO</h2>
          <H.Text onClick={ProjectNav}>프로젝트</H.Text>
        </H.HeaderLeft>
        <H.HeaderRight>
          <p>로그아웃</p>
          <BsFillPeopleFill
            className="header-Icon"
            onClick={MyNav}
          ></BsFillPeopleFill>
        </H.HeaderRight>
      </H.HeaderWrap>
    </H.HeaderBox>
  );
}
