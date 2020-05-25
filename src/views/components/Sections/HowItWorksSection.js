import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function HowItWorksSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>How It Works</h2>
          <h5 className={classes.description}>

          </h5>
          <br />
          <br />
          <br />
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>

            <InfoArea
              title="Register and Login"
              description="Download BikeSharing mobile application and login,
              find the closest virtual zone by using zones page in the app."
              vertical
              imageName="DownloadApp"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Scan QR Code"
              description="After loading enough money on your account, scan the QR code on the bike and start to ride."
              vertical
              imageName="ScanQr"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="End Session"
              description="Find the closest virtual zone and click the end session button to finish your session."
              vertical
              imageName="EndSession"
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
