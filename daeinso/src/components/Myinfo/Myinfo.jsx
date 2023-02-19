import React from "react";
import { BsPlayFill } from "react-icons/bs";
import * as M from "./myinfo.style";

export default function Myinfo() {
  return (
    <M.MyinfoBox>
      <M.Info>
        <M.InfoPageIcon>
          <BsPlayFill className="info-Icon" />
          <b>MY PAGE</b>
        </M.InfoPageIcon>
        <M.InfoListBox>
          <h3>내 정보</h3>
          {/* <InfoList></InfoList> */}
        </M.InfoListBox>
      </M.Info>
    </M.MyinfoBox>
  );
}
