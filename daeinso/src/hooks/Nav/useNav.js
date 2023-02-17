import { useNavigate } from "react-router-dom";

export const useNav = () => {
  const navigate = useNavigate();
  const ProjectNav = () => {
    navigate("/project");
  };

  const HomeNav = () => {
    navigate("/main");
  };

  const MyNav = () => {
    navigate("/mypage");
  };

  const InputNav = () => {
    navigate("/Input");
  };

  return { ProjectNav, HomeNav, MyNav, InputNav };
};
