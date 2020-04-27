/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Button from "../../../components/CustomButtons/Button.js";
import styles from "../../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function BikesharingTabs() {
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
                        GET BIKESHARING
                    </Button>
                </Link>

            </ListItem >

            <ListItem className={classes.listItem}>

                <Link to="/" className={classes.dropdownLink}>
                    <Button
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >
                        HOW IT WORKS
                </Button>
                </Link>

            </ListItem >

            <ListItem className={classes.listItem}>

                <Link to="/" className={classes.dropdownLink}>
                    <Button
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >
                        ZONES
                </Button>
                </Link>
            </ListItem>

            <ListItem className={classes.listItem}>

                <Link to="/" className={classes.dropdownLink}>
                    <Button
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >
                        questionnaires
                </Button>
                </Link>
            </ListItem>

        </List >
    );
}
