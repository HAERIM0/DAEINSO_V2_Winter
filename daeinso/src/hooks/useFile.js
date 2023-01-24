import React, { useRef, useState } from "react";

export const useFile = () => {
  const uploadImg = async (e) => {
    // const [fileUrl, setFileUrl] = useState();

    const files = e.target.files;
    const formData = new FormData();

    for (let i = 0; i < files.length === 1; i++) {
      formData.append("file", files[i]);
    }
    try {
    } catch (e) {}
  };
  return { uploadImg };
};
