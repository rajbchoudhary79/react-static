import { Container, Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { pallete } from "../css/Theme";
import { styles } from "../css/CommonCSS";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Grid container className={classes.mainContainer}>
        <Grid md={6} className={classes.AboutUsTOpLeftGrid}>
          <Typography className={classes.serviceText}>About US</Typography>
          <Typography className={classes.serveceBelo}>
            <Typography
              className={classes.serveceBelo}
              style={{ color: pallete.primaryPurple }}
            >
              Your trusted partner
            </Typography>{" "}
            in virtual private assistant service
          </Typography>
          <Typography className={classes.aboutusPara}>
            Welcome to GSD, where efficiency and productivity come together to
            propel business professionals towardssuccess. Founded by Dr. Amish
            Sura and entrepreneur Dharmesh Shah, our company has a clear goal:
            <b> to simplify and streamline how you run your business.</b>
          </Typography>

          <Typography className={classes.aboutusPara} marginTop={1}>
            We offer a wide range of administrative assistance, sales,marketing,
            and related management services, all under the motto "Get Stuff
            Done." With us, time-consumingand resource-draining tasks turn into{" "}
            <b> quick and effective solutions </b>, and allowing our clients to
            focus on what theydo best: providing customer and patient
            support.Together, let's make great things happen.
          </Typography>
        </Grid>
        <Grid md={6}>
          <Box
            component="img"
            className={classes.imageTop}
            src="assets/images/homeMainNEw.jpg"
            alt="Descriptive Alt Text"
          />
        </Grid>
      </Grid>
      <Box className={classes.midContainer}>
        <Grid container>
          <Grid item md={6} className={classes.midGridRIght}>
            <Box
              component="img"
              alt=""
              src="assets/images/homeg4.jpg"
              className={classes.imageTop}
            />
          </Grid>
          <Grid item md={6} className={classes.midLeftGrid}>
            <Typography className={classes.serveceBelo}>
              <Typography
                className={classes.serveceBelo}
                style={{ color: pallete.primaryPurple }}
              >
                Our Mission
              </Typography>{" "}
            </Typography>
            <Typography className={classes.paraText}>
              Our mission at GSD is to provide business professionals with the
              tools and services necessary to simplify and optimize their
              business management. We strive to offer a wide range of
              administrative assistance, sales, marketing, and related
              management services, with a focus on efficiency and productivity.
              Our mission is to help our clients free up valuable time and
              resources by turning time-consuming tasks into quick and effective
              solutions, enabling them to focus on providing the best support to
              their customers and patients.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.midContainer}>
        <Grid container>
          <Grid item md={6} className={classes.midGridRIght}>
            <Box
              component="img"
              alt=""
              src="assets/images/homeg4.jpg"
              className={classes.imageTop}
            />
          </Grid>
          <Grid item md={6} className={classes.midLeftGrid}>
            <Typography className={classes.serveceBelo}>
              <Typography
                className={classes.serveceBelo}
                style={{ color: pallete.primaryPurple }}
              >
                Our Vision
              </Typography>{" "}
            </Typography>
            <Typography className={classes.paraText}>
              At GSD, we have the vision to be the preferred partner for
              business professionals in their pursuit of operational excellence.
              We aim to be recognized as leaders in streamlining and optimizing
              business operations, helping our clients achieve success and make
              great things happen. As we move forward, our vision is to continue
              innovating and expanding our services to meet the growing market
              needs, providing solutions that allow our clients to thrive in an
              ever-evolving business environment. Together, we will forge a path
              to business success and make great things happen.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Container
        maxWidth={false}
        sx={{ margin: "100px 0", position: "relative" }}
      >
        {/* <Box
          alt=""
          src="assets/images/homeg4.jpg"
          className={classes.appbgleft}
        /> */}
        <Grid container>
          <Grid item md={6} sx={{ margin: "auto", padding: "0 50px" }}>
            <Typography className={classes.serveceBelo}>
              <Typography
                className={classes.serveceBelo}
                style={{ color: pallete.primaryPurple }}
              >
                Get Started
              </Typography>
              With GSD Today
            </Typography>
            <Typography className={classes.paraText}>
              Start Optimizing Your Process Today
            </Typography>
            <Button
              onClick={() => navigate("/book-demo")}
              variant="contained"
              className={classes.contactUsBtn}
            >
              Contact Us
            </Button>
          </Grid>
          <Grid item md={6}>
            {/* <Box sx={{ position: "relative" }}>
              <img
                alt=""
                src="assets/images/bbabs.png"
                className={classes.bbabdimg}
              />
              <img
                alt=""
                src="assets/images/bdabs.png"
                className={classes.bdabdimg}
              />
            </Box> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUs;

const useStyles = makeStyles()((theme) => {
  return {
    midGridRIght: {
      order: 2,
    },
    midLeftGrid: {
      margin: "auto 0",
      padding: "0 70px",
      [theme.breakpoints.down("lg")]: {
        order: 1,
      },
    },
    imageTop: {
      width: "100%",
      height: "100%",
      [theme.breakpoints.down("lg")]: {
        height: "auto",
      },
    },
    AboutUsTOpLeftGrid: {
      margin: "auto",
      padding: "0 50px",
      [theme.breakpoints.down("sm")]: {
        padding: "10px",
      },
    },
    pinIconBtn: {
      ...styles.imagesBox,
    },
    appbgleft: {
      position: "absolute",
      left: 0,
      top: "-15px",
    },
    bbabdimg: {
      width: "532.388px",
      height: "580px",
    },
    bdabdimg: {
      left: "-152px",
      top: "75px",
      position: "absolute",
    },
    contactUsBtn: {
      ...styles.buttonMain,
      padding: "12px 40px",
      marginTop: "30px",
      marginBottom: "80px",
    },
    playIcon: {
      height: "70px",
      width: "70px",
    },
    servmissionBox: {
      padding: "10px 30px 0 30px",
      color: "#D4005B",
      textAlign: "center",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      fontFamily: "Roboto",
    },
    playMidBox: {
      ...styles.imagesBox,
      bottom: "10px",
      right: "-45px",
      position: "absolute",
      width: "190px",
      height: "172px",
      borderRadius: "25px",
      background: "rgba(255, 255, 255, 0.90)",
      boxShadow: "0px 0px 50px 0px rgba(1, 63, 107, 0.25)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    paraText: {
      color: "#030303",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "24px",
      fontFamily: "Roboto",
    },
    midContainer: {
      backgroundColor: "#F0E6FB",
      [theme.breakpoints.down("sm")]: {
        height: "800px",
        padding: "50px 0",
      },
    },
    aboutusPara: {
      color: "#030303",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "24px",
      padding: "10px 70px 0 0",
      fontFamily: "Roboto",
      [theme.breakpoints.down("sm")]: {
        padding: "10px 0",
      },
    },
    sortImg: {
      ...styles.imagesBox,
      position: "absolute",
      bottom: "10px",
      left: "-30px",
      [theme.breakpoints.down("sm")]: {
        bottom: "-160px",
        left: "-20px",
      },
    },
    serveceBelo: {
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      textTransform: "capitalize",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
    serviceText: {
      color: "#2E2E2E",
      fontSize: "18px",
      fontStyle: "normal",
      fontFamily: "Roboto",
      fontWeight: 700,
      lineHeight: "24px",
    },
    mainContainer: {
      marginTop: "110px",
      height: "80vh",
      [theme.breakpoints.down("sm")]: {
        height: "800px",
        padding: "50px 0",
      },
    },
  };
});
