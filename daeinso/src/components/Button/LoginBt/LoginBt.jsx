import React from "react";
import { useRecoilState } from "recoil";
import { Navigate, useNavigate } from "react-router-dom";
import * as L from "../../Login/login.style";
import { signupEmailAtom, signupPasswordAtom } from "../../../recoil/postAtom";
import customAxios from "../../../lib/axios/customAxios";

export default function LoginBt() {
  const navigate = useNavigate();
  const [signemail, setSingEmail] = useRecoilState(signupEmailAtom);
  const [signpassword, setSingPassword] = useRecoilState(signupPasswordAtom);

  const Loginupload = async ({}) => {
    try {
      const Ldata = {
        email: signemail,
        password: signpassword,
      };
      console.log(Ldata);
      const Lres = await customAxios.post("/user/login", Ldata);
      console.log(Lres);
      navigate("/main");
      setSingEmail("");
      setSingPassword("");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <L.LoginRight>
      <button onClick={Loginupload}>로그인</button>
    </L.LoginRight>
  );
}
