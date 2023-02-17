import React from "react";
import { BsFillPatchPlusFill } from "react-icons/bs";
import { useNav } from "../../hooks/Nav/useNav";
import { MainPlusBt } from "./posting.style";

export default function Posting() {
  const { InputNav } = useNav();
  return (
    <div>
      <div></div>
      <MainPlusBt>
        <BsFillPatchPlusFill onClick={InputNav} />
      </MainPlusBt>
    </div>
  );
}
