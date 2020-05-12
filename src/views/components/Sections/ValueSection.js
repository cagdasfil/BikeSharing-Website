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

export default function ValueSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Value</h2>
          <h5 className={classes.description}>

          </h5>
        </GridItem>
      </GridContainer>
      <div>
            <div style={{color:"black", marginBottom:40}}>
              Apart from offering users a simple and practical way of transportation, 
              BikeSharing also includes many advantageous features for system owners. Huge amount 
              of data is created while BikeSharing operates on an area. Detailed system usage data, 
              user transactions and traffic density on the area are being collected and analyzed by 
              BikeSharing dashboard. The dashboard analyses and reports provide business insights 
              to use on many different industries.
            </div>
            <div style={{color:"black"}}>
              Transportation is one of the essential parts of the urban life. With the 
              integration of micromobility options, urban transportation stepped into new age. More 
              importantly, micromobility comes with data that gives significant information about 
              daily activity on  the subjected area. BikeSharing makes use of the formed data to create 
              dashboard. Origin-destination data, user activity according to timeline, payment transactions 
              and all other collected data are considered and correlated to present precise and meaningful 
              business insights in dashboard. While offering a powerful data analysis, BikeSharing 
              dashboard comes with a cutting-edge UI design and easy-to-use tools.
              </div>
      </div>
    </div>
  );
}
