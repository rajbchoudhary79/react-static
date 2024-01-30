import { Grid, Box } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { styles } from "./CommonCSS";
import { TypeAnimation } from "react-type-animation";

const ServicesGrid = ({ text1, text2, image }) => {
  const { classes } = useStyles();

  return (
    <Grid container className={classes.mainGrid}>
      <Grid item md={6} className={classes.textGrid}>
        <TypeAnimation
          sequence={[text1, 1000, `${text1} ${text2}`, 1000]}
          speed={50}
          repeat={2}
          className={classes.heading}
        />
      </Grid>
      <Grid item md={6}>
        <Box
          component="img"
          className={classes.imageTop}
          src={image}
          alt="Descriptive Alt Text"
        />
      </Grid>
    </Grid>
  );
};

export default ServicesGrid;

const useStyles = makeStyles()((theme) => {
  return {
    textGrid: {
      ...styles.flexDRC,
      width: "100%",
      height: "100%",
      [theme.breakpoints.down("lg")]: {
        height: "auto",
      },
    },
    mainGrid: {
      height: "75vh",
    },
    imageTop: {
      width: "100%",
      height: "100%",
      [theme.breakpoints.down("lg")]: {
        height: "auto",
      },
    },
    heading: {
      background: "linear-gradient(93deg, #6800D7 0.68%, #DC0155 65.41%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "65px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      margin: "auto 20px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
        // padding:'20px'
      },
    },
  };
});
