import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/material-kit-react/components/infoStyle.js";

import ScanQr from "../../assets/img/scan_qr.png"
import DownloadApp from "../../assets/img/download_app.png";
import EndSession from "../../assets/img/end_session.png";

const useStyles = makeStyles(styles);

export default function InfoArea(props) {
  const classes = useStyles();
  const { title, description, imageName} = props;
  let image = null
  if(imageName === "ScanQr") image =  ScanQr
  if(imageName === "DownloadApp") image =  DownloadApp
  if(imageName === "EndSession") image =  EndSession
  return (
    <div className={classes.infoArea}>
      <div>
      <img src = {image}/>
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
}


InfoArea.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  vertical: PropTypes.bool,
  imageName : PropTypes.string
};
