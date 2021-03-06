/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link} from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, Email, Info, Home, Twitter,Facebook, Instagram } from "@material-ui/icons";

// core components
import CustomDropdown from "../components/CustomDropdown/CustomDropdown.js";
import Button from "../components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function Hlinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
       <ListItem className={classes.listItem}>
          <Button
          component={Link}
           Link to="/"
            color="transparent"
            className={classes.navLink}
          >
            <Home className={classes.icons} /> Home
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Brands"
            buttonProps={{
              className: classes.navLink,
              color: "transparent",
            }}
            buttonIcon={Apps}
            dropdownList={[
              <Link to="/SwissArabian" className={classes.dropdownLink}>
                SwissArabian
              </Link>,
              <Link to="/Nabeel" className={classes.dropdownLink}>
              Nabeel
            </Link>,<Link to="/iCare" className={classes.dropdownLink}>
                iCare
              </Link>,
            ]}
          />
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
          component={Link}
           Link to="/About"
            color="transparent"
            className={classes.navLink}
          >
            <Info className={classes.icons} /> About Us
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            component={Link}
            to="/Contact"
            color="transparent"
            className={classes.navLink}
          >
            <Email className={classes.icons} /> Contact US
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        > 
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <Twitter className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <Facebook className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <Instagram className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
