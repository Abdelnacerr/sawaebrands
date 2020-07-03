import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import Parallax from "../components/Parallax/Parallax.js";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import Hlinks from "./Hlinks";
import ContactCards from "./ContactCards.js";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "../assets/jss/material-kit-react/views/components.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import { Helmet } from "react-helmet";

const useStyles = makeStyles(styles);
const TITLE = "Contact";

function Contact() {
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
                  Please find our contact info below, direct your queries to
                  relevant department.
                </Typography>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <ContactCards
          cardheader="General Info"
          title="Help Desk"
          email="info@sawaebrands.com"
          call="074636121"
          person="Mohamed"
          poBox=" P.O Box:  77903-00610 "
          city=" Nairobi, Kenya"
          Hi
        />
        <Clearfix />

        <ContactCards
          cardheader="General Manager"
          title="Manager"
          email="sharif@sawaebrands.com"
          call="0740636101"
          person="Sharif Mohamed"
        />
      </div>

      <hr style={{ borderColor: "pink" }}></hr>

      <Footer />
    </>
  );
}

export default Contact;
