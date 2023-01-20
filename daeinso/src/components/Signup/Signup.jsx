import React from "react";
import {
  SignupWrap,
  SignupBox,
  SignupText,
  InputBox,
  InputList,
  SelectBox,
} from "./signup.style";
import { BsPlayFill } from "react-icons/bs";

export default function Signup() {
  return (
    <SignupWrap>
      <SignupBox>
        <SignupText>
          <BsPlayFill className="Signup-Icon" />
          <h2>회원가입</h2>
        </SignupText>
        <InputBox>
          <InputList>
            <text>이메일</text>
            <input></input>
            <text>비밀번호</text>
            <input></input>
            <text>이름</text>
            <input></input>
            <text>학번</text>
            <input></input>
          </InputList>
        </InputBox>
        <SelectBox>
          <text>기술 스택</text>
          <select>
            <option>웹</option>
            <option>서버</option>
            <option>안드로이드</option>
            <option>iOS</option>
            <option>임베디드</option>
            <option>디자인</option>
          </select>
        </SelectBox>
      </SignupBox>
    </SignupWrap>
  );
}
