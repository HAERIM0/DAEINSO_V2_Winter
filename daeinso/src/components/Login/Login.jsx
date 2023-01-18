import React from "react";
import {
  MainWrap,
  LoginBox,
  LoginLeft,
  LoginRight,
  LoginLeftBox,
  LoginRightBox,
} from "./login.style";

export default function Login() {
  return (
    <MainWrap>
      <LoginBox>
        <LoginLeftBox>
          <LoginLeft>
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
          </LoginLeft>
        </LoginLeftBox>
        <LoginRightBox>
          <LoginRight>
            <h1>Login</h1>
            <b>Email</b>
            <input placeholder="이메일을 입력해주세요"></input>
            <b>Password</b>
            <input placeholder="비밀번호를 입력해주세요"></input>
            <button>로그인</button>
          </LoginRight>
        </LoginRightBox>
      </LoginBox>
    </MainWrap>
  );
}
