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
                <div style={{fontWeight:"900", /*color:"#23395b"*/}}>
                    <br/>
                    <h1>BikeSharing</h1>
                    <h2>next generation bike sharing platform</h2>
                </div>
                <br />
                <br />
                <div>
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
                </div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
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
