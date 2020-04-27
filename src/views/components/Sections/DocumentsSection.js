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

import retro1 from "../../../documents/BikeSharing-retro1.pdf"
import retro2 from "../../../documents/BikeSharing-retro2.pdf"
import retro3 from "../../../documents/BikeSharing-retro3.pdf"
import retro4 from "../../../documents/BikeSharing-retro4.pdf"
import retro5 from "../../../documents/BikeSharing-retro5.pdf"
import retro6 from "../../../documents/BikeSharing-retro6.pdf"
import retro7 from "../../../documents/BikeSharing-retro7.pdf"
import prop from "../../../documents/BikeSharing.pdf"
import designDoc from "../../../documents/BikeSharing-design.pdf"
import kickoff from "../../../documents/BikeSharing-kickoff.pdf"

const useStyles = makeStyles(styles);
const useTeamStyles = makeStyles(teamStyles);

export default function DocumentsSection() {
  const classes = useStyles();
  const teamClasses = useTeamStyles();
  return (
    <div className={teamClasses.section}>
      <h2 className={teamClasses.title}>Documentation</h2>

      <div className={classes.container}>


        <br />
        <br />


        <GridContainer xs={12} sm={12} md={12}>
          <GridItem xs={12} sm={12} md={3}>
            <a href={prop} target="_blank">
              <Button
                color="rose"
                block
              >
                < DescriptionIcon className={classes.icon} />

                  Project Proposal
            </Button>
            </a>
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
            <a href={kickoff} target="_blank">
              <Button
                color="rose"
                block
              >
                < SubjectIcon className={classes.icon} />
                  Kickoff

            </Button>
            </a>
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
            <a href={designDoc} target="_blank">
              <Button
                color="rose"
                block
              >
                < FindInPageIcon className={classes.icon} />

                  Design Overview
            </Button>
            </a>
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
            <a href target="_blank">
              <a href={retro1} target="_blank">
                <Button
                  color="primary"
                  block
                >
                  < PictureAsPdfIcon className={classes.icon} />

                Retrospective 1
            </Button>
              </a>
            </a>
          </GridItem>
        </GridContainer>


        <br />


        <GridContainer xs={12} sm={12} md={12}>
          <GridItem xs={12} sm={12} md={3}>
            <a href={retro2} target="_blank">
              <Button
                color="primary"
                block
              >
                < PictureAsPdfIcon className={classes.icon} />

                Retrospective 2
            </Button>
            </a>
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
            <a href={retro3} target="_blank">
              <Button
                color="primary"
                block
              >
                < PictureAsPdfIcon className={classes.icon} />

                Retrospective 3
            </Button>
            </a>
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
            <a href={retro4} target="_blank">
              <Button
                color="primary"
                block
              >
                < PictureAsPdfIcon className={classes.icon} />

                Retrospective 4
            </Button>
            </a>
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
            <a href={retro5} target="_blank">
              <Button
                color="primary"
                block
              >
                < PictureAsPdfIcon className={classes.icon} />

                Retrospective 5
            </Button>
            </a>
          </GridItem>
        </GridContainer>

        <br />


        <GridContainer xs={12} sm={12} md={12}>
          <GridItem xs={12} sm={12} md={3}>
            <a href={retro6} target="_blank">
              <Button
                color="primary"
                block
              >
                < PictureAsPdfIcon className={classes.icon} />

                Retrospective 6
            </Button>
            </a>
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
            <a href={retro7} target="_blank">
              <Button
                color="primary"
                block
              >
                < PictureAsPdfIcon className={classes.icon} />

                Retrospective 7
            </Button>
            </a>
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
            <a href target="_blank">
              <Button
                color="primary"
                block
              >
                < PictureAsPdfIcon className={classes.icon} />

                Retrospective 8
            </Button>
            </a>
          </GridItem>

          <GridItem xs={12} sm={12} md={3}>
            <a href target="_blank">
              <Button
                color="primary"
                block
              >
                < PictureAsPdfIcon className={classes.icon} />

                Retrospective 9
            </Button>
            </a>
          </GridItem>
        </GridContainer>


      </div>
    </div>
  );
}
