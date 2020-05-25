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

const useStyles = makeStyles(styles);

export default function Background(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const iOSUrl = '#';
    const androidUrl = '#';
    return (
        <Parallax filter image={require("../../assets/img/main.jpg")}>
                <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
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

              <MobileStoreButton
                    store="android"
                    url={androidUrl}
                    width = {171}
                    height = {161}
                    linkProps={{ title: 'Google Play Button' }}
                    />
                    <MobileStoreButton
                    store="ios"
                    url={iOSUrl}
                    width = {150}
                    height = {150}
                    linkProps={{ title: 'iOS Store Button' }}
                    />    
            </GridItem>

          </GridContainer>
        </div>
        </Parallax>
    );
}
