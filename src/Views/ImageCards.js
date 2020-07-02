import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardHeader from "../components/Card/CardHeader.js";

const useStyles = makeStyles(styles);

const ImageCards = ({ cardheader, ImageName, subtitle }) => {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
      <GridContainer justify="">
        <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
          <div >
          <CardHeader style={{backgroundColor:"pink"}}><em style={{fontSize:"1.6rem"}}>{cardheader}</em></CardHeader>
          <img alt="..." src={ImageName} className={navImageClasses} />
          </div>
        </GridItem>
      </GridContainer>
  );
};
export default ImageCards;
