import React from "react";
import { useFile } from "../../hooks/Inputhook/useFile";
import { AiFillCamera } from "react-icons/ai";
import * as F from "./file.style";
import { BsPlayFill } from "react-icons/bs";
export default function File() {
  const { uploadImg, imgRef, onClickImg } = useFile();

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
      </F.ImgUploadBt>
    </F.FileBox>
  );
}
