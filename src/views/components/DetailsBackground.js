import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Parallax from "../../components/Parallax/Parallax.js";
import styles from "./../../assets/jss/material-kit-react/views/landingPage.js";

const useStyles = makeStyles(styles);

export default function DetailsBackground(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <Parallax filter image={require("../../assets/img/Details.png")}>
            <div className={classes.container}>
                <h1 className={classes.title} >Technical Details</h1>
            </div>
        </Parallax>
    );
}
