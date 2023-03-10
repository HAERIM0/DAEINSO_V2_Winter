import React from "react";
import { customAxios } from "../../lib/axios/customAxios";
import { useRef } from "react";
// import { useFile, useRef } from "../../hooks/Inputhook/useFile";
import { AiFillCamera } from "react-icons/ai";
import * as F from "./file.style";
import { BsPlayFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { postingImg } from "../../recoil/postingAtom";
export default function File() {
  // const { uploadImg, imgRef, onClickImg } = useFile();
  const [fileUrl, setFileUrl] = useRecoilState(postingImg);
  const imgRef = useRef();

  const onClickImg = () => {
    imgRef.current.click();
  };

  const uploadImg = async (e) => {
    const files = e.target.files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }
    try {
      const { data } = await customAxios.post("/file", formData);
      console.log(data);
      const arr = [];
      // console.log(fileUrl[0].files);
      data.files.forEach((value) => {
        arr.push(value);
      });
      setFileUrl(arr);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <F.FileBox>
      <F.FileIconBox>
        <BsPlayFill className="Fileplay-Icon" />
        <b>의뢰하기</b>
      </F.FileIconBox>
      <input
        multiple="multiple"
        onChange={uploadImg}
        type="file"
        ref={imgRef}
        style={{ display: "none" }}
      ></input>
      <F.ImgUploadBt>
        <button onClick={onClickImg}>
          <AiFillCamera className="Filecamera-Icon" />
        </button>
        {fileUrl.map((file) => {
          return <img src={file.files} alt="" className="img" />;
        })}
      </F.ImgUploadBt>
    </F.FileBox>
  );
}
