/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Secitons"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Description
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              How It Works
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Project Details
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Documentation
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Team Members
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Contact Us
            </Link>,


          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://gitlab.ceng.metu.edu.tr/group29-bikesharing/49x-bikesharing"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download
        </Button>
      </ListItem>

    </List>
  );
}
