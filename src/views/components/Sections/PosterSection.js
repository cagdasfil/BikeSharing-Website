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

import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import DescriptionIcon from '@material-ui/icons/Description';
import SubjectIcon from '@material-ui/icons/Subject';
import FindInPageIcon from '@material-ui/icons/FindInPage';

const useStyles = makeStyles(styles);
const useTeamStyles = makeStyles(teamStyles);

export default function DocumentsSection() {
  const classes = useStyles();
  const teamClasses = useTeamStyles();
  return (
    <div className={teamClasses.section}>
      
      <h2 className={teamClasses.title}>Poster</h2>

      <div className={classes.container}>
        

       
      </div>
    </div>
  );
}