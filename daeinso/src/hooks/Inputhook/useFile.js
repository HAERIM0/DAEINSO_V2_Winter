import { useRef } from "react";
import { customAxios } from "../../lib/axios/customAxios";
// import customAxios from "../../lib/axios/customAxios";
import { postingImg } from "../../recoil/postingAtom";
import { useRecoilState } from "recoil";

export const useFile = () => {
  const [fileUrl, setFileUrl] = useRecoilState(postingImg);
  const uploadImg = async (e) => {
    const files = e.target.files;
    const formData = new FormData();

    for (let i = 0; i < files.length === 1; i++) {
      formData.append("file", files[i]);
    }
    try {
      const { data } = await customAxios.post("/file", formData);
      const arr = [];
      data.data.forEach((value) => {
        arr.push(value);
      });
      setFileUrl(arr);
    } catch (e) {
      console.log(e);
    }
  };

  const imgRef = useRef();

  const onClickImg = () => {
    imgRef.current.click();
  };
  return { uploadImg, imgRef, onClickImg };
};
