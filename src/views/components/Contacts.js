import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import HeaderLinks from "../../components/Header/HeaderLeftLinks.js";

// background and sections
import TeamMembers from "./Sections/TeamMembersSection.js"
import ContuctUsBackground from "./ContactUsBackground.js"
import ContactUsSection from "./Sections/ContactUsSection.js"

// styles
import styles from "./../../assets/jss/material-kit-react/views/landingPage.js";
const useStyles = makeStyles(styles);

export default function Contacts(props) {
    const classes = useStyles();

    useEffect(() => {
        const scroll = props.location.scroll ? props.location.scroll : 0
        window.scrollTo({ behavior: 'smooth', top: scroll })
    });


    const { ...rest } = props;
    return (
        <div>
            <Header
                color="transparent"
                page="Contacts"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <ContuctUsBackground />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <TeamMembers />
                    <ContactUsSection />
                </div>
            </div>
            <Footer />
        </div>
    );
}
