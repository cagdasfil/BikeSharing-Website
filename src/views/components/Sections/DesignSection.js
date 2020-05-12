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


export default function DesignSection() {
  const teamClasses = useTeamStyles();
  const classes = useStyles();
  return (
    <div className={teamClasses.section}>
        <h2 className={teamClasses.title}>Design</h2>
        <img src={technologies} width="75%"></img>
    </div>
  );
}
