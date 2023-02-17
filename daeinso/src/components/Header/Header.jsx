import React from "react";
import {
  HeaderBox,
  HeaderWrap,
  HeaderLeft,
  HeaderRight,
  Text,
} from "./header.style";
import { BsFillPeopleFill } from "react-icons/bs";
import { useNav } from "../../hooks/Nav/useNav";

export default function Header() {
  const { HomeNav, ProjectNav, MyNav } = useNav();
  return (
    <HeaderBox>
      <HeaderWrap>
        <HeaderLeft>
          <h2 onClick={HomeNav}>DAEINSO</h2>
          <Text onClick={ProjectNav}>프로젝트</Text>
        </HeaderLeft>
        <HeaderRight>
          <p>로그아웃</p>
          <BsFillPeopleFill
            className="header-Icon"
            onClick={MyNav}
          ></BsFillPeopleFill>
        </HeaderRight>
      </HeaderWrap>
    </HeaderBox>
  );
}
