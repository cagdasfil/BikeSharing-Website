import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import HeaderLinks from "../../components/Header/HeaderLeftLinks.js";

// background and sections
import HowItWorksSection from "./Sections/HowItWorksSection.js"
import ZonesSection from "./Sections/ZonesSection.js"
import Background from "./Background.js"

// styles
import styles from "./../../assets/jss/material-kit-react/views/landingPage.js";
const useStyles = makeStyles(styles);

export default function Bikesharing(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        page="Bike Sharing"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Background />
      <div style={{ height: '1300px' }} className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <HowItWorksSection />
          <ZonesSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
