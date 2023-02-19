import React from "react";
import * as I from "./input.style";

export default function Input() {
  return (
    <div>
      <I.InputBox>
        <I.InputTop>
          <I.InputTopInT>
            <b>제목</b>
            <input></input>
          </I.InputTopInT>
          <I.InputTopInB>
            <b>모든분야</b>
            <select>
              <option>웹</option>
              <option>서버</option>
              <option>안드로이드</option>
              <option>iOS</option>
              <option>임베디드</option>
              <option>디자인</option>
              <option>게임</option>
            </select>
          </I.InputTopInB>
        </I.InputTop>
        <I.ProjectEx>
          <I.ProjectExTop>
            <b>프로젝트 설명</b>
            <textarea></textarea>
          </I.ProjectExTop>
          <I.ProjectExBottom>
            <b>해야할 일</b>
            <textarea></textarea>
          </I.ProjectExBottom>
        </I.ProjectEx>
        <I.TeamEx>
          <I.TeamExTop>
            <b>팀 설명</b>
            <input></input>
          </I.TeamExTop>
        </I.TeamEx>
        <I.Info>
          <I.InfoTop>
            <b>기타정보</b>
            <input></input>
          </I.InfoTop>
        </I.Info>
      </I.InputBox>
    </div>
  );
}
