import React from "react";
import { BsPlayFill } from "react-icons/bs";
import {
  MyinfoBox,
  Info,
  InfoPageIcon,
  InfoList,
  InfoListBox,
} from "./myinfo.style";

export default function Myinfo() {
  return (
    <MyinfoBox>
      <Info>
        <InfoPageIcon>
          <BsPlayFill className="info-Icon" />
          <b>MY PAGE</b>
        </InfoPageIcon>
        <InfoListBox>
          <h3>내 정보</h3>
          <InfoList></InfoList>
        </InfoListBox>
      </Info>
    </MyinfoBox>
  );
}
