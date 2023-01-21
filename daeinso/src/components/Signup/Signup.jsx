import React from "react";
import {
  SignupWrap,
  SignupBox,
  SignupText,
  InputBox,
  InputList,
  SelectBox,
  InputBt,
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
            <b>이메일</b>
            <input></input>
            <b>비밀번호</b>
            <input></input>
            <b>이름</b>
            <input></input>
            <b>학번</b>
            <input></input>
          </InputList>
        </InputBox>
        <SelectBox>
          <b>기술 스택</b>
          <select>
            <option>웹</option>
            <option>서버</option>
            <option>안드로이드</option>
            <option>iOS</option>
            <option>임베디드</option>
            <option>디자인</option>
            <option>게임</option>
          </select>
        </SelectBox>

        <InputBt>
          <button>가입하기</button>
        </InputBt>
      </SignupBox>
    </SignupWrap>
  );
}
