import React from "react";
import * as L from "./login.style";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const onClicksingup = () => {
    navigate("/signup");
  };
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
            <input placeholder="이메일을 입력해주세요"></input>
            <b>Password</b>
            <input placeholder="비밀번호를 입력해주세요"></input>
            <text className="text" onClick={onClicksingup}>
              회원가입
            </text>

            <button>로그인</button>
          </L.LoginRight>
        </L.LoginRightBox>
      </L.LoginBox>
    </L.MainWrap>
  );
}
