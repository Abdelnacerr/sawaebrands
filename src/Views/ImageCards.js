import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const useStyles = makeStyles(styles);

const ImageCards = ({ cardheader, ImageName, subtitle }) => {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <GridContainer justify="">
        <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
          <subtitle>
            <h4>{subtitle}</h4>
          </subtitle>
          <img alt="..." src={ImageName} className={navImageClasses} />
        </GridItem>
      </GridContainer>
    </div>
  );
};
export default ImageCards;
