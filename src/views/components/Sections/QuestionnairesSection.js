import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import FAQ from "./FAQ";


const useStyles = makeStyles(styles);

export default function QuestionnairesSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Questionnaires</h2>
          <h5 className={classes.description}>

          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem  xs={12} sm={12} md={12}>
            <div>
              <FAQ>
                  <FAQ.QAItem>
                    <FAQ.Question answerId="q1">
                        {(isOpen, onToggle) => {
                        return (
                            <>
                            {isOpen ? "- " : "+ "}
                            <span>1) What is BikeSharing ?</span>
                            </>
                        );
                        }}
                    </FAQ.Question>
                    <h2> </h2>
                    <FAQ.Answer id="q1">BikeSharing is a bicycle sharing platform that provides its users easy-rentable process.</FAQ.Answer>
                    <h2></h2>
                  </FAQ.QAItem>
                  <FAQ.QAItem>
                    <FAQ.Question answerId="q2">
                        {(isOpen, onToggle) => {
                        return (
                            <>
                            {isOpen ? "- " : "+ "}
                            <span>2) What is the purpose of BikeSharing ?</span>
                            </>
                        );
                        }}
                    </FAQ.Question>
                    <h2> </h2>
                    <FAQ.Answer id="q2"> While providing eco-friendly transportation to facilitate reaching the no-traffic areas and short distance, to help personal health. </FAQ.Answer>
                    <h2></h2>
                  </FAQ.QAItem>
                  <FAQ.QAItem>
                    <FAQ.Question answerId="q3">
                        {(isOpen, onToggle) => {
                        return (
                            <>
                            {isOpen ? "- " : "+ "}
                            <span>3) In what way is the "BikeSharing" eco-friendly ?</span>
                            </>
                        );
                        }}
                    </FAQ.Question>
                    <h2> </h2>
                    <FAQ.Answer id="q3"> With BikeSharing, carbon footprint is reduced by increasing usage of bicycles in transportation. </FAQ.Answer>
                    <h2></h2>
                  </FAQ.QAItem>
                  <FAQ.QAItem>
                    <FAQ.Question answerId="q3">
                        {(isOpen, onToggle) => {
                        return (
                            <>
                            {isOpen ? "- " : "+ "}
                            <span>4) In what way does the "BikeSharing" help personal health ?</span>
                            </>
                        );
                        }}
                    </FAQ.Question>
                    <h2> </h2>
                    <FAQ.Answer id="q3"> Usage of bicycle has positive effects on human health in many respects such as weight loss, heart and lung health, and mental health.</FAQ.Answer>
                    <h2></h2>
                  </FAQ.QAItem>
                  <FAQ.QAItem>
                    <FAQ.Question answerId="q3">
                        {(isOpen, onToggle) => {
                        return (
                            <>
                            {isOpen ? "- " : "+ "}
                            <span>5) How can I start the session ?</span>
                            </>
                        );
                        }}
                    </FAQ.Question>
                    <h2> </h2>
                    <FAQ.Answer id="q3"> Add min 10TL to your balance and scan the QR code on the bike you want to rent via mobile app, then the session starts automatically. </FAQ.Answer>
                    <h2></h2>
                  </FAQ.QAItem>
                  <FAQ.QAItem>
                    <FAQ.Question answerId="q3">
                        {(isOpen, onToggle) => {
                        return (
                            <>
                            {isOpen ? "- " : "+ "}
                            <span>6) What if there is something wrong on my bike ?</span>
                            </>
                        );
                        }}
                    </FAQ.Question>
                    <h2> </h2>
                    <FAQ.Answer id="q3"> You can change the bike in first 5 min without any payment. </FAQ.Answer>
                    <h2></h2>
                  </FAQ.QAItem>
                  <FAQ.QAItem>
                    <FAQ.Question answerId="q3">
                        {(isOpen, onToggle) => {
                        return (
                            <>
                            {isOpen ? "- " : "+ "}
                            <span>7) Where can I drop the bike after usage ?</span>
                            </>
                        );
                        }}
                    </FAQ.Question>
                    <h2> </h2>
                    <FAQ.Answer id="q3"> It is enough to be in the boundaries of virtual zone you have chosen to drop the bike. </FAQ.Answer>
                    <h2></h2>
                  </FAQ.QAItem>
                  <FAQ.QAItem>
                    <FAQ.Question answerId="q3">
                        {(isOpen, onToggle) => {
                        return (
                            <>
                            {isOpen ? "- " : "+ "}
                            <span>8) What happend if I have to pay more than I have in my balance ?</span>
                            </>
                        );
                        }}
                    </FAQ.Question>
                    <h2> </h2>
                    <FAQ.Answer id="q3"> You are debited to BikeSharing and the debt is charged the next time you use it. </FAQ.Answer>
                    <h2></h2>
                  </FAQ.QAItem>
                  <FAQ.QAItem>
                    <FAQ.Question answerId="q3">
                        {(isOpen, onToggle) => {
                        return (
                            <>
                            {isOpen ? "- " : "+ "}
                            <span>9) Can I withdraw money from my balance ?</span>
                            </>
                        );
                        }}
                    </FAQ.Question>
                    <h2> </h2>
                    <FAQ.Answer id="q3"> Yes, you can withdraw your money in the balance, via BikeSharing mobile app whenever you want. </FAQ.Answer>
                    <h2></h2>
                  </FAQ.QAItem>
                  <FAQ.QAItem>
                    <FAQ.Question answerId="q3">
                        {(isOpen, onToggle) => {
                        return (
                            <>
                            {isOpen ? "- " : "+ "}
                            <span>10) Can a user rent more than one bike at the same time ?</span>
                            </>
                        );
                        }}
                    </FAQ.Question>
                    <h2></h2>
                    <FAQ.Answer id="q3"> No, every user can rent only one bike.  </FAQ.Answer>
                  </FAQ.QAItem>
              </FAQ>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}