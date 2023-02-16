import { useRecoilState } from "recoil";
import {
  singupAgeAtom,
  singupEmailAtom,
  singupNameAtom,
  singupPasswordAtom,
  singupStackAtom,
} from "../recoil/postAtom";

const useSignup = () => {
  const [email, setEmail] = useRecoilState(singupEmailAtom);
  const [password, setPassword] = useRecoilState(singupPasswordAtom);
  const [name, setName] = useRecoilState(singupNameAtom);
  const [age, setAge] = useRecoilState(singupAgeAtom);
  const [stack, setStack] = useRecoilState(singupStackAtom);

  const onName = (e) => {
    setName(e.target.value);
  };

  const onEmail = (e) => {
    setEmail(e.target.value);
  };

  const onPassword = (e) => {
    setPassword(e.target.value);
  };
  return {
    onEmail,
    onName,
    onPassword,
  };
};

export default useSignup;
