import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardFooter from "../../../components/Card/CardFooter.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "../../../assets/img/faces/cevat.jpg";
import team2 from "../../../assets/img/faces/haldun.jpg";
import team3 from "../../../assets/img/faces/aykut.jpg";
import team4 from "../../../assets/img/faces/dogan.jpg";
import team5 from "../../../assets/img/faces/cagdas.jpg";
import team6 from "../../../assets/img/faces/kadir.jpg";

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Cevat Şener
                <br />
                <small className={classes.smallTitle}>Supervisor</small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href =  "https://www.linkedin.com/in/cevat-sener-2796a85/"
                >
                  <LinkedInIcon   className={classes.socials + " fab "}/>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href = "http://user.ceng.metu.edu.tr/~sener/"
                >
                  <LanguageIcon   className={classes.socials + " fab "}/>
                </Button>
            
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Haldun Yıldız
                <br />
                <small className={classes.smallTitle}>Advisor </small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href = "https://www.linkedin.com/in/haldun-yildiz-29215732/"
                >
                  <LinkedInIcon   className={classes.socials + " fab "}/>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href = "https://www.facebook.com/haldunyildizz"
                >
                  <FacebookIcon   className={classes.socials + " fab "}/>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href = "https://www.instagram.com/haldunyildizz/"
                >
                  <InstagramIcon   className={classes.socials + " fab "}/>
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team5} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Çağdaş Fil
                <br />
                <small className={classes.smallTitle}>Developer</small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href = "https://www.linkedin.com/in/cagdasfil/"
                >
                  <LinkedInIcon   className={classes.socials + " fab "}/>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href = "https://www.facebook.com/cagdas.fil.5"
                >
                  <FacebookIcon   className={classes.socials + " fab "}/>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href = "https://www.instagram.com/cagdasfil/"
                >
                  <InstagramIcon   className={classes.socials + " fab "}/>
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team4} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Doğan Sezgin
                <br />
                <small className={classes.smallTitle}>Developer</small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href = "https://www.linkedin.com/in/sezgindogan/"
                >
                  <LinkedInIcon   className={classes.socials + " fab "}/>
                </Button>
                <Button
                  justIcon
                  href = "https://www.facebook.com/dogan.sezgin.37"
                  color="transparent"
                  className={classes.margin5}
                >
                  <FacebookIcon   className={classes.socials + " fab "}/>
                </Button>
                <Button
                  justIcon
                  href = "https://www.instagram.com/dogansezginn/"
                  color="transparent"
                  className={classes.margin5}
                >
                  <InstagramIcon   className={classes.socials + " fab "}/>
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Aykut Yardım
                <br />
                <small className={classes.smallTitle}>Developer</small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href = "https://www.linkedin.com/in/aykutyardim/"
                >
                  <LinkedInIcon   className={classes.socials + " fab "}/>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href = "https://www.facebook.com/aykutyrdm"
                >
                  <FacebookIcon   className={classes.socials + " fab "}/>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href = "https://www.instagram.com/aykutyrdm/"
                >
                  <InstagramIcon   className={classes.socials + " fab "}/>
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team6} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Abdulkadir Kılavuz
                <br />
                <small className={classes.smallTitle}>Developer</small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href = "https://www.linkedin.com/in/abdulkadir-kilavuz/"
                >
                  <LinkedInIcon   className={classes.socials + " fab "}/>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href = "https://www.facebook.com/TupolevTu160"
                >
                  <FacebookIcon   className={classes.socials + " fab "}/>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href = "https://www.instagram.com/akadirkilavuz/"
                  
                >
                  <InstagramIcon   className={classes.socials + " fab "}/>
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
