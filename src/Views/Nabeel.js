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
import Image5 from "assets/img/perfumes/WildLeopard.jpg";
import Image6 from "assets/img/perfumes/TheEncounterd.jpg";
import Image7 from "assets/img/perfumes/SoGood25.jpg";
import Image8 from "assets/img/perfumes/SoGood2.jpg";
import Image9 from "assets/img/perfumes/Rebellion3.jpg";
import Image10 from "assets/img/perfumes/SoGood6.jpg";
import Image11 from "assets/img/perfumes/Rebellion.jpg";
import Image12 from "assets/img/perfumes/SoGood.jpg";
import Image13 from "assets/img/perfumes/Lifetime.jpg";
import Image14 from "assets/img/perfumes/LetsImagine0.jpg";
import Image15 from "assets/img/perfumes/LetsImagine.jpg";
import Image16 from "assets/img/perfumes/HoldMeTight.jpg";
import Image17 from "assets/img/perfumes/DX77.jpg";
import Image18 from "assets/img/perfumes/DreamZPink1.jpg";
import Image19 from "assets/img/perfumes/DolbySport.jpg";
import Image20 from "assets/img/perfumes/Disco.jpg";
import Image21 from "assets/img/perfumes/ClubRicco2.jpg";
import Image22 from "assets/img/perfumes/ClubRicco.jpg";
import Image23 from "assets/img/perfumes/ClassicDenimWoman.jpg";
import Image24 from "assets/img/perfumes/ClassicDenimMan5.jpg";
import Image25 from "assets/img/perfumes/Classic Denim Man.jpg";
import Image26 from "assets/img/perfumes/ClassicDenim6.jpg";
import Image27 from "assets/img/perfumes/ChrisAdams.jpg";
import Image28 from "assets/img/perfumes/CatchMeWoman.jpg";
import Image29 from "assets/img/perfumes/Catch Me.jpg";
import Image30 from "assets/img/perfumes/CASignificonce.jpg";
import Image31 from "assets/img/perfumes/CASignature3.jpg";
import Image32 from "assets/img/perfumes/CAMan.jpg";
import Image33 from "assets/img/perfumes/CADreamZ3.jpg";
import Image34 from "assets/img/perfumes/CADreamZ2.jpg";
import Image35 from "assets/img/perfumes/CADreamZ.jpg";
import Image36 from "assets/img/perfumes/CADolby21.jpg";
import Image37 from "assets/img/perfumes/CADolby2.jpg";
import Image38 from "assets/img/perfumes/CAClassic.jpg";
import Image39 from "assets/img/perfumes/BlackShadow.jpg";
import Image40 from "assets/img/perfumes/aw8.jpg";
import Image41 from "assets/img/perfumes/Aqua De Oud.jpg";
import Image42 from "assets/img/perfumes/ActiveWomanBlanche.jpg";
import Image43 from "assets/img/perfumes/ActiveWoman5.jpg";
import Image44 from "assets/img/perfumes/ActiveMan3.jpg";
import Image45 from "assets/img/perfumes/ActiveMan.jpg";
import Image46 from "assets/img/perfumes/73.jpg";
import Image47 from "assets/img/perfumes/74.jpg";
import Image48 from "assets/img/perfumes/75.jpg";
import Image49 from "assets/img/perfumes/77.jpg";
import Image50 from "assets/img/perfumes/78.jpg";
import Image51 from "assets/img/perfumes/82.jpg";
import Image52 from "assets/img/perfumes/83.jpg";
import Image53 from "assets/img/perfumes/84.jpg";
import Image54 from "assets/img/perfumes/86.jpg";
import Image55 from "assets/img/perfumes/87.jpg";
import Image56 from "assets/img/perfumes/88.jpg";
import Image57 from "assets/img/perfumes/89.jpg";
import Image58 from "assets/img/perfumes/90.jpg";
import Image59 from "assets/img/perfumes/91.jpg";
import Image60 from "assets/img/perfumes/94.jpg";
import Image61 from "assets/img/perfumes/95.jpg";
import Image62 from "assets/img/perfumes/96.jpg";


























const TITLE = "Nabeel";
const pDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}';
const brandName = "Nabeel";

const cardheader1 = "Chris Adams Frequency ";
const cardheader2 = "Chris Adams Great Kingdom ";
const cardheader3 = "Incredible 100ML ";
const cardheader4 = "Powerful 100ML ";
const cardheader5 = "Wild Leopard ";
const cardheader6 = "The Encounter 100Ml";
const cardheader7 = "So Good 200Ml";
const cardheader8 = "So Good";
const cardheader9 = "Rebellion 200Ml";
const cardheader10 = "So Good 200Ml";
const cardheader11 = "Rebellion 100Ml";
const cardheader12 = "So Good";
const cardheader13 = "Life Time";
const cardheader14 = "Let's Imagine";
const cardheader15 = "Let's Imagine 100Ml";
const cardheader16 = "Hold Me Tight";
const cardheader17 = "DX 77";
const cardheader18 = "DreamZ Pink 200Ml";
const cardheader19 = "Dolby Sport 100Ml";
const cardheader20 = "Desco 80Ml";
const cardheader21 = "Club Ricco";
const cardheader22 = "Club Ricco 80Ml";
const cardheader23 = "Classic Denim Women";
const cardheader24 = "Classic 200Ml";
const cardheader25 = "Classic 100Ml";
const cardheader26 = "Classic 200Ml";
const cardheader27 = "Platinum Collection";
const cardheader28 = "Catch Me Woman";
const cardheader29 = "Catch Me  100Ml";
const cardheader30 = "Significonce";
const cardheader31 = "Signiting 200Ml";
const cardheader32 = "Man EAU Toilette";
const cardheader33 = "Dreamz Pink";
const cardheader34 = "Dreamz Pink";
const cardheader35 = "Dreamz Pink";
const cardheader36 = "Dolbay 200Ml";
const cardheader37 = "Dolbay 200Ml";
const cardheader38 = "Classic 100Ml";
const cardheader39 = "Chris Adams Black Shadow";
const cardheader40 = "Active Woman Blanche";
const cardheader41 = "Aqua De Oud ";
const cardheader42 = "Active Woman Blanche ";
const cardheader43= "Active Woman 200Ml ";
const cardheader44= "Active Man 200Ml ";
const cardheader45= "Active Man ";
const cardheader46= "Nabeel Ood Maamul ";
const cardheader47= "Nabeel Tajebni Mini Bakhoor ";
const cardheader48= "Swiss Arabian Noora ";
const cardheader49= "Nabeel Bakhoor Ghawi ";
const cardheader50= "Nabeel Black Bakhoor ";
const cardheader51= "Nabeel Bakhoor Wow ";
const cardheader52= "Nabeel Oudh Nabeel";
const cardheader53= "Nabeel Bakhoor ";
const cardheader54= "Nabeel Oudh Nasaem ";
const cardheader55= "Nabeel Habibi LilAbail";
const cardheader56= "Oudh Nabeel Black";
const cardheader57= "Nabeel limia";
const cardheader58= "Nabeel Bakhoor Nasaem ";
const cardheader59= "Nabeel Bakhoor Maamul ";
const cardheader60= "Nabeel Maamul Adar ";
const cardheader61= "Nabeel Surf 100Ml ";
const cardheader62= "Nabeel Majestic ";



































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
          <ImageCards ImageName={Image35} cardheader={cardheader35} />
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
          

















































          









          <hr style={{ borderColor: "pink" }}></hr>



          <Footer />
        </div>
      </div>
    </>
  );
};

export default Nabeel;
