import React, { useState } from "react";
import * as S from "./signup.style";
import { BsPlayFill } from "react-icons/bs";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useRecoilState } from "recoil";
import {
  signupAgeAtom,
  signupEmailAtom,
  signupNameAtom,
  signupPasswordAtom,
  signupStackAtom,
} from "../../recoil/postAtom";
import useSignup from "../../hooks/Signuphook/useSignup";
import { AGE } from "../../constants/age/AGE";
import { STACK } from "../../constants/stack/STACK";
import SignupBt from "../Button/SignupBt/SignupBt";
export default function Signup() {
  const { onEmail, onName, onPassword } = useSignup();
  const [signemail, setSignEmail] = useRecoilState(signupEmailAtom);
  const [signpassword, setSignPassword] = useRecoilState(signupPasswordAtom);
  const [signname, setSignName] = useRecoilState(signupNameAtom);
  const [age, setAge] = useRecoilState(signupAgeAtom);
  const [signstack, setSignStack] = useRecoilState(signupStackAtom);
  const [agePopup, setAgePopup] = useState(false);
  const [stackPopup, setStackPopup] = useState(false);

  const ageopen = () => {
    setAgePopup(true);
  };

  const ageclose = () => {
    setAgePopup(false);
  };
  const stackopen = () => {
    setStackPopup(true);
  };
  const stackclose = () => {
    setStackPopup(false);
  };
  return (
    <S.SignupWrap>
      <S.SignupBox>
        <S.SignupText>
          <BsPlayFill className="Signupplay-Icon" />
          <h2>회원가입</h2>
        </S.SignupText>
        <S.InputBox>
          <S.InputList>
            <b>이메일</b>
            <input value={signemail} onChange={(e) => onEmail(e)}></input>
            <b>비밀번호</b>
            <input value={signpassword} onChange={(e) => onPassword(e)}></input>
            <b>이름</b>
            <input value={signname} onChange={(e) => onName(e)}></input>
          </S.InputList>
        </S.InputBox>
        <S.SelectBox>
          <S.SelectAge>
            <b>학년</b>
            <button onClick={ageopen} value="false" className="ageopenBt">
              <AiFillCaretDown />
            </button>
            {agePopup
              ? AGE.map((item) => (
                  <S.AgeList
                    style={{
                      backgroundColor: age === item.payload && item.color,
                    }}
                    onClick={() => setAge(item.payload)}
                  >
                    {item.name}
                  </S.AgeList>
                ))
              : null}
            <button onClick={ageclose} value="true" className="agecloseBt">
              <AiFillCaretUp />
            </button>
          </S.SelectAge>

          <S.SelectStack>
            <b>기술 스택</b>
            <button onClick={stackopen} value="false" className="stackopenBt">
              <AiFillCaretDown />
            </button>
            {stackPopup
              ? STACK.map((item) => (
                  <S.StackList
                    style={{
                      backgroundColor: signstack === item.payload && item.color,
                    }}
                    onClick={() => setSignStack(item.payload)}
                  >
                    {item.name}
                  </S.StackList>
                ))
              : null}
            <button onClick={stackclose} value="true" className="stackcloseBt">
              <AiFillCaretUp />
            </button>
          </S.SelectStack>
        </S.SelectBox>

        <SignupBt />
      </S.SignupBox>
    </S.SignupWrap>
  );
}
