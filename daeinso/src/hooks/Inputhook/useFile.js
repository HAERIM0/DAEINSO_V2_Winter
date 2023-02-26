import { useRef } from "react";
import { customAxios } from "../../lib/axios/customAxios";
// import customAxios from "../../lib/axios/customAxios";
import { postingImg } from "../../recoil/postingAtom";
import { useRecoilState } from "recoil";

export const useFile = () => {
  const [fileUrl, setFileUrl] = useRecoilState(postingImg);
  

 

  
  return { uploadImg, imgRef, onClickImg };
};
