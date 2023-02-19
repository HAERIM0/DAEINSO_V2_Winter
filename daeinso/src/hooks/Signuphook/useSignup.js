import { useRecoilState } from "recoil";
import {
  signupAgeAtom,
  signupEmailAtom,
  signupNameAtom,
  signupPasswordAtom,
  signupStackAtom,
} from "../../recoil/postAtom";

const useSignup = () => {
  const [signemail, setSignEmail] = useRecoilState(signupEmailAtom);
  const [signpassword, setSignPassword] = useRecoilState(signupPasswordAtom);
  const [signname, setSignName] = useRecoilState(signupNameAtom);

  const onName = (e) => {
    setSignName(e.target.value);
  };

  const onEmail = (e) => {
    setSignEmail(e.target.value);
  };

  const onPassword = (e) => {
    setSignPassword(e.target.value);
  };
  return {
    onEmail,
    onName,
    onPassword,
  };
};

export default useSignup;
