import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

import Parallax from "../components/Parallax/Parallax.js";
import Header from "../components/Header/Header.js";
import Hlinks from "./Hlinks";
import Cards from "./Cards";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/material-kit-react/views/components.js";

import bg3 from "../assets/img/bg3.jpg";

const useStyles = makeStyles(styles);
function Perfumes() {
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
      <Parallax image={require("../assets/img/bg4.jpg")}> </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)} 
        style={{display:"flex", justifyContent: "space-around" }}> 
      
      <Cards image={bg3} /> 
      <Cards image={bg3} /> 
      <Cards image={bg3} /> 
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className={classNames(classes.main, classes.mainRaised)} 
        style={{display:"flex", justifyContent: "space-around"}}> 
      
      <Cards image={bg3} cardheader="Sapil" description="Swiss Arabian"/> 
      <Cards image={bg3} cardheader="Sapil" description="Swiss Arabian"/> 
      <Cards image={bg3} /> 
      </div>
    </>
  );
}

export default Perfumes;
