import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

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
import "./ButtonStyle.css";
import { Helmet } from "react-helmet";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import Button from "../components/CustomButtons/Button.js";

import profile from "assets/img/faces/sawae.jpeg";

import Image1 from "assets/img/perfumes/118.jpg";
import Image2 from "assets/img/perfumes/70.jpg";
import Image3 from "assets/img/perfumes/Lumio.jpg";
import Image4 from "assets/img/perfumes/Promise.jpg";

const TITLE = "Sawae Brands";
const pDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}';
const brandName = "Fragrances";
const supermarketBrands = "OUR CUSTOMERS";

const cardheader1 = "Viso 100ML";
const cardheader2 = "Rasheeqa";
const cardheader3 = "Lumio 75ML";
const cardheader4 = "Promise 100ML";

const useStyles = makeStyles(styles);

const Home = () => {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const buttonStyle = {
    color: "red",
    backgroundColor: "#FFC0CB",
    fontSize: "1.6rem",
    height: "70px",
    borderRadius: "8px",
  };

  const divButton = {
    display: "flex",
    justifyContent: "center",
  };
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
                  WHOLESALE PERFUMES AND SPRAYS DISTRIBUTOR FOR LEADING BRANDS.
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
            <br />
            <br />
            <br />
          </div>
          <ImageCards ImageName={Image1} cardheader={cardheader1} />
          <ImageCards ImageName={Image2} cardheader={cardheader2} />
          <ImageCards ImageName={Image3} cardheader={cardheader3} />
          <ImageCards ImageName={Image4} cardheader={cardheader4} />

          <div style={divButton}>
            <Button
              style={buttonStyle}
              component={Link}
              to="/SwissArabian"
              color="transparent"
              className={classes.navLink}
            >
              <em>More Brands &#10145;</em>
            </Button>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />

          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title}>{supermarketBrands}</h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description} style={{ marginTop: "-20px" }}>
            <p>{pDescription}</p>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr style={{ borderColor: "pink" }}></hr>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
