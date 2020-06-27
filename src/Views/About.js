import React from "react";

import Parallax from "../components/Parallax/Parallax.js";
import Header from "../components/Header/Header.js";
import Hlinks from "./Hlinks";
import Typography from "@material-ui/core/Typography";
import { Helmet } from "react-helmet";

const TITLE = "About";

function About() {
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
      <Typography variant="h1" component="h2" style={{ color: "black" }}>
        Coming Soon.
      </Typography>
    </>
  );
}

export default About;
