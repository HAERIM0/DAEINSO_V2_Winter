import React from "react";
import { useRecoilState } from "recoil";
import * as I from "./input.style";
import {
  postingInfo,
  postingProject,
  postingStack,
  postingTeam,
  postingTitle,
  postingTodo,
} from "../../recoil/postingAtom";
import useInput from "../../hooks/Inputhook/useInput";
import { STACK } from "../../constants/stack/STACK";

export default function Input() {
  const { onTeam, onInfo, onProject, onTitle, onTodo } = useInput();
  const [posttitle, setPostTitle] = useRecoilState(postingTitle);
  const [poststack, setPostStack] = useRecoilState(postingStack);
  const [postproject, setPostProject] = useRecoilState(postingProject);
  const [posttodo, setPostTodo] = useRecoilState(postingTodo);
  const [postteam, setPostTeam] = useRecoilState(postingTeam);
  const [postInfo, setPostInfo] = useRecoilState(postingInfo);
  return (
    <div>
      <I.InputBox>
        <I.InputTop>
          <I.InputTopInT>
            <b>제목</b>
            <input value={posttitle} onChange={(e) => onTitle(e)}></input>
          </I.InputTopInT>
          <I.InputTopInB>
            <b>모든분야</b>
            <I.StackList>
              {" "}
              {STACK.map((item) => (
                <button
                  style={{
                    width: "73px",
                    height: "40px",
                    borderRadius: "10px",
                    border: `1px solid ${item.color}`,
                    backgroundColor: poststack === item.payload && item.color,
                    fontSize: "11.5px",
                    // color: poststack !== item.name ? item.color : "white",
                  }}
                  onClick={() => setPostStack(item.payload)}
                >
                  {item.name}
                </button>
              ))}
            </I.StackList>
          </I.InputTopInB>
        </I.InputTop>
        <I.ProjectEx>
          <I.ProjectExTop>
            <b>프로젝트 설명</b>
            <textarea
              value={postproject}
              onChange={(e) => onProject(e)}
            ></textarea>
          </I.ProjectExTop>
          <I.ProjectExBottom>
            <b>해야할 일</b>
            <textarea value={posttodo} onChange={(e) => onTodo(e)}></textarea>
          </I.ProjectExBottom>
        </I.ProjectEx>
        <I.TeamEx>
          <I.TeamExTop>
            <b>팀 설명</b>
            <input value={postteam} onChange={(e) => onTeam(e)}></input>
          </I.TeamExTop>
        </I.TeamEx>
        <I.Info>
          <I.InfoTop>
            <b>기타정보</b>
            <input value={postInfo} onChange={(e) => onInfo(e)}></input>
          </I.InfoTop>
        </I.Info>
      </I.InputBox>
    </div>
  );
}
