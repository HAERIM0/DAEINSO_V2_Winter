import React from "react";
import {
  InputBox,
  InputTop,
  ProjectEx,
  TeamEx,
  Info,
  InputTopInT,
  InputTopInB,
  ProjectExTop,
  ProjectExBottom,
  TeamExTop,
  InfoTop,
} from "./input.style";

export default function Input() {
  return (
    <div>
      <InputBox>
        <InputTop>
          <InputTopInT>
            <b>제목</b>
            <input></input>
          </InputTopInT>
          <InputTopInB>
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
          </InputTopInB>
        </InputTop>
        <ProjectEx>
          <ProjectExTop>
            <b>프로젝트 설명</b>
            <textarea></textarea>
          </ProjectExTop>
          <ProjectExBottom>
            <b>해야할 일</b>
            <textarea></textarea>
          </ProjectExBottom>
        </ProjectEx>
        <TeamEx>
          <TeamExTop>
            <b>팀 설명</b>
            <input></input>
          </TeamExTop>
        </TeamEx>
        <Info>
          <InfoTop>
            <b>기타정보</b>
            <input></input>
          </InfoTop>
        </Info>
      </InputBox>
    </div>
  );
}
