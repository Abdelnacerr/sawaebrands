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

import profile from "assets/img/faces/swissArabian.jpeg";

import Image1 from "assets/img/perfumes/MissGlam.jpg";
import Image2 from "assets/img/perfumes/76.jpg";
import Image3 from "assets/img/perfumes/Lifetime.jpg";
import Image4 from "assets/img/perfumes/layali.jpg";
import Image5 from "assets/img/perfumes/49.jpg";
import Image6 from "assets/img/perfumes/50.jpg";
import Image7 from "assets/img/perfumes/51.jpg";
import Image8 from "assets/img/perfumes/85.jpg";
import Image9 from "assets/img/perfumes/52.jpg";
import Image10 from "assets/img/perfumes/53.jpg";
import Image11 from "assets/img/perfumes/54.jpg";
import Image12 from "assets/img/perfumes/55.jpg";
import Image13 from "assets/img/perfumes/121Men.jpg";
import Image14 from "assets/img/perfumes/56.jpg";
import Image15 from "assets/img/perfumes/57.jpg";
import Image16 from "assets/img/perfumes/121Men1.jpg";
import Image17 from "assets/img/perfumes/1998.jpg";
import Image18 from "assets/img/perfumes/58.jpg";
import Image19 from "assets/img/perfumes/59.jpg";
import Image20 from "assets/img/perfumes/Adore.jpg";
import Image21 from "assets/img/perfumes/60.jpg";
import Image22 from "assets/img/perfumes/ahlam.jpg";
import Image23 from "assets/img/perfumes/61.jpg";
import Image24 from "assets/img/perfumes/AlBakhoos.jpg";
import Image25 from "assets/img/perfumes/AlBakhoos2.jpg";
import Image26 from "assets/img/perfumes/62.jpg";
import Image27 from "assets/img/perfumes/AlBakhoos6.jpg";
import Image28 from "assets/img/perfumes/63.jpg";
import Image29 from "assets/img/perfumes/AltaModa7.jpg";
import Image30 from "assets/img/perfumes/amber.jpg";
import Image31 from "assets/img/perfumes/amberaffair.jpg";
import Image32 from "assets/img/perfumes/64.jpg";
import Image33 from "assets/img/perfumes/65.jpg";
import Image34 from "assets/img/perfumes/66.jpg";
import Image35 from "assets/img/perfumes/71.jpg";
import Image36 from "assets/img/perfumes/67.jpg";
import Image37 from "assets/img/perfumes/68.jpg";
import Image38 from "assets/img/perfumes/69.jpg";
import Image39 from "assets/img/perfumes/70.jpg";
import Image40 from "assets/img/perfumes/72.jpg";
import Image41 from "assets/img/perfumes/79.jpg";
import Image42 from "assets/img/perfumes/80.jpg";
import Image43 from "assets/img/perfumes/ActiveMan.jpg";
import Image44 from "assets/img/perfumes/ActiveMan3.jpg";
import Image45 from "assets/img/perfumes/ActiveManBlanc.jpg";
import Image46 from "assets/img/perfumes/ActiveManBlanc2.jpg";
import Image47 from "assets/img/perfumes/ActiveWoman5.jpg";
import Image48 from "assets/img/perfumes/ActiveWomanBlanche.jpg";
import Image49 from "assets/img/perfumes/ActiveWomanBlanche4.jpg";
import Image50 from "assets/img/perfumes/amberrose.jpg";
import Image51 from "assets/img/perfumes/Aqua De Oud.jpg";
import Image52 from "assets/img/perfumes/ArmyFight.jpg";
import Image53 from "assets/img/perfumes/AX.jpg";
import Image54 from "assets/img/perfumes/AzuraPourHomme.jpg";
import Image55 from "assets/img/perfumes/BeauContour.jpg";
import Image56 from "assets/img/perfumes/BlackCar.jpg";
import Image57 from "assets/img/perfumes/BlackCar9.jpg";
import Image58 from "assets/img/perfumes/BlackMarket.jpg";
import Image59 from "assets/img/perfumes/BlackMarket0.jpg";
import Image60 from "assets/img/perfumes/BlackShadow2.jpg";
import Image61 from "assets/img/perfumes/BleuFizz.jpg";
import Image62 from "assets/img/perfumes/BluNuvo.jpg";
import Image63 from "assets/img/perfumes/Bohemian.jpg";
import Image64 from "assets/img/perfumes/BonitaPourHomme.jpg";
import Image65 from "assets/img/perfumes/Challenge.jpg";
import Image66 from "assets/img/perfumes/Chichi4.jpg";
import Image67 from "assets/img/perfumes/ChichiPourFemme.jpg";




const TITLE = "Swiss Arabian";
const pDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}';
const brandName = "Swiss Arabian";

const cardheader1 = "AltaModa Miss Glam ";
const cardheader2 = "Swiss Arabian Nooraa ";
const cardheader3 = "Chris Adams Lifetime 100ML ";
const cardheader4 = "Swiss Arabian Layali ";
const cardheader5 = "Sapil Disclosure ";
const cardheader6 = "Sapil Nice Feelings ";
const cardheader7 = "Sapil Consensual 200Ml ";
const cardheader8 = "Swiss Arabian Jawad ";
const cardheader9 = "Sapil Fatal Beauty 200Ml ";
const cardheader10 = "Sapil Revival 200Ml ";
const cardheader11 = "Sapil Solid 200Ml ";
const cardheader12 = "Sapil Universal";
const cardheader13 = "Shirley May 121 Men 100Ml";
const cardheader14 = "Sapil Chichi 200Ml";
const cardheader15 = "Sapil Lumio";
const cardheader16 = "Shirley May 121 Men";
const cardheader17 = "Shirley May 1998";
const cardheader18 = "Sapil Bohemian";
const cardheader19 = "Sapil Virtual";
const cardheader20 = "AltaModa Adore 100Ml";
const cardheader21 = "Sapil Nice Feelings 200Ml";
const cardheader22 = "Swiss Arabian Ahlam";
const cardheader23 = "AltaModa Parfum D'Exces ";
const cardheader24 = "Shirley May Albakhoos 100Ml ";
const cardheader25 = "Shirley May Albakhoos 50Ml ";
const cardheader26 = "AltaModa Nuit Extreme Pour Home ";
const cardheader27 = "Shirley May Albakhoos 200Ml ";
const cardheader28 = "AltaModa Victory 200Ml ";
const cardheader29 = "AltaModa Sweat Heart 200Ml  ";
const cardheader30 = "Sapil Amber Affair  ";
const cardheader31 = "Sapil   ";
const cardheader32 = "AltaModa Elite 200Ml";
const cardheader33 = "AltaModa Coquette 200Ml";
const cardheader34 = "AltaModa Beau Contour";
const cardheader35 = "Swiss Arabian Mutamayes";
const cardheader36 = "AltaModa Origin Intense";
const cardheader37 = "AltaModa Real 200Ml";
const cardheader38 = "AltaModa Black cash 200Ml";
const cardheader39 = "Swiss Arabian Rasheeqa";
const cardheader40 = "Swiss Arabian Zahra";
const cardheader41 = "Swiss Arabian Al Ayam";
const cardheader42 = "Swiss Arabian Hoor";
const cardheader43 = "Chris Adams Active Man ";
const cardheader44 = "Chris Adams Active Man ";
const cardheader45 = "Chris Adams Active Man Blanc  ";
const cardheader46 = "Chris Adams Active Man Blanc  ";
const cardheader47 = "Chris Adams Active Woman 200Ml  ";
const cardheader48 = "Chris Adams Active Woman Blanche  ";
const cardheader49 = "Chris Adams Active Woman Blanche  ";
const cardheader50 = "Sapil Oreintal  ";
const cardheader51 = "Chris Adams Aqua De Oud ";
const cardheader52 = "Shirley May Army Fight 100Ml";
const cardheader53 = "Shirley May Ax 100Ml";
const cardheader54 = "Swiss Arabian Azura";
const cardheader55 = "AltaModa Beau Contaur ";
const cardheader56 = "Shirley May Black Car 100Ml ";
const cardheader57 = "Shirley May Black Car 200Ml ";
const cardheader58= "Shirley May Black Market 100Ml ";
const cardheader59= "Shirley May Black Market 200Ml ";
const cardheader60 = "Shirley May Black Shadow";
const cardheader61 = "Shirley May Bleu Fizz 100Ml";
const cardheader62 = "Swiss Arabian  Blu Nuvo 100Ml";
const cardheader63 = "Sapil BoheMian";
const cardheader64 = "Swiss Arabian Bonita";
const cardheader65 = "Sapil Chalenge 100Ml";
const cardheader66 = "Sapil Chichi 200Ml";
const cardheader67 = "Sapil Chichi 100Ml";

































































const useStyles = makeStyles(styles);

const SwissArabian = () => {
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
        brand="Swiss Arabian"
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
                  Swiss Arabian.
                </Typography>{" "}
                <Typography
                  style={{ color: "white" }}
                  className={classes.subtitle}
                  variant="subtitle1"
                  gutterBottom
                >
                  REDEFINING THE INTUITIVE BLEND OF FINEST PERFUMERY ART{" "}
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
          <ImageCards ImageName={Image5} cardheader={cardheader5} />
          <ImageCards ImageName={Image6} cardheader={cardheader6} />
          <ImageCards ImageName={Image7} cardheader={cardheader7} />
          <ImageCards ImageName={Image8} cardheader={cardheader8} />
          <ImageCards ImageName={Image9} cardheader={cardheader9} />
          <ImageCards ImageName={Image10} cardheader={cardheader10} />
          <ImageCards ImageName={Image11} cardheader={cardheader11} />
          <ImageCards ImageName={Image12} cardheader={cardheader12} />
          <ImageCards ImageName={Image13} cardheader={cardheader13} />
          <ImageCards ImageName={Image14} cardheader={cardheader14} />
          <ImageCards ImageName={Image15} cardheader={cardheader15} />
          <ImageCards ImageName={Image16} cardheader={cardheader16} />
          <ImageCards ImageName={Image17} cardheader={cardheader17} />
          <ImageCards ImageName={Image18} cardheader={cardheader18} />
          <ImageCards ImageName={Image19} cardheader={cardheader19} />
          <ImageCards ImageName={Image20} cardheader={cardheader20} />
          <ImageCards ImageName={Image21} cardheader={cardheader21} />
          <ImageCards ImageName={Image22} cardheader={cardheader22} />
          <ImageCards ImageName={Image23} cardheader={cardheader23} />
          <ImageCards ImageName={Image24} cardheader={cardheader24} />
          <ImageCards ImageName={Image25} cardheader={cardheader25} />
          <ImageCards ImageName={Image26} cardheader={cardheader26} />
          <ImageCards ImageName={Image27} cardheader={cardheader27} />
          <ImageCards ImageName={Image28} cardheader={cardheader28} />
          <ImageCards ImageName={Image29} cardheader={cardheader29} />
          <ImageCards ImageName={Image30} cardheader={cardheader30} />
          <ImageCards ImageName={Image31} cardheader={cardheader31} />
          <ImageCards ImageName={Image32} cardheader={cardheader32} />
          <ImageCards ImageName={Image33} cardheader={cardheader33} />
          <ImageCards ImageName={Image34} cardheader={cardheader34} />
          <ImageCards ImageName={Image36} cardheader={cardheader36} />
          <ImageCards ImageName={Image37} cardheader={cardheader37} />
          <ImageCards ImageName={Image38} cardheader={cardheader38} />
          <ImageCards ImageName={Image39} cardheader={cardheader39} />
          <ImageCards ImageName={Image40} cardheader={cardheader40} />
          <ImageCards ImageName={Image41} cardheader={cardheader41} />
          <ImageCards ImageName={Image42} cardheader={cardheader42} />
          <ImageCards ImageName={Image43} cardheader={cardheader43} />
          <ImageCards ImageName={Image44} cardheader={cardheader44} />
          <ImageCards ImageName={Image45} cardheader={cardheader45} />
          <ImageCards ImageName={Image46} cardheader={cardheader46} />
          <ImageCards ImageName={Image47} cardheader={cardheader47} />
          <ImageCards ImageName={Image48} cardheader={cardheader48} />
          <ImageCards ImageName={Image49} cardheader={cardheader49} />
          <ImageCards ImageName={Image50} cardheader={cardheader50} />
          <ImageCards ImageName={Image51} cardheader={cardheader51} />
          <ImageCards ImageName={Image52} cardheader={cardheader52} />
          <ImageCards ImageName={Image53} cardheader={cardheader53} />
          <ImageCards ImageName={Image54} cardheader={cardheader54} />
          <ImageCards ImageName={Image55} cardheader={cardheader55} />
          <ImageCards ImageName={Image56} cardheader={cardheader56} />
          <ImageCards ImageName={Image57} cardheader={cardheader57} />
          <ImageCards ImageName={Image58} cardheader={cardheader58} />
          <ImageCards ImageName={Image59} cardheader={cardheader59} />
          <ImageCards ImageName={Image60} cardheader={cardheader60} />
          <ImageCards ImageName={Image61} cardheader={cardheader61} />
          <ImageCards ImageName={Image62} cardheader={cardheader62} />
          <ImageCards ImageName={Image63} cardheader={cardheader63} />
          <ImageCards ImageName={Image64} cardheader={cardheader64} />
          <ImageCards ImageName={Image65} cardheader={cardheader65} />
          <ImageCards ImageName={Image66} cardheader={cardheader66} />
          <ImageCards ImageName={Image67} cardheader={cardheader67} />





























































          <hr style={{ borderColor: "pink" }}></hr>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default SwissArabian;
