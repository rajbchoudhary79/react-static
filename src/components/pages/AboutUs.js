import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  CardContent,
  Card,
} from "@mui/material";
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

  const benefits = [
    {
      title: "Cost Savings",
      description: "Your company can save 30% to 50% on employee costs",
    },
    {
      title: "Boosted Productivity",
      description:
        "Virtual assistants streamline tasks, allowing you to focus on core responsibilities",
    },
    {
      title: "Educated Team",
      description:
        "Choose from our pool of bilingual, college-educated applicants for a skilled workforce.",
    },
    {
      title: "Bilingual Service",
      description:
        "Our bilingual team provides professional and quality remote team solutions in English and Spanish.",
    },
    {
      title: "Culture",
      description:
        "Build and lead a team that shares your professional values and work culture",
    },
    {
      title: "Time-Saving",
      description:
        "Complete tasks faster with the assistance of virtual tools, allowing you to meet deadlines and achieve goals efficiently.",
    },
  ];

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
        <Grid md={6} className={classes.AboutUsRightGrid}>
          <Box
            component="img"
            className={classes.imageTop}
            src="assets/images/homeg1.jpg"
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
            <Typography
              className={classes.serveceBelo}
              style={{ marginBottom: 10 }}
            >
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
      <Box className={classes.visionContainer}>
        <Grid container>
          <Grid item md={6} className={classes.visionRight}>
            <Box
              component="img"
              alt=""
              src="assets/images/homeg4.jpg"
              className={classes.imageTop}
            />
          </Grid>
          <Grid item md={6} className={classes.visionLeft}>
            <Typography
              className={classes.serveceBelo}
              style={{ marginBottom: 10 }}
            >
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

      <Container maxWidth={false} className={classes.benefitContainer}>
        <Box>
          <Typography align="center" className={classes.benefitBoxHeading}>
            The <span style={{color: pallete.primaryPurple}}>benefits of working</span> with us
          </Typography>
        </Box>
        <Grid
          container
          gridColumn={3}
          spacing={2}
          className={classes.benefitBoxes}
        >
          {benefits.map((item, index) => (
            <Grid item xs={6} md={4} key={index} className="benefit-grid">
              <Card className={classes.benefitItem}>
                <CardContent>
                  <Typography align="center" className={classes.benefitTitle}>
                    {item.title}
                  </Typography>
                  <Typography className={classes.benefitDescription}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth={false} className={classes.getStartedContainer}>
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

      <Container maxWidth={false} className={classes.waveContainer}>
        <Box className={classes.waveTop}>
          <Typography className={classes.waveText}>
            Unlock Seamless Productivity: Harness the power of Getting Stuff
            Done (GSD) to streamline tasks and reclaim your valuable time
            effortlessly!
          </Typography>

          <Button
            onClick={() => navigate("/book-demo")}
            className={classes.mainBtn}
            variant="contained"
          >
            Get Started
          </Button>
        </Box>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ position: "absolute", bottom: 0 }}
        >
          <path
            fill="#5e00c2"
            fill-opacity="0.8"
            d="M0,0L34.3,16C68.6,32,137,64,206,112C274.3,160,343,224,411,250.7C480,277,549,267,617,224C685.7,181,754,107,823,74.7C891.4,43,960,53,1029,96C1097.1,139,1166,213,1234,250.7C1302.9,288,1371,288,1406,288L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          />
        </svg>
      </Container>
    </div>
  );
};

export default AboutUs;

const useStyles = makeStyles()((theme) => {
  return {
    mainContainer: {
      marginTop: "110px",
      height: "660px",
      overflow: "hidden",
      [theme.breakpoints.down("md")]: {
        height: "auto",
      },
    },
    AboutUsTOpLeftGrid: {
      margin: "auto",
      padding: "20px 50px",
      [theme.breakpoints.down("md")]: {
        margin: "40px 0",
        padding: "10px 20px",
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
    AboutUsRightGrid: {
      position: "relative",
      [theme.breakpoints.up("md")]: {
        "&:before": {
          content: '""',
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 255), rgba(255, 255, 255, 0))",
          position: "absolute",
          height: "100%",
          width: "200px",
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: 1,
        },
      },
    },
    midContainer: {
      backgroundColor: "#F0E6FB",
    },
    midGridRIght: {
      position: "relative",
      [theme.breakpoints.down("md")]: {
        order: 2,
        paddingTop: "30px",
      },
      [theme.breakpoints.up("md")]: {
        "&:before": {
          content: '""',
          backgroundImage:
            "linear-gradient(to left, rgb(240 230 251), rgb(240 230 251 / 0%))",
          position: "absolute",
          height: "100%",
          width: "200px",
          top: 0,
          bottom: 0,
          right: 0,
          zIndex: 1,
        },
      },
    },
    midLeftGrid: {
      padding: "20px 50px",
      margin: "160px 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      [theme.breakpoints.down("md")]: {
        margin: "40px 0",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "0 25px",
        paddingTop: "30px",
      },
    },
    visionContainer: {},
    visionRight: {
      order: 2,
      position: "relative",
      [theme.breakpoints.up("md")]: {
        "&:before": {
          content: '""',
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 255), rgba(255, 255, 255, 0))",
          position: "absolute",
          height: "100%",
          width: "200px",
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: 1,
        },
      },
      [theme.breakpoints.down("md")]: {
        paddingTop: "30px",
      },
    },
    visionLeft: {
      padding: "20px 50px",
      margin: "160px 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      [theme.breakpoints.down("lg")]: {
        order: 1,
      },
      [theme.breakpoints.down("md")]: {
        margin: "40px 0",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "0 25px",
        paddingTop: "30px",
      },
    },
    imageTop: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
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
    getStartedContainer: {
      padding: "60px 0",
      [theme.breakpoints.down("md")]: {
        padding: "30px 0",
        width: "90%",
      },
    },
    benefitContainer: {
      backgroundColor: "#F0E6FB",
      padding: "60px 0",
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
    waveContainer: {
      background: `${pallete.primaryPurple}`,
      marginBottom: 2,
      padding: "0px !important",
      position: "relative",
      minHeight: "400px",
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        minHeight: "280px",
      },
    },
    waveTop: {
      width: "85%",
      maxWidth: "1366",
      margin: 5,
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
    waveText: {
      fontSize: "40px",
      fontWeight: 500,
      color: pallete.primaryWhite,
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "25px",
      },
    },
    mainBtn: {
      backgroundColor: pallete.primaryWhite,
      color: pallete.primaryPurple,
      textTransform: "none",
      padding: "12px 40px",
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Roboto",
      "&:hover": {
        backgroundColor: pallete.primaryWhite,
      },
    },

    benefitBoxHeading: {
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      textTransform: "capitalize",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
        padding: "0 10px",
      },
    },
    benefitBoxes: {
      marginTop: 20,
      [theme.breakpoints.down("sm")]: {
        padding: "0 20px",
      },
    },
    benefitItem: {
      height: "100%",
      padding: 10,
      borderRadius: 10,
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      transition: "all 300ms",
      [theme.breakpoints.down("sm")]: {
        padding: "0 20px",
      },
    },
    benefitTitle: {
      fontSize: "20px",
      fontWeight: 600,
      color: `${pallete.primaryPurple}`,
      marginBottom: 10,
    },
    benefitDescription: {
      fontSize: "16px",
      fontWeight: 400,
      color: `${pallete.primaryBlack}`,
      textAlign: "center",
    },
  };
});
