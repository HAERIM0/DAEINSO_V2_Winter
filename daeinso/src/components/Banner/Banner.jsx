import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { BannerImg } from "./slide.style";
import { BsFillPatchPlusFill } from "react-icons/bs";

const images = [
  "https://user-images.githubusercontent.com/101709981/213920273-b6e2927c-bc9a-4ce7-aac3-0e2c7fa8fae3.png",
  "https://user-images.githubusercontent.com/101709981/213920303-6ac9d500-90d2-4647-81d3-1f1ae7b3b220.png",
  "https://user-images.githubusercontent.com/101709981/213920539-cc6ac4bb-d85a-4833-971e-3a1f065f30dc.png",
];

export default function Slide() {
  return (
    <Splide
      options={{
        type: "loop",
        autoplay: true,
        arrows: false,
        pagination: false,
        interval: 5000,
        speed: 1000,
      }}
    >
      {images.map((img) => {
        return (
          <SplideSlide key={img}>
            <BannerImg style={{ marginBottom: "72px" }}>
              <img src={img} />
            </BannerImg>
          </SplideSlide>
        );
      })}
    </Splide>
  );
}
