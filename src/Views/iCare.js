import React from "react";

import Parallax from "../components/Parallax/Parallax.js";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer";
import Hlinks from "./Hlinks";
import SectionReusable from "./SectionReusable";
import { Helmet } from "react-helmet";

// @material-ui/icons
import FormatSize from "@material-ui/icons/FormatSize";
import DoneOutline from "@material-ui/icons/DoneOutline";
import OpenWith from "@material-ui/icons/OpenWith";

import profile from "assets/img/faces/christian.jpg";
import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

const TITLE = "iCare";
const pDescription =
  'An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure.{" "}';
const brandName = "iCare Brands";
const tabButton1 = "iCare1";
const tabButton2 = "iCare2";
const tabButton3 = "iCare3";
function iCare() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Header
        brand="SAWAE BRANDS"
        rightLinks={<Hlinks />}
        color="transparent"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <Parallax image={require("../assets/img/profile-bg.jpg")}> </Parallax>
      <SectionReusable
        Icon1={FormatSize}
        Icon2={DoneOutline}
        Icon3={OpenWith}
        tabButton={tabButton1}
        tabButton2={tabButton2}
        tabButton3={tabButton3}
        profile={profile}
        brandName={brandName}
        pDescription={pDescription}
        studio1={studio1}
        studio2={studio2}
        studio3={studio3}
        studio4={studio4}
        studio5={studio5}
        work1={work1}
        work2={work2}
        work3={work3}
        work4={work4}
        work5={work5}
      />
      <Footer />

    </>
  );
}

export default iCare;
