/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Build, DirectionsBike, PermContactCalendar } from "@material-ui/icons";

// core components
import Button from "../../components/CustomButtons/Button.js";
import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

import logo from "../../assets/img/logo.png"

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>

      <ListItem className={classes.listItem}>

        <Link to="/" className={classes.dropdownLink}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <img src={logo} width={110}/>
          </Button>
        </Link>

      </ListItem >
      <ListItem className={classes.listItem}>
        <Link to="/details" className={classes.dropdownLink}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <Build className={classes.icons} /> Technical Details
        </Button>

        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/contacts" className={classes.dropdownLink}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <PermContactCalendar className={classes.icons} /> Contacts
        </Button>

        </Link>
      </ListItem>

    </List >
  );
}
