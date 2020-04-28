import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Map from "../../../components/Map/Map.js"

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ZonesSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center" xs={12} sm={12} md={12}>
                <GridItem xs={12} sm={12} md={12}>
                    <h2 className={classes.title}>Zones</h2>
                    <Map />
                </GridItem>
            </GridContainer>
        </div>
    );
}
