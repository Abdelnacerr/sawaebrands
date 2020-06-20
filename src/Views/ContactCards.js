import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CardHeader from "../components/Card/CardHeader.js";
import { Email, Call, Person } from "@material-ui/icons";

import { cardTitle } from "../assets/jss/material-kit-react.js";

const styles = {
  cardTitle,
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },
};

const useStyles = makeStyles(styles);

const ContactCards = ({ email, cardheader, title, call, person }) => {
  const classes = useStyles();
  return (
    <div>
      <Card style={{ width: "20rem" }}>
        <CardHeader color="warning">{cardheader}</CardHeader>
        <CardBody>
          <h4 className={classes.cardTitle}> {title}</h4>
          <h4> <Person /> {person} </h4>
          <h4> <Email />  {email} </h4>
          <h4> <Call />   {call}  </h4>
        </CardBody>
      </Card>
    </div>
  );
};
export default ContactCards;
