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

                <Link to={{
                    pathname: '/',
                    scroll: 600
                }} className={classes.dropdownLink}>
                    <Button
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >
                        introduction
                    </Button>
                </Link>

            </ListItem >

            <ListItem className={classes.listItem}>

                <Link to={{
                    pathname: '/',
                    scroll: 2300
                }} className={classes.dropdownLink}>
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

                <Link to={{
                    pathname: '/',
                    scroll: 3000
                }} className={classes.dropdownLink}>
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

                <Link to={{
                    pathname: '/',
                    scroll: 3900
                }} className={classes.dropdownLink}>
                    <Button
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >
                        QUESTIONS
                </Button>
                </Link>
            </ListItem>

        </List >
    );
}
