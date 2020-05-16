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
        <br />
        <h4 className={teamClasses.smallTitle}>
        BikeSharing is developed using many state-of-the-art frameworks, libraries, and technologies. 
        Our server is developed with <strong>Node.js</strong> which is an open-source, cross-platform, JavaScript 
        runtime environment that executes JavaScript code outside of a web browser. We are using 
        <strong>strapi</strong>, an open-source, Node.js based, headless CMS to manage the server implementation. 
        The server application is deployed to a virtual machine in <strong>Google Cloud Platform</strong>. For data 
        storing, we are using  <strong>MongoDB</strong>, a cross-platform document-oriented database program. The 
        mobile application is developed by using <strong>React Native</strong> which combines the best parts of 
        native development with React library. Thanks to the cross-platform structure of the React 
        Native, we are launching our mobile application on both <strong>Android</strong> and <strong>iOS</strong> platforms. Dashboard 
        of the system is developed by using <strong>React</strong>, a best-in-class JavaScript library for building 
        user interfaces. User interface of the dashboard has been mostly developed with popular 
        React UI framework, <strong>Material-UI</strong>. 
        </h4>
        <br/>
        <img src={technologies} width="75%"></img>
        <br/>
        <br/>
        <h4 className={teamClasses.smallTitle}>
        The most innovative part of the BikeSharing is that it uses virtual zones created using 
        geofencing technology. A geofence is a virtual perimeter for a real-world geographic area. 
        The use of a geofence is called geofencing, and one example of usage involves a location-aware 
        device of a location-based service (LBS) user entering or exiting a geo-fence. BikeSharing 
        uses geofencing to get rid of the usual bike stations that requires lots of physical 
        components and installation cost. Virtually created zones ease the process of setting 
        BikeSharing system to a new area. Zones can be easily created and updated by using BikeSharing 
        dashboard and they do not damage the established area. Also, virtual zones eliminate the 
        capacity limitation in classical bike stations.
        </h4>
    </div>
  );
}
