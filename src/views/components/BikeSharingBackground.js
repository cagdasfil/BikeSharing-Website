import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Parallax from "../../components/Parallax/Parallax.js";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

// store-buttons Get BikeSharing
import MobileStoreButton from 'react-mobile-store-button';
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles(styles);

export default function Background(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const iOSUrl = '#';
    const androidUrl = '#';
    return (
        <Parallax filter image={require("../../assets/img/ss.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>BikeSharing</h1>
              <h3 className={classes.title} styles={{'backdrop-filter': 'blur(3px)'}}><i>
               'a new perspective on bike sharing platforms...'</i> </h3>
              <br />
              <br />
              <br />
              <br />
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>

              
            </GridItem>
            <GridItem xs={12} sm={12} md={3}></GridItem>
            <GridItem xs={12} sm={12} md={3}>
            <MobileStoreButton
                    store="android"
                    url={androidUrl}
                    width = {131}
                    height = {131}
                    linkProps={{ title: 'Google Play Button' }}
                    />
                    <MobileStoreButton
                    store="ios"
                    url={iOSUrl}
                    width = {120}
                    height = {123}
                    linkProps={{ title: 'iOS Store Button' }}
                    />    
            </GridItem>
          </GridContainer>
        </div>
        </Parallax>
    );
}
