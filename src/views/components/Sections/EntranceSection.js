import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import card1 from "../../../assets/img/card1.png"
import card2 from "../../../assets/img/card2.png"
import card3 from "../../../assets/img/card3.png"
import card4 from "../../../assets/img/card4.png"



const useStyles = makeStyles(styles);

export default function EntranceSection() {
  const classes = useStyles();
  return (
        <div>
             <div className={classes.section}>
                <h2 className={classes.title}>What is BikeSharing ?</h2>
                <div className={classes.title} style={{textAlign:"center", paddingLeft:60, paddingRight:60}}>
                    <h3>BikeSharing is a platform that aims to provide the best service to users and system owners 
                        by bringing new generation technologies together with bike sharing platforms. BikeSharing 
                        works with vendors like campus presidencies or municipal administrations. Vendors provide
                        smart lock integrated bikes, BikeSharing offers an easy-to-use mobile app for users and a
                        powerful dashboard for vendors in return.
                    </h3>
                </div>
            </div>

            <div className={classes.title} style={{textAlign:"center", fontStyle:"italic"}}>
                <h2>" a new perspective on bike sharing platforms "</h2>
            </div>
            <div style={{paddingRight:100, marginTop:50}}>
                <Card>
                    <div style={{display:"flex"}}>
                        <img src={card1} width={500}/>
                        <div style={{width:"100%", textAlign:"center", margin:"auto", padding:20}}>
                            <h3>BikeSharing uses virtual zones instead of physical bike stations. 
                                Virtual zones bring easy installation and management features with no cost</h3>
                        </div>
                    </div>
                </Card>
            </div>
            <div style={{paddingLeft:100, marginTop:100}}>
                <Card>
                    <div style={{display:"flex", direction:"rtl"}}>
                        <img src={card2} width={500}/>
                        <div style={{width:"100%", textAlign:"center", margin:"auto", padding:20}}>
                            <h3>BikeSharing mobile application offers seamless, intuitive and smooth experience to the users on both iOS and Android platforms</h3>
                        </div>
                    </div>
                </Card>
            </div>
            <div style={{paddingRight:100, marginTop:100}}>
                <Card>
                    <div style={{display:"flex"}}>
                        <img src={card3} width={500}/>
                        <div style={{width:"100%", textAlign:"center", margin:"auto", padding:20}}>
                            <h3>BikeSharing collects the data generated during use. Detailed analysis and reports are presented on BikeSharing dashboard by using the collected data</h3>
                        </div>
                    </div>
                </Card>
            </div>
            <div style={{paddingLeft:100, marginTop:100}}>
                <Card>
                    <div style={{display:"flex", direction:"rtl"}}>
                        <img src={card4} width={500}/>
                        <div style={{width:"100%", textAlign:"center", margin:"auto", padding:20}}>
                            <h3>BikeSharing platform is created to be integrated with smart locks using different technologies</h3>
                        </div>
                    </div>
                </Card>
            </div>
        </div>    
  );
}
