/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import styles from "../../../assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";
import teamStyles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import "../../../../node_modules/video-react/dist/video-react.css"; // import css

import { Player } from 'video-react';


const useStyles = makeStyles(styles);
const useTeamStyles = makeStyles(teamStyles);

export default function DocumentsSection() {
  const classes = useStyles();
  const teamClasses = useTeamStyles();
  return (
    <div className={teamClasses.section}>

      <h2 className={teamClasses.title}>Demo Video</h2>
      <br />

      <br />


      <div className={classes.container}
      >
        <iframe width="800" height="500" src="https://www.youtube.com/embed/K4G8yDNCZvc"> </iframe>
      </div>
    </div>
  );
}