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
import { Helmet } from "react-helmet";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import Button from "../components/CustomButtons/Button.js";

import profile from "assets/img/faces/download.png";

import Image1 from "assets/img/perfumes/118.jpg";
import Image2 from "assets/img/perfumes/70.jpg";
import Image3 from "assets/img/perfumes/Lumio.jpg";
import Image4 from "assets/img/perfumes/Promise.jpg";

const TITLE = "Sawae Brands";
const pDescription = 
  " We Source our fragrances from some of the best manufacturers in the world. Some of the fragrances are exotic, some are heavenly. Some will creep up your nose and make you fly, others are harmonious. Scroll below and have a glance or go to our brands section and dive deep into all divine scents we have, your olfactory receptors will thank you! ";
const pDescription2 = 
  "Just as we source from the best manufactures, we also stock our fragrances on the best shelves in the best supermarkets in Nairobi, Kenya. You will find us at International supermaket chain Carrefour, Tuskys and Naivas supermakets. We also supply to both retail and wholesale perfume shops across Nairobi. You could be next, so give us a ring if you like the brands we stock. Check the contact-us page for details. "
const brandName = "Our Fragrances";
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
    color: "",
    backgroundColor: "#FFC0CB",
    fontSize: "1.6rem",
    height: "70px",
    borderRadius: "8px",
    boxShadow: "0 5px 15px -8px red, 0 8px 15px -5px red",
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
          <div className={classes.description} style={{ marginTop: "-30px" }}>
            <p>{pDescription2}</p>
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
