import React from "react";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header/Header.js";
import Hlinks from "./Hlinks";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Typography from "@material-ui/core/Typography";
import Footer from "../components/Footer/Footer";
import ImageCards from "./ImageCards";
import { Helmet } from "react-helmet";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

import profile from "assets/img/faces/nabeel.jpeg";

import Image1 from "assets/img/perfumes/Frequency.jpg";
import Image2 from "assets/img/perfumes/GreatKingdom.jpg";
import Image3 from "assets/img/perfumes/Incredible.jpg";
import Image4 from "assets/img/perfumes/Powerful.jpg";

const TITLE = "Nabeel";
const pDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}';
const brandName = "Nabeel";

const cardheader1 = "Chris Adams Frequency ";
const cardheader2 = "Chris Adams Great Kingdom ";
const cardheader3 = "Incredible 100ML ";
const cardheader4 = "Powerful 100ML ";
const useStyles = makeStyles(styles);

const Nabeel = () => {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Header
        brand="Nabeel"
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
                  Nabeel Perfumes.
                </Typography>{" "}
                <Typography
                  style={{ color: "white" }}
                  className={classes.subtitle}
                  variant="subtitle1"
                  gutterBottom
                >
                  50 YEARS OF TRUSTED EXPERIENCE AND INNOVATION IN EXCEPTIONAL PERFUMERY.
                </Typography>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={profile} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>{brandName}</h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <p>{pDescription}</p>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <ImageCards ImageName={Image1} cardheader={cardheader1} />
          <ImageCards ImageName={Image2} cardheader={cardheader2} />
          <ImageCards ImageName={Image3} cardheader={cardheader3} />
          <ImageCards ImageName={Image4} cardheader={cardheader4} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Nabeel;
