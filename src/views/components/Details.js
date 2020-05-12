import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import HeaderLinks from "../../components/Header/HeaderLeftLinks.js";

// background and sections
import DocumentsSection from "./Sections/DocumentsSection.js"
import Background from "./Background.js"

// styles
import styles from "./../../assets/jss/material-kit-react/views/landingPage.js";
import ValueSection from "./Sections/ValueSection.js";
const useStyles = makeStyles(styles);

export default function Details(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                color="transparent"
                page="Details"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Background />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <ValueSection />
                    <DocumentsSection />
                </div>
            </div>
            <Footer />
        </div>
    );
}
