
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(styles);

export default function ContactUsSection() {

    const classes = useStyles();

    const [values, setValues] = React.useState({
        name: "",
        email: "",
        message: ""
    });


    const [open, setOpen] = React.useState(false);
    const [alert, setAlert] = React.useState({
        severity: "info",
        message: "Please complite form"
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }

    const handleClick = (event) => {

        event.preventDefault();
        const templateId = 'template_wkqRpqsr';
        const user = "user_EZ3p4KZNKwntncKGmWwWf";

        if (!values.name) setAlert({ severity: 'error', message: 'Please type your name' })
        else if (!values.email) setAlert({ severity: 'error', message: 'Please type your email' })
        else if (!values.message) setAlert({ severity: 'error', message: 'Please type your message' })
        else {

            const templateParams = { message_html: values.message, from_email: values.email, from_name: values.name, to_name: "aykut" }

            window.emailjs.send(
                'default_service',
                templateId,
                templateParams,
                user
            ).catch(err => setAlert({ severity: 'error', message: 'Something went wrong!' }))

            setAlert({ severity: 'success', message: 'Message send' })
            setValues({ name: "", email: "", message: "" });
        }
        setOpen(true);

    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const { name, email, message } = values;

    return (
        <div className={classes.section}>
            <GridContainer justify="center">

                <GridItem cs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Contact us</h2>
                    <h4 className={classes.description}>
                        Please type your message with your name and your email address information.
          </h4>
                    <form>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    value={name}
                                    labelText="Your Name"
                                    id="name"
                                    formControlProps={{
                                        fullWidth: true,
                                        onChange: handleChange("name")

                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="Your Email"
                                    id="email"
                                    value={email}
                                    formControlProps={{
                                        fullWidth: true,
                                        onChange: handleChange("email"),

                                    }}
                                />
                            </GridItem>
                            <CustomInput
                                labelText="Your Message"
                                id="message"
                                value={message}
                                formControlProps={{
                                    fullWidth: true,
                                    className: classes.textArea,
                                    onChange: handleChange("message")
                                }}
                                inputProps={{
                                    multiline: true,
                                    rows: 5
                                }}
                            />
                            <GridContainer justify="center" xs={12} sm={12} md={8}>
                                <GridItem xs={12} sm={12} md={6}>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6} className={classes.textCenter}>
                                    <Button onClick={handleClick} color="primary">Send Message</Button>
                                </GridItem>
                            </GridContainer>
                        </GridContainer>
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity={alert.severity}>
                                {alert.message}
                            </Alert>
                        </Snackbar>
                    </form>
                </GridItem>
            </GridContainer>
        </div>
    );
}


