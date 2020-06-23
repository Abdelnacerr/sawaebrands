import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header/Header.js";
import Hlinks from "./Hlinks";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Typography from "@material-ui/core/Typography";
import Footer from "../components/Footer/Footer";
import SectionReusable from "./SectionReusable";
import { Helmet } from "react-helmet";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

// @material-ui/icons
import FormatSize from "@material-ui/icons/FormatSize";
import DoneOutline from "@material-ui/icons/DoneOutline";
import OpenWith from "@material-ui/icons/OpenWith";

import profile from "assets/img/faces/christian.jpg";
import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/swiss1.png";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

const TITLE = "Sawae Brands";
const pDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}';
const brandName = "Christian Louboutin";
const tabButton1 = "Tuskys";
const tabButton2 = "Naivas";
const tabButton3 = "Carrefour";

const useStyles = makeStyles(styles);

const Home = () => {
  const classes = useStyles();
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
      <Parallax image={require("../assets/img/profile-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <Typography
                  variant="h1"
                  component="h2"
                  style={{ color: "white" }}
                >
                  Sawae Brands.
                </Typography>{" "}
                <Typography
                  style={{ color: "white" }}
                  className={classes.subtitle}
                  variant="subtitle1"
                  gutterBottom
                >
                  Wholesale perfumes and sprays distributor for leading brands.
                </Typography>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <SectionReusable
        Icon1={FormatSize}
        Icon2={DoneOutline}
        Icon3={OpenWith}
        tabButton={tabButton1}
        tabButton2={tabButton2}
        tabButton3={tabButton3}
        brandName={brandName}
        pDescription={pDescription}
        profile={profile}
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <SectionReusable
        Icon1={FormatSize}
        Icon2={DoneOutline}
        Icon3={OpenWith}
        tabButton={tabButton1}
        tabButton2={tabButton2}
        tabButton3={tabButton3}
        brandName={brandName}
        pDescription={pDescription}
        profile={profile}
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
};

export default Home;
