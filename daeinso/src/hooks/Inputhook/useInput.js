import { useRecoilState } from "recoil";
import {
  postingInfo,
  postingProject,
  postingTitle,
  postingTeam,
  postingTodo,
} from "../../recoil/postingAtom";

const useInput = () => {
  const [posttitle, setPostTitle] = useRecoilState(postingTitle);
  const [postproject, setPostProject] = useRecoilState(postingProject);
  const [posttodo, setPostTodo] = useRecoilState(postingTodo);
  const [postteam, setPostTeam] = useRecoilState(postingTeam);
  const [postInfo, setPostInfo] = useRecoilState(postingInfo);
  const onTitle = (e) => {
    setPostTitle(e.target.value);
  };

  const onProject = (e) => {
    setPostProject(e.target.value);
  };

  const onTodo = (e) => {
    setPostTodo(e.target.value);
  };

  const onTeam = (e) => {
    setPostTeam(e.target.value);
  };

  const onInfo = (e) => {
    setPostInfo(e.target.value);
  };

  return {
    onTeam,
    onInfo,
    onProject,
    onTitle,
    onTodo,
  };
};

export default useInput;
