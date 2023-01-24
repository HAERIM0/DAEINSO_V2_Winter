import React from "react";
import { BsFillPatchPlusFill } from "react-icons/bs";
import { MainPlusBt } from "./posting.style";
import { useNavigate } from "react-router-dom";

export default function Posting() {
  const navigate = useNavigate();
  const Mainonclick = () => {
    navigate("/Input");
  };
  return (
    <div>
      <div></div>
      <MainPlusBt>
        <BsFillPatchPlusFill onClick={Mainonclick} />
      </MainPlusBt>
    </div>
  );
}
