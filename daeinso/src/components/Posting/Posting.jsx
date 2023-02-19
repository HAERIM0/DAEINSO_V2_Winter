import React from "react";
import { BsFillPatchPlusFill } from "react-icons/bs";
import { useNav } from "../../hooks/Nav/useNav";
import * as MP from "./posting.style";

export default function Posting() {
  const { InputNav } = useNav();
  return (
    <div>
      <div>
        <select>
          <option>df</option>
          <option>df</option>
          <option>df</option>
          <option>df</option>
        </select>
      </div>
      <MP.MainPlusBt>
        <BsFillPatchPlusFill onClick={InputNav} />
      </MP.MainPlusBt>
    </div>
  );
}
