import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { pallete } from "../css/Theme";
import { styles } from "../css/CommonCSS";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Container maxWidth={false} className={classes.mainContainer}>
        <Box
          component="img"
          className={classes.pinIconBgL}
          src="assets\icons\services\redside.svg"
          alt="Descriptive Alt Text"
        />
        <Grid container className={classes.mainGrid}>
          <Grid item md={6} className={classes.columnsGrid}>
            <Typography className={classes.mainText}>
              Virtual Private Assistant Services
            </Typography>
          </Grid>
          <Grid item md={6} className={classes.columnsGridRight}>
            <Box
              component="img"
              className={classes.pinIconBtn}
              src="assets\icons\services\serviceImg.png"
              alt="Descriptive Alt Text"
            />
            <Box
              component="img"
              className={classes.cube}
              src="assets\icons\services\cube.png"
              alt="Descriptive Alt Text"
            />
            <Box
              component="img"
              className={classes.pantBig}
              src="assets\icons\services\pantBig.png"
              alt="Descriptive Alt Text"
            />
            <Box
              component="img"
              className={classes.plantSmall}
              src="assets\icons\services\plantSmall.png"
              alt="Descriptive Alt Text"
            />
          </Grid>
        </Grid>
        <Box
          component="img"
          className={classes.pinIconBgR}
          src="\assets\icons\services\purpleside.svg"
          alt="Descriptive Alt Text"
        />
      </Container>
      <Container maxWidth={false} className={classes.conatiner2}>
        <Typography variant="h4" color="primary" align="center">
          Services
        </Typography>
        <Grid container sx={{ ...styles.flexDRC, paddingTop: "20px" }}>
          <Grid container md={9}>
            <Grid item md={4} className={classes.serv2grid}>
              <AvTimerIcon className={classes.icons2} />
              <Typography variant="h5" align="center">
                Monitoring 24/7
              </Typography>
              <Typography variant="h6" sx={{ color: "#8794BA" }} align="center">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                Elementum nisi aliquet volutpat.
              </Typography>
            </Grid>
            <Grid item md={4} className={classes.serv2grid}>
              <DisplaySettingsIcon className={classes.icons2} />
              <Typography variant="h5" align="center">
                Widget System
              </Typography>
              <Typography variant="h6" sx={{ color: "#8794BA" }} align="center">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                Elementum nisi aliquet volutpat.
              </Typography>
            </Grid>
            <Grid item md={4} className={classes.serv2grid}>
              <RocketLaunchIcon className={classes.icons2} />
              <Typography variant="h5" align="center">
                Best Performance
              </Typography>
              <Typography variant="h6" sx={{ color: "#8794BA" }} align="center">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                Elementum nisi aliquet volutpat.
              </Typography>
            </Grid>
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
                  Lorem ipsum
                </Typography>
                <Typography variant="h6" align="center">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                </Typography>
              </Card>
            </Grid>
            <Grid item md={4} position="relative">
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
                  Lorem ipsum
                </Typography>
                <Typography variant="h6" align="center">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
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
                  Lorem ipsum
                </Typography>
                <Typography variant="h6" align="center">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false} className={classes.conatiner7}>
        <Box>
          <Typography variant="h4" color="white" align="center">
            Lorem ipsum is a placeholder text
            <br /> commonly used to demonstrate
          </Typography>
          <Typography
            variant="h6"
            color="white"
            align="center"
            padding="20px 0"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros <br /> elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolo
          </Typography>
          <IconButton
            sx={{
              bottom: "10px",
              right: "100px",
              position: "absolute",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "152px",
                width: "152px",
              }}
              src="\assets\icons\services\playBtn.svg"
              alt="Descriptive Alt Text"
            />
          </IconButton>
        </Box>
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
                  Get Contact Me
                </Typography>
                <Divider variant="inset" className={classes.dividerMain} />
                <Typography className={classes.expectPara}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  pharetra, ac purus diam leo eget. Sem a magna egestas
                  ridiculus.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.{" "}
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

export default Services;

const useStyles = makeStyles()((theme) => {
  return {
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
  };
});
