import React from "react";
import Header from "../../components/Header/Header";
import Posting from "../../components/Posting/Posting";
// import Slide from "../../components/Banner/Banner";
import Banner from "../../components/Banner/Banner";

export default function Mainpage() {
  return (
    <>
      <Header />
      <Banner />
      <Posting />
    </>
  );
}
