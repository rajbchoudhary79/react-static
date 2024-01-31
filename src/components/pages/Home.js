import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Card,
  Divider,
  IconButton,
} from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { pallete } from "../css/Theme";
import { styles } from "../css/CommonCSS";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import ReactPlayer from "react-player";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import functions from "../../config/functions";
// import HowItWorks from "../elements/HowItWorks";

const Home = () => {
  const navigate = useNavigate();
  const { classes } = useStyles();

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 1,
    dots: true,
    infinite: true,
    vertical: false,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    customPaging: (i) => <div className="ft-slick__dots--custom"></div>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  const whyGsdArr = [
    {
      id: 1,
      title: "Quick Results",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      img: "rocket.png", // public\assets\images\rocket.png
      elips: "elips1.svg",
      borderColor: "4px solid #ECDAFF",
    },
    {
      id: 2,
      title: "Satisfaction Guarantee",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      img: "yoyo.png",
      elips: "elips2.svg",
      borderColor: "4px solid #B8B9FD",
    },
    {
      id: 3,
      title: "Experienced Support Staff",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      img: "ig.png",
      elips: "elips3.svg",
      borderColor: "4px solid #FFA3CA",
    },
  ];

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const banners = functions.getHomePageBanner();
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Slider {...settings}>
        {banners.map((banner) => (
          <Box className={classes.mainContainer} key={banner.id}>
            <Grid container className={classes.mainGrid}>
              <Grid item md={4} className={classes.columnsGrid}>
                <Typography className={classes.mainText}>
                  {banner.title}
                </Typography>
                <Typography className={classes.secondHeading}>
                  Unleash the power of productivity and let us take care of the
                  details while you focus on the big picture.
                </Typography>
                <Typography className={classes.secondHeading}>
                  <b>Get Stuff Done! Your success is just a click away.</b>
                </Typography>
              </Grid>
              <Grid item md={8} className={classes.columnsGridRight}>
                <Box className={classes.homemenBox}>
                  <Box
                    component="img"
                    className={classes.pinIconBtn}
                    src={banner.image}
                    alt="Descriptive Alt Text"
                  />
                  <div className={classes.fadeEffect}></div>{" "}
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Slider>
      <Container maxWidth={false}>
        <Box className={classes.serviceBox}>
          <Typography align="center" className={classes.serviceBoxHeading}>
            <Typography
              className={classes.serveceBelos}
              style={{ color: pallete.primaryPurple }}
            >
              Experience the power of
            </Typography>{" "}
            Virtual Assistance
          </Typography>
          <Box className={classes.reactPlayerBox}>
            <ReactPlayer
              url="https://youtube.com/watch?v=A6LMhETsSJk"
              playin={true}
              className={classes.reactPlayerLib}
              width="1000px"
              height="600px"
            />
          </Box>
        </Box>
      </Container>
      <Grid
        container
        // sx={{ height: "100%" }}
        className={classes.service2Conatiner}
      >
        <Grid item md={6.5} className={classes.serviceLftGrid}>
          <Box
            component="img"
            alt="mens"
            src="assets/images/homeg2.jpg"
            className={classes.onewomenImg}
          />
          {/* <div className={classes.fadeEffectRight}></div>{" "} */}
        </Grid>
        <Grid item md={5.5} className={classes.serviceRightTextBox}>
          <Box>
            <Typography className={classes.serveceBelo}>
              <span style={{ color: pallete.primaryPurple }}>
                Simplify your{" "}
              </span>{" "}
              Business <br />
              operations.
            </Typography>
            <Typography className={classes.paraText}>
              <b>
                Your strategic partner in simplifying complexities and
                optimizing efficiency.
              </b>
              <br />
              <br />
              Our commitment is to provide results that go beyond expectations,
              <b>
                ensuring your business operations are smoother and more
                productive, with 30% - 50% Cost Savings;
              </b>{" "}
              our engagement is not just about services; it's about a
              <b>
                partnership that simplifies, enhances, and takes your business
                operations to the next level.
              </b>{" "}
              Simplify Your Business Operations with GSD – where efficiency
              meets excellence!
            </Typography>
            <Button
              onClick={() => navigate("about-us")}
              variant="contained"
              className={classes.contactUsBtn}
            >
              Get Started
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container className={classes.efficiencyCon}>
        <Grid item md={5.5} className={classes.efficiencyConGrid}>
          <Box className={classes.efficiencyBoxLeft}>
            <Typography className={classes.serveceBelo}>
              <span style={{ color: pallete.primaryPurple }}>
                Streamlined solutions{" "}
              </span>{" "}
              For <br />
              your business.
            </Typography>
            <Typography className={classes.paraText}>
              Discover the unique services offered by GSD Associates, an
              outsourcing company dedicated to taking your business to the next
              level. We are not just a conventional service provider, but rather
              a committed partner in helping you achieve business excellence.
              Our unparalleled dedication to finding the perfect Virtual
              Assistant for your company, as well as our personalized approach,
              sets us apart and makes a significant difference in the services
              we provide. Take the first step towards greater efficiency and
              productivity
            </Typography>
            <Button
              onClick={() => navigate("about-us")}
              variant="contained"
              className={classes.contactUsBtn}
            >
              Learn More
            </Button>
          </Box>
        </Grid>
        <Grid item md={6.5} className={classes.duoImagGrod}>
          <Box
            component="img"
            src="assets/images/homeg3.jpg"
            className={classes.teamImg01}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.service2Conatiner2}>
        <Grid item md={6.5} className={classes.serviceLftGrid1}>
          <Box
            component="img"
            alt="dots"
            src="assets/images/homeg4.jpg"
            className={classes.coolbuysImg}
          />
        </Grid>
        <Grid item md={5.5} className={classes.serviceRightTextBox}>
          <Box>
            <Typography className={classes.serveceBelo}>
              <span style={{ color: pallete.primaryPurple }}>We cater to </span>{" "}
              businesses of <br />
              all sizes.
            </Typography>
            <Typography className={classes.paraText}>
              We are fully dedicated to providing extensive comprehensive
              services, meticulously crafted to alleviate your workload and
              drive you towards your goals with maximum efficiency. We recognize
              and acknowledge the distinctiveness of each business, and our
              services are precisely customized to meet your requirements,
              ensuring that you receive the ultimate support necessary for your
              growth.
            </Typography>
            <Button
              onClick={() => navigate("contact-us")}
              variant="contained"
              className={classes.contactUsBtn}
            >
              Contact Us
            </Button>
          </Box>
        </Grid>
      </Grid>

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
            <Grid item md={9.5}>
              <Box className={classes.expertLeftBox}>
                <Typography className={classes.expetText}>
                  Take your business to new heights
                </Typography>
                <Divider variant="inset" className={classes.dividerMain} />
                <Typography className={classes.expectPara}>
                  Meet our experts and elevate your business.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={2.5} className={classes.experBtnGrod}>
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

      {/* <Container maxWidth={"auto"} style={{marginBottom: 50, marginLeft: 15, marginRight: 15, width: 'auto'}}>
        <Box>
          <Typography align="center" className={classes.serveceBelo}>
            <span style={{ color: pallete.primaryPurple }}>How It</span> Works?
          </Typography>
        </Box>
        <Grid container md={12}>
          <HowItWorks />
        </Grid>
      </Container> */}
      <Container maxWidth={false} className={classes.welcomCOntainer}>
        <Box>
          <Typography align="center" className={classes.serveceBelo}>
            <span style={{ color: pallete.primaryPurple }}>Success</span>{" "}
            Stories
          </Typography>
          <Typography
            sx={{ margin: "5px 0" }}
            align="center"
            className={classes.serviceText}
          >
            Your Virtual Assistant Solution
          </Typography>
        </Box>
        <Grid container className={classes.clientMainGrid}>
          <Grid item md={6} className={classes.clientLeftGrid}>
            <Box className={classes.clientsControls}>
              <Box className={classes.corosalClientCOntrols}>
                <IconButton sx={{ backgroundColor: "#fff", margin: "4px 0" }}>
                  <KeyboardArrowUpRoundedIcon />
                </IconButton>
                <IconButton sx={{ backgroundColor: "#fff", margin: "4px 0" }}>
                  <KeyboardArrowDownRoundedIcon />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box className={classes.carosalBox}>
                  <img
                    alt=""
                    src="assets/icons/Quotes.svg"
                    className={classes.quotIcon}
                  />
                  <Card className={classes.caroselCards}>
                    <Typography className={classes.articalsPara}>
                      As a busy physician, investor, and expecting father there
                      simply was not enough time in the day. I recently made the
                      decision to buy my time back by expanding my team to
                      assist with documentation and administrative requirements
                      at work and personal assistant tasks to help me and my
                      wife with life. Valentina, my virtual assistant, has been
                      an incredible addition to our team. I am a better
                      physician, surgeon, and husband/father because of her.
                    </Typography>
                  </Card>
                </Box>
              </Box>
              <Box className={classes.corosalClientCOntrolsHori}>
                <IconButton
                  sx={{ backgroundColor: "#fff", margin: "4px 10px" }}
                >
                  <ArrowBackIosRoundedIcon />
                </IconButton>
                <IconButton
                  sx={{ backgroundColor: "#fff", margin: "4px 10px" }}
                >
                  <ArrowForwardIosRoundedIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} className={classes.clientRightGrid}>
            <Box className={classes.happyClientBox}>
              <Box
                component="img"
                src="assets/images/clientNEw.jpg"
                alt=""
                className={classes.clintImg}
              />
              <Typography className={classes.cName}>
                Chirag N. Dave, M.D.
              </Typography>
              <Typography className={classes.cTitle}>
                Urologist Advanced Urology
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth={false} className={classes.whyGsdContainer}>
        <Grid container md={10}>
          <Grid item md={6} sx={{ ...styles.flexDCC }}>
            <Box>
              <Typography className={classes.serveceBelo}>
                <span style={{ color: pallete.primaryPurple }}>Why </span>
                GSD
              </Typography>
              <Typography className={classes.paraText}>
                We go beyond conventional solutions. At GSD, our unwavering
                commitment to excellence, tailored services, and a
                forward-thinking approach sets us apart. We're not just about
                meeting your needs; we're dedicated to exceeding your
                expectations. Choose GSD and experience the difference that sets
                us apart in the world of outsourcing.
              </Typography>
              <Button
                onClick={() => navigate("contact-us")}
                variant="contained"
                className={classes.contactUsBtn}
              >
                Contact Us
              </Button>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Grid container className={classes.gsdArrouterBox}>
              {whyGsdArr.map((x) => (
                <Grid
                  container
                  key={x.id}
                  className={classes.gsdArrCard}
                  sx={{ border: `${x.borderColor}` }}
                >
                  <Grid item xs={8}>
                    <Typography className={classes.gsdArrTitle}>
                      {x.title}
                    </Typography>
                    {/* <Typography className={classes.gsdArrPara}>
                      {x.description}
                    </Typography> */}
                  </Grid>
                  <Grid item xs={4} className={classes.rocketBoxouter}>
                    <Box className={classes.rocketBox}>
                      <img
                        src={`/assets/images/${x.img}`}
                        alt=""
                        className={classes.rocketImg}
                      />
                      <img
                        src={`/assets/images/${x.elips}`}
                        alt=""
                        className={classes.rocketElips}
                      />
                    </Box>
                  </Grid>
                </Grid>
              ))}
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
            <Grid item md={8}>
              <Box className={classes.expertLeftBox}>
                <Typography className={classes.expetText}>
                  Learn more about Virtual Assistant
                </Typography>
                <Divider variant="inset" className={classes.dividerMain} />
                <Typography className={classes.expectPara}>
                  Meet our experts and elevate your business.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4} className={classes.experBtnGrodBottom}>
              <Button
                onClick={() => navigate("about-us")}
                variant="contained"
                className={classes.expertBtns}
              >
                Contact Us
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;

const useStyles = makeStyles()((theme) => {
  return {
    clientsControls: {
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
      },
    },
    clientMainGrid: {
      [theme.breakpoints.down("lg")]: {
        ...styles.flexDRC,
      },
    },
    clientLeftGrid: {
      ...styles.flexDRC,
      [theme.breakpoints.down("lg")]: {
        order: 2,
      },
    },
    clientRightGrid: {
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("lg")]: {
        order: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      },
    },
    efficiencyConGrid: {
      [theme.breakpoints.down("lg")]: {
        order: 2,
      },
    },
    duoImagGrod: {
      ...styles.flexDRC,
      alignItems: "center",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        // ...styles.flexDCC,
        order: 1,
        alignItems: "start",
      },
      [theme.breakpoints.down("lg")]: {
        order: 1, // On small screens, this will be the second item
      },
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
    reactPlayerBox: {
      ...styles.flexDRC,
      marginTop: "40px",
      width: "100%", // Set the width to 100% of the parent
      // paddingTop: '56.25%', // Aspect ratio padding for 16:9 aspect ratio
      [theme.breakpoints.down("sm")]: {
        // Adjust the padding-top for different aspect ratios if needed
        height: "auto",
      },
      [theme.breakpoints.down("lg")]: {
        width: "100%",
      },
    },
    reactPlayerLib: {
      width: "100%", // Take full width of the parent
      height: "100%", // Take full height of the parent
    },
    pinIconBtn: {
      // your existing styles
      width: "100%", // Ensure the image is responsive
      height: "100%",
      objectFit: "cover",
    },
    images1: {
      width: "80%%",
    },
    ytubeTextApps: {
      position: "absolute",
      top: "75px",
      right: "50px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    rocketBoxouter: {
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        paddingTop: "40px",
      },
    },
    otherappsicons125: {
      // width: "84.18px",
      // height: "101.378px",
      [theme.breakpoints.down("sm")]: {
        width: "40.18px",
        height: "50.378px",
      },
    },
    otherappsicons125Middle: {
      // width: "84.18px",
      // height: "101.378px",
      [theme.breakpoints.down("sm")]: {
        width: "60.18px",
        height: "80.378px",
      },
    },
    otherappsicons4: {
      position: "absolute",
      [theme.breakpoints.down("sm")]: {
        width: "40.18px",
        height: "50.378px",
      },
    },
    otherappsicons: {
      width: "84.18px",
      height: "101.378px",
      [theme.breakpoints.down("sm")]: {
        width: "40.18px",
        height: "50.378px",
      },
    },
    uberText: {
      color: "#000",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
    amzonIcs: {
      width: "75.334px",
      height: "15.924px",
      position: "absolute",
      bottom: "90px",
      left: "90px",
      [theme.breakpoints.down("sm")]: {
        width: "37.334px",
        height: "7.924px",
        bottom: "40px",
        left: "70px",
      },
    },
    amzonText: {
      color: "#000",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "20px",
      position: "absolute",
      left: "35px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
      },
    },
    allPppsGrdBox: {
      padding: "40px",
      [theme.breakpoints.down("sm")]: {
        padding: "20px 0",
      },
    },
    amazonBox: {
      borderRadius: "35px",
      backgroundColor: "#FFFFFF",
      width: "269.1px",
      height: " 260.115px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      margin: "15px 0 0 0",
      [theme.breakpoints.down("sm")]: {
        width: "130.1px",
        height: "120.115px",
      },
    },
    otherAppsBox: {
      borderRadius: "35px",
      backgroundColor: "#FFFFFF",
      width: "131.1px",
      height: "130.725px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "15px 0 15px 15px",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        width: "65.1px",
        height: "65.725px",
        borderRadius: "15px",
      },
    },
    otherAppsBoxYtube: {
      borderRadius: "35px",
      backgroundColor: "#FFFFFF",
      width: "131.1px",
      height: "130.725px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "15px",
      alignItems: "center",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        width: "65.1px",
        height: "65.725px",
        borderRadius: "15px",
      },
    },
    appbgleft: {
      position: "absolute",
      left: 0,
      top: "25px",
    },
    appbgright: {
      position: "absolute",
      right: 0,
      top: "50px",
    },
    homemenBox: {
      // your existing styles
      position: "relative",
      height: "100%",
      width: "100%",
    },
    fadeEffectRight: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      backgroundImage:
        "linear-gradient(to left, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
    },
    appCOntainder: {
      backgroundColor: "#F4F5F9",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        padding: "40px 0",
      },
    },
    articalsPara: {
      color: "#2E2E2E",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "26px",
      fontFamily: "Roboto",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
    },
    carosalPara: {},
    whyGsdPARA: {
      color: "#2E2E2E",
      fontFamily: "Roboto",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "26px",
      [theme.breakpoints.down("sm")]: {
        // padding: "20px",
      },
    },
    gsdArrouterBox: {
      [theme.breakpoints.down("sm")]: {
        padding: "20px",
      },
    },
    gsdArrCard: {
      borderRadius: "12px",
      // border: '4px solid #ECDAFF',
      background: "rgba(255, 255, 255, 0.32)",
      // backdropFilter: "blur(12px)",
      padding: "40px 20px",
      marginBottom: "20px",
      [theme.breakpoints.down("sm")]: {
        padding: "20px",
        ...styles.flexDCC,
      },
    },
    gsdArrTitle: {
      color: "#1A2128",
      fontSize: "30px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      letterSpacing: "0.2px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "22px",
        textAlign: "center",
      },
    },
    // gsdArrPara: {
    //   paddingTop: "10px",
    //   color: "#434D56",
    //   fontFamily: "Roboto",
    //   fontSize: "16px",
    //   fontStyle: "normal",
    //   fontWeight: 400,
    //   lineHeight: "22px",
    // },
    takeYourBusiness: {
      [theme.breakpoints.down("sm")]: {
        padding: "50px 0",
      },
    },
    coolbuysImg: {
      // ...styles.imagesBox,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      [theme.breakpoints.down("sm")]: {
        height: "100%",
      },
    },
    homemenImgBG: {
      // width: "839.763px",
      height: "560.465px",
      position: "absolute",
      [theme.breakpoints.down("sm")]: {
        height: "00px",
        width: "300px",
      },
    },
    homemenImg: {
      // width: "839.763px",
      height: "560.465px",
      position: "absolute",
      [theme.breakpoints.down("sm")]: {
        height: "00px",
        width: "300px",
      },
    },
    rocketElips: {
      // position:'absolute',
    },
    rocketImg: {
      position: "absolute",
      bottom: "31px",
      left: "23px",
      width: "93.73px",
      height: "93.73px",
    },
    rocketBox: {
      position: "relative",
    },
    whyGsdContainer: {
      margin: "50px 0",
      display: "flex",
      justifyContent: "center",
    },
    corosalClientCOntrols: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      // position: "absolute",
      // height:"100%",
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
    },
    corosalClientCOntrolsHori: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      // position: "absolute",
      // height:"100%",
      [theme.breakpoints.up("lg")]: {
        display: "none",
      },
    },
    quotIcon: {
      top: "-3px",
      left: "60px",
      position: "absolute",
      [theme.breakpoints.down("sm")]: {
        padding: "0",
        top: "-3px",
        left: "30px",
      },
      [theme.breakpoints.down("lg")]: {
        padding: "0",
        top: "18px",
        left: "50px",
      },
    },
    carosalBox: {
      position: "relative",
      padding: "0 20px",
      [theme.breakpoints.down("sm")]: {
        padding: "0",
        width: "100%",
      },
      [theme.breakpoints.down("lg")]: {
        padding: "20px",
        width: "100%",
      },
    },
    caroselCards: {
      padding: "40px",
      margin: "20px",
      minWidth: "350px",
      [theme.breakpoints.down("sm")]: {
        padding: "30px",
        margin: "10px",
      },
    },
    cTitle: {
      color: "#2E2E2E",
      textAlign: "center",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      padding: "0px 0 20px 0",
    },
    cName: {
      padding: "10px 0",
      color: "#2E2E2E",
      fontSize: "22px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
    },
    clintImg: {
      width: "95%",
      height: "400px",
      objectFit: "cover",
      [theme.breakpoints.down("sm")]: {
        width: "90%",
        height: "250px",
      },
    },
    happyClientBox: {
      width: "82%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#FFF",
      alignContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("lg")]: {
        width: "80%",
      },
    },
    welcomCOntainer: {
      backgroundColor: "#F0E6FB",
      paddingLeft: "5px",
      padding: "30px 0",
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
    experBtnGrod: {
      margin: "auto ",
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
    expectPara: {
      color: "#FFFFFF",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      fontFamily: "Roboto",
    },
    expetText: {
      color: "#FFFFFF",
      fontSize: "26px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
    },
    expertLeftBox: {
      padding: "40px 40px",
    },
    expertGrid: {
      padding: "200px 50px",
      height: "300px",
    },
    expertContainer: {
      margin: "50px 0",
    },
    blogsGrid: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
    },
    blogimg: {
      // width: "332px",
      // height: "281px",
      [theme.breakpoints.down("sm")]: {
        // width :'80%'
      },
    },
    blogTagp: {
      fontFamily: "Roboto",
      color: "#6A6A6A",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
    },
    blogtagH: {
      color: "#000",
      fontFamily: "Roboto",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
    },
    bolgNameTagBox: {
      backgroundColor: "#FFFFFF",
      position: "absolute",
      padding: "10px 20px",
      borderRadius: "8px 0px 0px 8px",
      right: "14.5px",
      top: "180px",
    },
    blogPara: {
      color: "#2E2E2E",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    blogHeading: {
      fontFamily: "Roboto",
      color: "#2E2E2E",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      padding: "15px 0",
    },
    blogsBox: {
      display: "flex",
      flexDirection: "column",
      padding: "10px 15px",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        margin: "0 20px",
      },
    },
    efficiencyBoxLeft: {
      padding: "80px 20px",
      [theme.breakpoints.up("md")]: {
        paddingLeft: "60px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "30px 20px",
      },
      [theme.breakpoints.down("lg")]: {
        padding: "40px 20px",
      },
    },
    teamImg01: {
      ...styles.imagesBox,
      height: "100%",
      maxWidth: "100%",
      objectFit: "cover",
      [theme.breakpoints.down("sm")]: {
        // width: "100%",
        height: "100%",
        marginBottom: "20px",
      },
    },
    teamImg02: {
      ...styles.imagesBox,
      height: "300px",
      width: "350px",
      margin: "0 5px",
      borderRadius: "12px",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "40%",
      },
    },
    efficiencyCon: {
      height: "590px",
      overflow: "hidden",
      [theme.breakpoints.down("md")]: {
        height: "auto",
      },
      [theme.breakpoints.between("md", "lg")]: {
        height: "auto",
      },
    },
    serviceRightTextBox: {
      width: "100%",
      margin: "50px auto",
      padding: "0 60px",
      [theme.breakpoints.down("sm")]: {
        padding: "20px 30px",
        margin: "0",
      },
      [theme.breakpoints.down("lg")]: {
        padding: "40px 20px",
        margin: "0",
      },
    },
    paraText: {
      fontFamily: "Roboto",
      color: "#030303",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "24px",
      maxWidth: "85%",
      margin: "20px 0px",
      // alignContent:"left"
      [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
        maxWidth: "200%",
      },
    },
    onewomenImg: {
      // ...styles.imagesBox,
      objectFit: "cover",
      maxWidth: "100%",
      height: "100%",
      [theme.breakpoints.down("lg")]: {
        width: "100%",
        height: "100%",
      },
    },
    twomenImg: {
      ...styles.imagesBox,
      borderRadius: "12px",
      position: "absolute",
      left: "50px",
      top: "20px",
      margin: "20px 0",
      [theme.breakpoints.down("sm")]: {
        height: "40%",
        width: "40%",
      },
      [theme.breakpoints.down("lg")]: {
        height: "70%",
        width: "70%",
      },
    },
    dotsbottomImg: {
      position: "absolute",
      right: "320px",
      top: "480px",
    },
    dotsImg: {
      position: "absolute",
    },
    serviceLftGrid: {
      // [theme.breakpoints.down("sm")]: {
      //   display: "none",
      // },
      position: "relative",
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
    serviceLftGrid1: {
      position: "relative",
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
    service2Conatiner: {
      backgroundColor: "#F0E6FB",
      overflow: "hidden",
      height: "590px",
      margin: "50px 0 0 0",
      [theme.breakpoints.down("md")]: {
        height: "auto",
      },
      [theme.breakpoints.between("md", "lg")]: {
        paddingBottom: "0",
        height: "auto",
      },
    },
    service2Conatiner2: {
      overflow: "hidden",
      backgroundColor: "#F0E6FB",
      height: "590px",
      [theme.breakpoints.down("md")]: {
        height: "auto",
      },
      [theme.breakpoints.between("md", "lg")]: {
        height: "auto",
      },
    },
    contactUsBtn: {
      ...styles.buttonMain,
      padding: "12px 40px",
      marginTop: "30px",
      marginBottom: "80px",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "20px",
      },
    },
    serviceImg: {
      height: "500px",
      width: "1000px",
      margin: "20px 0",
      [theme.breakpoints.down("sm")]: {
        height: "300px",
        width: "300px",
      },
    },
    serviceBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "50px 0",
    },
    serviceBoxHeading: {
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
    serveceBelos: {
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",

      textTransform: "capitalize",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: "40px",
      },
    },
    serviceText: {
      fontFamily: "Roboto",
      color: "#2E2E2E",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "24px",
      padding: "10px 0px 50px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
        lineHeight: "24px",
        padding: "10px 0px 20px",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "18px",
      },
    },
    exploreLink: {
      fontFamily: "Roboto",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      color: pallete.parimayBlue,
      margin: "auto 0",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: "16px",
      },
    },
    secondHeading: {
      fontSize: "22px",
      fontStyle: "normal",
      fontFamily: "Roboto",
      fontWeight: 400,
      lineHeight: "28px",
      // letterSpacing:"0.1px",
      color: "#333333",
      margin: "20px 0px",
      display: "flex",
      alignItems: "center", // Center the text vertically
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px", // Adjust font size for smaller screens
        lineHeight: "30px",
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: "18px", // Adjust font size for smaller screens
        lineHeight: "30px",
      },
    },

    exploreBox: {
      display: "flex",
      flexDirection: "row",
      margin: "20px 0px",
      cursor: "pointer",
    },
    columnsGrid: {
      margin: "50px 0px",
      paddingLeft: "60px",
      position: "relative",
      zIndex: 3,
      [theme.breakpoints.down("sm")]: {
        margin: "auto 0",
        padding: "0",
      },
      [theme.breakpoints.down("lg")]: {
        paddingLeft: "20px",
      },
    },
    columnsGridRight: {
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down("lg")]: {
        justifyContent: "center",
      },
      position: "relative",
      [theme.breakpoints.up("md")]: {
        "&:before": {
          content: '""',
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,255), rgba(255,255,255,0))",
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
    mainGrid: {},
    mainText: {
      background: "linear-gradient(93deg, #6800D7 0.68%, #DC0155 65.41%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "65px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      width: "150%",
      [theme.breakpoints.down("md")]: {
        fontSize: "30px",
        width: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
        width: "100%",
      },
    },
    mainContainer: {
      height: "590px",
      marginTop: "110px",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "5px",
      },
      backgroundImage: "url(assets/images/GSDNewImages/GSD.png)", // Add your image path here
      backgroundRepeat: "no-repeat",
    },
  };
});
