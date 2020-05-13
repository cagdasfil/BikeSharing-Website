/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
// core components
import styles from "../../../assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";
import teamStyles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import components from "../../../assets/img/components.png"
import technologies from "../../../assets/img/technologies.png"

const useStyles = makeStyles(styles);
const useTeamStyles = makeStyles(teamStyles);


export default function DescriptionSection() {
  const teamClasses = useTeamStyles();
  const classes = useStyles();
  return (
    <div className={teamClasses.section}>
      <h2 className={teamClasses.title}>Description</h2>
        <br />
        <h4 className={teamClasses.description}>
          BikeSharing is an user-friendly rental bike project. The main purpose of the project is 
          to increase bike usage in Turkey keeping up with the developing world standards in order 
          to reduce traffic load and make people healthier. The developed project for this purpose, 
          in briefly, exposes smart-lock system placed onto rentable bikes at the disposal of the 
          user who tag the developed mobile application with the individual QR code on smart-lock. 
        </h4>
        <br />
        <h4 className={teamClasses.description}>
          By this way, the lock can be locked or unlocked at any time via the developed mobile app 
          which keeps in contact since tagging. The whole process is subject to a payment system, 
          starting with the user picking up the bike from the first particular area, and lasting 
          until he ends the session in another area that is most convenient for user. These areas 
          are all virtual zones that are not required the hardware, so they are easily relocatable. 
          Providing a mobile application that allows the user to rent a bike, pay, open or close 
          the lock at any time and to follow all these processes easily will create an alternative 
          and easy-to-use transportation environment. 
        </h4>
        <br />
        <h4 className={teamClasses.description}>
          In these days when the safety, speed and using the time well are of great importance, 
          the BikeSharing will increase people's interest in cycling.
        </h4>
        <img src={components} width="75%"></img>
        <h4 className={teamClasses.description}>
          BikeSharing system consists of the Mobile Application, Cloud Server and BSDatabase. 
          Both Mobile Application and BSDatabase are in contact with each other by communicating 
          with Cloud Server.  Mobile Application is the interface that provides to transmit data 
          between user and the system. BSDatabase is the place where all the data are stored. 
          Cloud Server is the bridge among the BSDatabase and Mobile Application.
        </h4>
        <br />
        <h4 className={teamClasses.description}>
          As the external points the Smart-Lock is connected to cloud server to take information 
          from Database which can be controlled by Mobile Application and it decides whether its 
          situation is open or close. Payment services are performed via the Mobile Application and 
          make thr Mobile Application collect user payment data in BSDatabase. Besides, the system 
          management is the admin side of the project which provides configurations ability on the 
          system. In addition, admins can display logs and results.
        </h4>
    </div>
  );
}
