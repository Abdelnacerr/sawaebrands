import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
import Parallax from "../components/Parallax/Parallax.js";
import Header from "../components/Header/Header.js";
import Hlinks from "./Hlinks"; 
import Footer from "../components/Footer/Footer";
import SectionCarousel from "./SectionCarousel";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "../assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

function Home(props) {
  const classes = useStyles();
  return (
    <>
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
      <Parallax image={require("../assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <Typography variant="h1" component="h2" >
                  Sawae Brands.
                </Typography>{" "}
                <Typography className={classes.subtitle}variant="subtitle1" gutterBottom>
                  Wholesale perfumes distributor for leading brands.
                </Typography>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div
        style={{ backgroundColor: "#F2F3F4" }}
        className={classNames(classes.main, classes.mainRaised)}
      >
        <div style={{ width: "50%", margin: "auto" }}>
          <SectionCarousel />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
