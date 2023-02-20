import React from "react";
import * as L from "./login.style";
import { useNavigate } from "react-router-dom";
import { signupEmailAtom, signupPasswordAtom } from "../../recoil/postAtom";
import useSignup from "../../hooks/Signuphook/useSignup";
import { useRecoilState } from "recoil";
import { useNav } from "../../hooks/Nav/useNav";
import LoginBt from "../Button/LoginBt/LoginBt";

export default function Login() {
  const { onEmail, onPassword } = useSignup();
  const { SignupNav } = useNav();
  const navigate = useNavigate();
  const [signemail, setSignEmail] = useRecoilState(signupEmailAtom);
  const [signpassword, setSignPassword] = useRecoilState(signupPasswordAtom);

  return (
    <L.MainWrap>
      <L.LoginBox>
        <L.LoginLeftBox>
          <L.LoginLeft>
            <h2>
              인력이 필요 하신가요?
              <br />
              대인소
            </h2>
            <p>
              가종 대회,프로젝트,공모전 팀원이 필요할 때<br />
              인력이 필요하신가요?
              <br />
              '대인소'로 오세요!
            </p>
          </L.LoginLeft>
        </L.LoginLeftBox>
        <L.LoginRightBox>
          <L.LoginRight>
            <h1>Login</h1>
            <b>Email</b>
            <input
              placeholder="이메일을 입력해주세요"
              value={signemail}
              onChange={(e) => onEmail(e)}
            ></input>
            <b>Password</b>
            <input
              placeholder="비밀번호를 입력해주세요"
              value={signpassword}
              onChange={(e) => onPassword(e)}
            ></input>
            <text className="text" onClick={SignupNav}>
              회원가입
            </text>

            <LoginBt />
          </L.LoginRight>
        </L.LoginRightBox>
      </L.LoginBox>
    </L.MainWrap>
  );
}
