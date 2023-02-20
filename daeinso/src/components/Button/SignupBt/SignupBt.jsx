import React from "react";
import { customAxios } from "../../../lib/axios/customAxios";
import { useRecoilState } from "recoil";
import * as S from "../../Signup/signup.style";
import { useNavigate } from "react-router-dom";
import {
  signupAgeAtom,
  signupEmailAtom,
  signupNameAtom,
  signupPasswordAtom,
  signupStackAtom,
} from "../../../recoil/postAtom";

export default function SignupBt() {
  const navigate = useNavigate();
  const [signemail, setSingEmail] = useRecoilState(signupEmailAtom);
  const [signpassword, setSingPassword] = useRecoilState(signupPasswordAtom);
  const [signname, setSingName] = useRecoilState(signupNameAtom);
  const [age, setAge] = useRecoilState(signupAgeAtom);
  const [signstack, setSingStack] = useRecoilState(signupStackAtom);

  const Signupload = async ({}) => {
    try {
      const data = {
        email: signemail,
        password: signpassword,
        name: signname,
        generation: age,
        stack: signstack,
      };
      console.log(data);
      const res = await customAxios.post("/user/register", data);
      console.log(res);
      navigate("/");
      setSingEmail("");
      setSingName("");
      setSingPassword("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.InputBt>
      <button onClick={Signupload} className="signup-Bt">
        가입하기
      </button>
    </S.InputBt>
  );
}
