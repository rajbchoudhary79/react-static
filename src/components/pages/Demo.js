import {
  Card,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { styles } from "../css/CommonCSS";
import { pallete } from "../css/Theme";
import "react-calendar/dist/Calendar.css";
import { InlineWidget } from "react-calendly";

const Demo = () => {
  const { classes } = useStyles();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Container maxWidth={false} className={classes.demoComtainer}>
      <Card className={classes.demoCard}>
        <Typography align="center" variant="h4" className={classes.heading}>
          Book a Demo
        </Typography>
        <Grid container>
          <Grid className={classes.calendarGrid}>
            <InlineWidget
              url="https://calendly.com/joe-aguilar-gsd/discovery-call"
              className={classes.inlineWidget}
              pageSettings={{
                backgroundColor: "pink",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: pallete.primaryPurple,
                textColor: "4d5055",
              }}
              styles={{
                height: "1000px",
                width:"300px"
              }}
            />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Demo;

const useStyles = makeStyles()((theme) => {
  return {
    inlineWidget: {
      width: '100%', // Use 100% width for better responsiveness
      height: '50vh', // Use viewport height for dynamic resizing
      margin: '0 auto',
      boxSizing: 'border-box',
      overflow: 'auto',
      [theme.breakpoints.up('md')]: {
        height: '60vh', // Slightly larger for medium to large screens
      },
      [theme.breakpoints.up('lg')]: {
        height: '70vh', // Even larger for large screens
      },
    },
    demoComtainer: {
      width: '100%',
      minHeight: '100vh',
      paddingTop: '100px',
      backgroundColor: '#e3dde5',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        paddingTop: '50px', // Reduced padding for smaller screens
        flexDirection: 'column',
      },
    },
    demoCard: {
      // width: '90%', // Use percentage for responsiveness
      height: 'auto', // Auto height for dynamic content sizing
      padding: '20px',
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '12px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      margin:"20px 0 50px 0",
      [theme.breakpoints.down('sm')]: {
        width: '95%',
        margin:"80px 0",
        padding: '10px', // Reduced padding
      },
    },
    heading: {
      color: "#6800D7",
      textShadow: "0px 4px 4px rgba(104, 0, 215, 0.30)",
      textAlign: "center",
    },
    innerCOntainer: {
      margin: "20px 0",
    },
    inputFields: {
      margin: "15px 0",
      padding: "1px",
      width: "100%",
      "&::placeholder": {
        color: "grey", // Change 'red' to the color you want for the placeholder
        opacity: 1,
      },
      "& .MuiOutlinedInput-root": {
        borderRadius: "12px",
      },
    },
    inputFieldsFillWidth: {
      margin: "15px 0",
      width: "100%",
      "& .MuiOutlinedInput-root": {
        borderRadius: "12px",
      },
    },
    submitBtn: {
      ...styles.buttonMain,
      borderRadius: "24px",
      alignContent: "center",
      padding: "15px 50px", // Increase padding for a larger button
      marginBottom: "20px",
      [theme.breakpoints.down("sm")]: {
        order: 1, // Move the button to the top for smaller screens
        marginTop: "10px", // Add margin to separate it from the calendar
      },
    },
    calendarGrid: {
      width: "100%",
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
      overflow: "hidden",
    },
  };
});
