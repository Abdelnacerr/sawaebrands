import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import Parallax from "../components/Parallax/Parallax.js";
import Header from "../components/Header/Header.js";
import Hlinks from "./Hlinks";
import ContactCards from "./ContactCards.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/material-kit-react/views/components.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import { Helmet } from 'react-helmet'

const useStyles = makeStyles(styles);
const TITLE = 'Contact'

function Contact() {
  const classes = useStyles();

  return (
    <>
    <Helmet>
          <title>{ TITLE }</title>
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
      <Parallax image={require("../assets/img/profile-bg.jpg")}  ></Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}> 
      <ContactCards 
        cardheader="General Info"
        title="Help Desk"
        email="abdelnacerr@gmail.com"
        call= "0711264219"
        person = "Mohamed Abdinasir"
        />  
        <Clearfix />
        
        <ContactCards 
        cardheader="General Manager"
        title="Manager"
        email="abdelnacerr@gmail.com"
        call= "0711264219"
        person = "Sharif Mohamed"
        /> 
      </div>
    </>
  );
}

export default Contact;
