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
    console.log(posttitle);
  };

  const onProject = (e) => {
    setPostProject(e.target.value);
    console.log(postproject);
  };

  const onTodo = (e) => {
    setPostTodo(e.target.value);
    console.log(posttodo);
  };

  const onTeam = (e) => {
    setPostTeam(e.target.value);
    console.log(postteam);
  };

  const onInfo = (e) => {
    setPostInfo(e.target.value);
    console.log(postInfo);
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
