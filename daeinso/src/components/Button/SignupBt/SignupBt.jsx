import React from "react";
import { customAxios } from "../../../lib/axios/customAxios";
import { useRecoilState } from "recoil";
import * as S from "../../Signup/signup.style";
import {
  signupAgeAtom,
  signupEmailAtom,
  signupNameAtom,
  signupPasswordAtom,
  signupStackAtom,
} from "../../../recoil/postAtom";

export default function SignupBt() {
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
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.InputBt>
      <button onClick={Signupload}>가입하기</button>
    </S.InputBt>
  );
}
