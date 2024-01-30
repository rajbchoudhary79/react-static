import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  Button,
  Divider,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { pallete } from "../css/Theme";
import { styles } from "../css/CommonCSS";
import { useNavigate } from "react-router-dom";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import WebhookOutlinedIcon from "@mui/icons-material/WebhookOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import MiscellaneousServicesOutlinedIcon from "@mui/icons-material/MiscellaneousServicesOutlined";
import ServicesGrid from "../css/ServicesGrid";

const SocialMediaManagement = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const servicesData = [
    {
      icon: <FindInPageOutlinedIcon className={classes.icons2} />,
      heading: "Market Research",
    },
    {
      icon: <WebhookOutlinedIcon className={classes.icons2} />,
      heading: "Strategy Development",
    },
    {
      icon: <PeopleOutlinedIcon className={classes.icons2} />,
      heading: "Engagement",
    },
    {
      icon: <InsightsOutlinedIcon className={classes.icons2} />,
      heading: "Strategy Analysis",
    },
    {
      icon: <AdsClickOutlinedIcon className={classes.icons2} />,
      heading: "Content Management",
    },
    {
      icon: <MiscellaneousServicesOutlinedIcon className={classes.icons2} />,
      heading: "Concierge Service and Content Auditing",
    },
  ];

  return (
    <>
      <Box className={classes.mainContainer}>
        <ServicesGrid
          text1="Social Media"
          text2="Management"
          image="assets/images/manageNew.jpg"
        />
      </Box>
      <Container maxWidth={false} className={classes.conatiner2}>
        <Typography variant="h4" color="primary" align="center">
          About
        </Typography>
        <Grid container className={classes.containerNeew1}>
          <Card className={classes.cardFirst}>
            <Typography variant="h6" className={classes.paraPadidng}>
              Introducing our Social Media Manager – your key to unlocking
              social media success! Elevate your online presence. Our virtual
              assistant excels in boosting engagement, ensuring your social
              media strategy is both dynamic and impactful. Experience strategy
              analysis that fine-tunes your approach for optimal results. From
              seamless content management to a concierge service that includes
              content auditing, our virtual assistant is your all-in-one
              solution for navigating the dynamic landscape of social media.
              Elevate your brand, captivate your audience, and dominate the
              social media sphere with our expert services
            </Typography>
          </Card>
        </Grid>

        <Typography variant="h4" color="primary" align="center">
          Services
        </Typography>

        <Grid container sx={{ ...styles.flexDRC, paddingTop: "20px" }}>
          <Grid container md={8} sx={{ ...styles.flexDRC }}>
            {servicesData.map((x) => (
              <Grid key={x.icon} item md={4} className={classes.serv2grid}>
                <Card className={classes.cardSecond}>{x.icon}</Card>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.serv2gridH}
                >
                  {x.heading}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false} className={classes.conatiner3}>
        <Typography variant="h4" align="center">
          <Typography variant="h4" color="primary">
            Why Our Services Are
          </Typography>
          Different
        </Typography>
        <Grid container sx={{ ...styles.flexDRC, paddingTop: "20px" }}>
          <Grid container md={9}>
            <Grid item md={4}>
              <Card className={classes.serv2gridCard}>
                <Box
                  component="img"
                  className={classes.products}
                  src="\assets\icons\services\p1.svg"
                  alt="Descriptive Alt Text"
                />
                <Typography variant="h5" align="center">
                  Unwavering Commitment to Excellence
                </Typography>
                <Typography variant="h6" align="center">
                  We emphasize an unwavering commitment to delivering
                  excellence, ensuring that the quality of service surpasses
                  conventional solutions in the outsourcing industry.{" "}
                </Typography>
              </Card>
            </Grid>
            <Grid item md={4} className={classes.whyGridMid}>
              <Box
                component="img"
                className={classes.productsBGImg}
                src="\assets\icons\services\fill.png"
                alt="Descriptive Alt Text"
              />
              <Card
                sx={{ position: "absolute" }}
                className={classes.serv2gridCard}
              >
                <Box
                  component="img"
                  className={classes.products}
                  src="\assets\icons\services\p2.svg"
                  alt="Descriptive Alt Text"
                />
                <Typography variant="h5" align="center">
                  Flexible, Scalable, and Customized Solutions
                </Typography>
                <Typography variant="h6" align="center">
                  We offer solutions that are not only flexible but also
                  scalable and customized to meet the unique demands of each
                  client, ensuring a tailored approach for maximum
                  effectiveness.{" "}
                </Typography>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className={classes.serv2gridCard}>
                <Box
                  component="img"
                  className={classes.products}
                  src="\assets\icons\services\p3.svg"
                  alt="Descriptive Alt Text"
                />
                <Typography variant="h5" align="center">
                  Exceeding Expectations Through Dedication{" "}
                </Typography>
                <Typography variant="h6" align="center">
                  GSD's commitment goes beyond conventional service providers;
                  the emphasis on exceeding expectations showcases a dedication
                  to delivering exceptional results and client satisfaction.{" "}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false} className={classes.expertContainer}>
        <Grid container className={classes.blogsGrid}>
          <Grid
            container
            md={8}
            sx={{
              backgroundColor: pallete.primaryPurple,
              borderRadius: "12px",
            }}
            className={classes.takeYourBusiness}
          >
            <Grid item md={9}>
              <Box className={classes.expertLeftBox}>
                <Typography className={classes.expetText}>
                  Book a Demo
                </Typography>
                <Divider variant="inset" className={classes.dividerMain} />
                <Typography className={classes.expectPara}>
                  Explore the remarkable journey of businesses that have
                  harnessed the power of Virtual Private Assistants (VPAs) to
                  revolutionize their operations and achieve unprecedented
                  success.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={3} className={classes.experBtnGrodBottom}>
              <Button
                onClick={() => navigate("/book-demo")}
                variant="contained"
                className={classes.expertBtns}
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SocialMediaManagement;

const useStyles = makeStyles()((theme) => {
  return {
    whyGridMid: {
      position: "relative",
      [theme.breakpoints.down("lg")]: {
        position: "fixed",
      },
    },
    aboutImsg: {
      // ...styles.imagesBox,
      width: "85%",
      height: "80%",
      boxShadow: "22px 28px 75px 0 rgba(55,46,206,.18)",
      borderRadius: "8px",
    },
    serv2gridH: {
      padding: "5px 20px",
      fontWeight: 400,
      letterSpacing: "0.5px",
    },
    cardSecond: {
      ...styles.flexDRC,
      borderRadius: "8px",
      padding: "10px",
      margin: "10px 0",
      boxShadow:
        "0 8px 13px -3px rgba(50,50,93,0.15), 0 4px 8px -4px rgba(0,0,0,0.15)",
    },
    paraPadidng: {
      padding: "10px 0",
    },
    containerNeew1: {
      padding: "40px",
    },
    cardFirst: {
      borderRadius: "8px",
      padding: "40px",
      boxShadow:
        "0 13px 27px -5px rgba(50,50,93,0.25),0 8px 16px -8px rgba(0,0,0,0.3)",
    },
    blogsGrid: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
    },
    expetText: {
      color: "#FFFFFF",
      fontSize: "26px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      fontFamily: "Montserrat",
    },
    expectPara: {
      color: "#FFFFFF",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      fontFamily: "Roboto",
    },
    expertBtns: {
      ...styles.buttonMain,
      backgroundColor: "#fff",
      color: "#737373",
      "&:hover": {
        backgroundColor: "#fff",
        color: "#737373",
      },
    },
    experBtnGrodBottom: {
      margin: "auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    dividerMain: {
      width: "48px",
      height: "4px",
      backgroundColor: "#fff", // Replace with your desired color
      margin: theme.spacing(1, 0),
      borderRadius: "2px",
    },
    takeYourBusiness: {
      [theme.breakpoints.down("sm")]: {
        padding: "50px 0",
      },
    },
    expertLeftBox: {
      padding: "40px 40px",
    },
    expertGrid: {
      padding: "200px 50px",
      height: "300px",
    },
    expertContainer: {
      margin: "100px 0",
    },
    serviceImg0: {
      ...styles.imagesBox,
      position: "absolute",
      height: "417px",
      // width: "347px",
    },
    serviceImg1: {
      ...styles.imagesBox,
      position: "absolute",
      height: "417px",
      // width: "347px",
    },
    chooseIspara: {
      padding: "20px 200px",
    },
    conatiner6: {
      padding: "50px 0",
    },
    conatiner7: {
      margin: "50px 0",
      backgroundImage: "url(assets/icons/services/lappyMan.png)",
      backgroundRepeat: "no-repeat",
      height: "600px",
      ...styles.flexDCC,
      position: "relative",
    },
    transparentText: {
      fontFamily: "Montserrat",
      fontSize: "80px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      textTransform: "uppercase",
      color: "#FFF",
      opacity: "0.2",
    },
    conatiner4: {
      padding: "50px 0",
    },
    conatiner5: {
      padding: "50px 0",
      backgroundColor: pallete.primaryPurple,
    },
    products: {
      ...styles.imagesBox,
      width: "100px",
      height: "100px",
    },
    staff: {
      ...styles.imagesBox,
      // width: "100px",
      // height: "100px",
    },
    productsBGImg: {
      ...styles.imagesBox,
      position: "absolute",
      width: "82%",
      top: "6px",
      left: "70px",
      // height: "100px",
    },
    conatiner3: {
      backgroundColor: "#F0E6FB",
      padding: "50px 0",
    },
    conatiner3L: {
      padding: "50px 0",
    },
    serv2grid: {
      padding: "10px 20px",
      ...styles.flexDCC,
      alignItems: "center",
    },
    serv2gridCard: {
      padding: "40px 30px",
      margin: "20px 40px",
      ...styles.flexDCC,
      alignItems: "center",
      borderRadius: "12px",
      width: "80%",
      height: "400px",
    },
    icons2: {
      fontSize: "70px",
      color: "#EF2A82",
    },
    conatiner2: {
      padding: "50px 0px",
    },
    cube: {
      position: "absolute",
      right: "60px",
    },
    plantSmall: {
      position: "absolute",
      left: "210px",
    },
    pantBig: {
      position: "absolute",
      bottom: "0",
      right: "20px",
    },
    homemenBox: {
      position: "relative",
    },
    pinIconBtn: {
      ...styles.imagesBox,
      height: "550px",
      width: "500px",
    },
    pinIconBgL: {
      // ...styles.imagesBox,
      position: "absolute",
      left: "0px",
      bottom: "-50px",
    },
    pinIconBgR: {
      // ...styles.imagesBox,
      position: "absolute",
      right: "0px",
      top: "60px",
    },
    mainText: {
      background: "linear-gradient(93deg, #6800D7 0.68%, #DC0155 65.41%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "65px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
        // padding:'20px'
      },
    },
    columnsGrid: {
      margin: "100px 0px",
      paddingLeft: "60px",
      [theme.breakpoints.down("sm")]: {
        margin: "auto 0",
        padding: "0",
      },
    },
    columnsGridRight: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      position: "relative",
    },
    mainGrid: {
      height: "100%",
      backgroundImage: "url(assets/images/GSDNewImages/GSD.png)",
      backgroundRepeat: "no-repeat",
    },
    mainContainer: {
      paddingTop: "110px",
      backgroundColor: "#F0E6FB",
      position: "relative",
    },
    GridMaind: {
      justifyContent: "center",
    },
  };
});
