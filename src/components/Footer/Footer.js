/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import { Link } from "react-router-dom";

import styles from "../../assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://gitlab.ceng.metu.edu.tr/group29-bikesharing/49x-bikesharing"
                className={classes.block}
                target="_blank"
              >
                Our Works
              </a>
            </ListItem>

            <ListItem className={classes.inlineBlock}>
              <Link to="/contacts" className={classes.block}>
                About us
              </Link>
            </ListItem>

            <ListItem className={classes.inlineBlock}>
              <Link to="/contacts" className={classes.block}>
                Contact us
              </Link>
            </ListItem>


          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}
          <Favorite className={classes.icon} /> by{" "}
            BikeSharing
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
