/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

import Button from "../../../components/CustomButtons/Button.js"

// core components
import styles from "../../../assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";
import teamStyles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import posterImage from "../../../assets/img/BikeSharing-Poster.png"

import Modal from '@material-ui/core/Modal';



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 0
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const modalStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    height: 900,
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const useStyles = makeStyles(styles);
const useTeamStyles = makeStyles(teamStyles);

export default function DocumentsSection() {
  const classes = useStyles();
  const teamClasses = useTeamStyles();
  const modelClasses = modalStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={modelClasses.paper} style={{ left: '32%' }}>
      <img src={posterImage} height="100%" width="100%"></img>
    </div>
  );

  return (
    <div className={teamClasses.section}>

      <h2 className={teamClasses.title}>Poster</h2>

      <div className={classes.container}>

        <div>
          <Button
            color="transparent"
            target="_blank"
            onClick={handleOpen}
          >
            <img src={posterImage} width={300} />
          </Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>

      </div>
    </div>
  );
}