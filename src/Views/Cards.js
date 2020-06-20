import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import Button from "../components/CustomButtons/Button.js";
import CardHeader from "../components/Card/CardHeader.js";

import { cardTitle } from "../assets/jss/material-kit-react.js";
import { Description } from "@material-ui/icons";

const styles = {
  cardTitle,
  textCenter: {
    textAlign: "center"
  },
  textRight: {
    textAlign: "right"
  }
};

const useStyles = makeStyles(styles);

const Cards = ({image,cardheader,description}) => {
  const classes = useStyles();
  return(
    <div>
      <Card style={{width: "20rem"}} >
      <CardHeader color="warning">{cardheader}</CardHeader>
      <img style={{height: "10rem"}}src={image} alt="" />

      <CardBody >
        <h4 className={classes.cardTitle}>Special title treatment</h4>
        <p>
         {description}
        </p>
        <Button color="primary">Do something</Button>
      </CardBody>
    </Card>
    </div>
  );
  }
export default Cards;