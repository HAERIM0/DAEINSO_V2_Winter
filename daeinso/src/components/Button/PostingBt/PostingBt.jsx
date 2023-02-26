import React from "react";
import * as I from "../../Input/input.style";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import {
  postingImg,
  postingTitle,
  postingInfo,
  postingProject,
  postingStack,
  postingTeam,
  postingTodo,
} from "../../../recoil/postingAtom";
import { customAxios } from "../../../lib/axios/customAxios";

export default function PostingBt() {
  const navigate = useNavigate();
  const [fileUrl, setFileUrl] = useRecoilState(postingImg);
  const [posttitle, setPostTitle] = useRecoilState(postingTitle);
  const [poststack, setPostStack] = useRecoilState(postingStack);
  const [postproject, setPostProject] = useRecoilState(postingProject);
  const [posttodo, setPostTodo] = useRecoilState(postingTodo);
  const [postteam, setPostTeam] = useRecoilState(postingTeam);
  const [postInfo, setPostInfo] = useRecoilState(postingInfo);

  const Postupload = async ({}) => {
    try {
      const Pdata = {
        image: fileUrl[0].files,
        title: posttitle,
        stack: poststack,
        projectIntro: postproject,
        todo: posttodo,
        teamIntro: postteam,
        etc: postInfo,
      };
      console.log(Pdata);
      const Pres = await customAxios.post("/request", Pdata);
      console.log(Pres);
      navigate("/main");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <I.PostingBt>
      <button className="postingBt" onClick={Postupload}>
        의뢰하기
      </button>
    </I.PostingBt>
  );
}
