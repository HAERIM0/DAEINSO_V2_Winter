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
import { useRecoilState } from "recoil";
import {
  singupAgeAtom,
  singupEmailAtom,
  singupNameAtom,
  singupPasswordAtom,
  singupStackAtom,
} from "../../recoil/postAtom";
import useSignup from "../../hooks/useSignup";

export default function Signup() {
  const { onEmail, onName, onPassword } = useSignup();
  const [email, setEmail] = useRecoilState(singupEmailAtom);
  const [password, setPassword] = useRecoilState(singupPasswordAtom);
  const [name, setName] = useRecoilState(singupNameAtom);
  const [age, setAge] = useRecoilState(singupAgeAtom);
  const [stack, setStack] = useRecoilState(singupStackAtom);
  return (
    <SignupWrap>
      <SignupBox>
        <SignupText>
          <BsPlayFill className="Signupplay-Icon" />
          <h2>회원가입</h2>
        </SignupText>
        <InputBox>
          <InputList>
            <b>이메일</b>
            <input value={email} onChange={(e) => onEmail(e)}></input>
            <b>비밀번호</b>
            <input
              type="number"
              value={password}
              onChange={(e) => onPassword(e)}
            ></input>
            <b>이름</b>
            <input value={name} onChange={(e) => onName(e)}></input>
          </InputList>
        </InputBox>
        <SelectBox>
          <b>학년</b>
          <select>
            <option>6기</option>
            <option>7기</option>
            <option>8기</option>
          </select>
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
