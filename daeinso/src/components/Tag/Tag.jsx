import React from "react";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { BsServer, BsFillBrushFill } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
import {
  TagWrap,
  TagList,
  BrushIconBox,
  EarthIconBox,
  AndroidIconBox,
  ServerIconBox,
  AppleIconBox,
  AppleIcon,
  BrushIcon,
  EarthIcon,
  AndroidIcon,
  ServerIcon,
  Tlqkf,
} from "./tag.style";
export default function Tag() {
  return (
    <TagWrap>
      <Tlqkf>
        {" "}
        <TagList>
          <BrushIconBox>
            <BrushIcon>
              <BsFillBrushFill className="Tagbrush" />
              <b>Design</b>
            </BrushIcon>
          </BrushIconBox>
          <EarthIconBox>
            <EarthIcon>
              <ImEarth />
              <b>Web</b>
            </EarthIcon>
          </EarthIconBox>
          <AndroidIconBox>
            <AndroidIcon>
              <AiFillAndroid />
              <b>Android</b>
            </AndroidIcon>
          </AndroidIconBox>
          <ServerIconBox>
            <ServerIcon>
              <BsServer />
              <b>Server</b>
            </ServerIcon>
          </ServerIconBox>
          <AppleIconBox>
            <AppleIcon>
              <AiFillApple />
              <b>iOS</b>
            </AppleIcon>
          </AppleIconBox>
        </TagList>
      </Tlqkf>
    </TagWrap>
  );
}
