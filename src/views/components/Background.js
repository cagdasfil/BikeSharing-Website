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

export default function Background(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <Parallax filter image={require("../../assets/img/ss.jpg")}>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <h1 className={classes.title}></h1>
                        <h4>
                        </h4>
                        <br />
                        <Button
                            color="danger"
                            size="lg"
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fas fa-play" />
                             Watch video
                            </Button>
                    </GridItem>
                </GridContainer>
            </div>
        </Parallax>
    );
}
