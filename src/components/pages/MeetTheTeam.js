import { Container, Grid, Typography, Box, Button } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { styles } from "../css/CommonCSS";
import { pallete } from "../css/Theme";

const MeetTheTeam = () => {
  const { classes } = useStyles();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Container maxWidth={false} className={classes.mainContainer}>
        <Grid container className={classes.mainGrid}>
          <Grid item md={6} className={classes.columnsGrid}>
            <Typography className={classes.mainText}>
              Meet Our Dedicated Team
            </Typography>
            <Typography className={classes.secondHeading}>
              Experienced Professionals at Your Service.
            </Typography>
          </Grid>
          <Grid item md={6} className={classes.columnsGridRight}>
            <Grid container>
              <Grid item md={6} className={classes.imgGridTop}>
                <Box sx={{ ...styles.flexDR, justifyContent: "flex-end" }}>
                  <Box
                    component="img"
                    src="assets/images/meetTheTeam/1.png"
                    className={classes.firstImg}
                    alt="Descriptive Alt Text"
                  />
                </Box>
                {/* <Box className={classes.hLine1}>
                  <Box 
                    component="img"
                    src="assets/images/meetTheTeam/hLine.svg"
                    className={classes.hLine1Img}
                    alt="Descriptive Alt Text"
                  />
                </Box> */}
                <Box
                  sx={{
                    ...styles.flexDR,
                    padding: "20px",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="assets/images/meetTheTeam/2.png"
                    className={classes.secondImg}
                    alt="Descriptive Alt Text"
                  />
                </Box>
                <Box
                  sx={{
                    ...styles.flexDR,
                    padding: "20px",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box
                    component="img"
                    src="assets/images/meetTheTeam/3.png"
                    className={classes.thirdImg}
                    alt="Descriptive Alt Text"
                  />
                </Box>
              </Grid>
              <Grid item md={6} className={classes.imgGridTop}>
                <Box
                  sx={{
                    ...styles.flexDR,
                    padding: "20px",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box
                    component="img"
                    alt="boy"
                    src="assets/images/meetTheTeam/4.png"
                    className={classes.fourthImg}
                  />
                </Box>
                <Box
                  sx={{
                    ...styles.flexDR,
                    padding: "20px",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    alt="boy"
                    src="assets/images/meetTheTeam/5.png"
                    className={classes.fifthImg}
                  />
                </Box>
                <Box
                  sx={{
                    ...styles.flexDR,
                    padding: "20px",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box
                    component="img"
                    alt="boy"
                    src="assets/images/meetTheTeam/6.png"
                    className={classes.sixthImg}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* section-2*/}
      <Container maxWidth={false} className={classes.container2}>
        <Grid container sx={{ height: "100%" }}>
          <Grid item md={6} className={classes.serviceLftGrid}>
            <img
              alt="group"
              src="assets/images/meetTheTeam/7.png"
              className={classes.groupImg}
            />
            <img
              alt="girl"
              src="assets/images/meetTheTeam/8.png"
              className={classes.onewomenImg}
            />
          </Grid>
          <Grid item md={6} className={classes.serviceRightTextBox}>
            <Box>
              <Typography className={classes.serveceBelo}>
                <span style={{ color: pallete.primaryPurple }}>
                  Lorem ipsum{" "}
                </span>{" "}
                placeholder text
              </Typography>
              <Typography className={classes.paraText}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form.In publishing
                and graphic design.In publishing and graphic design, Lorem ipsum
                is a placeholder text commonly used to demonstrate the visual
                form.In publishing and graphic design.In publishing and graphic
                design, Lorem ipsum is a placeholder text commonly used to
                demonstrate the visual form.In publishing and graphic design.In
                publishing and graphic design, Lorem ipsum is a placeholder.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* meet our team section-3*/}
      {
        <Container maxWidth={false} className={classes.container3}>
          <Box>
            <Typography align="center" className={classes.serveceBelo}>
              <span style={{ color: pallete.primaryPurple }}>Meet </span> our
              Team
            </Typography>
            <Typography align="center" className={classes.section3paraText}>
              An exclusive look into the incredible individuals who make up the
              heart and soul of GSD.
              <br /> We're more than just a team; we're a diverse and passionate
              family committed totransforming the way work is approached.
            </Typography>
          </Box>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Grid item md={2}>
              <Box className={classes.roundedBox}>
                <Box
                  component="img"
                  alt="boy"
                  src="assets/images/meetTheTeam/9.png"
                  className={classes.roundOne1}
                />
              </Box>
            </Grid>
            <Grid item md={2}>
              <Box className={classes.roundedBox}>
                <Box
                  component="img"
                  alt="boy"
                  src="assets/images/meetTheTeam/10.png"
                  className={classes.roundOne2}
                />
              </Box>
            </Grid>
            <Grid item md={2}>
              <Box className={classes.roundedBox}>
                <Box
                  component="img"
                  alt="boy"
                  src="assets/images/meetTheTeam/11.png"
                  className={classes.roundOne3}
                />
              </Box>
            </Grid>
            <Grid item md={2}>
              <Box className={classes.roundedBox}>
                <Box
                  component="img"
                  alt="boy"
                  src="assets/images/meetTheTeam/12.png"
                  className={classes.roundOne2}
                />
              </Box>
            </Grid>
            <Grid item md={2}>
              <Box className={classes.roundedBox}>
                <Box
                  component="img"
                  alt="boy"
                  src="assets/images/meetTheTeam/9.png"
                  className={classes.roundOne1}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container justifyContent="center" mt={2}>
            <Grid item>
              <Button startIcon={<ArrowBackIosRoundedIcon />}></Button>
            </Grid>
            <Grid item>
              <Button endIcon={<ArrowForwardIosRoundedIcon />}></Button>
            </Grid>
          </Grid>
        </Container>
      }
      {/*section-4*/}
      <Container className={classes.container4}>
        <Grid container className={classes.containerbox}>
          <Grid item className={classes.box1}>
            <Box className={classes.insidebox1}>
              <Typography className={classes.section4heading}>
                Dedicated Team
              </Typography>
              <Typography className={classes.section4subHeading}>
                Professional Individuals
              </Typography>
              <Typography className={classes.section4ParaText}>
                Behind the scenes, these exceptional professionals work
                tirelessly to simplify work, enhance productivity, and redefine
                what it means to truly excel. Their stories and journeys are a
                testament to the values that unite us in our shared mission to
                GET STUFF DONE. Discover the unique talents, experiences, and
                aspirations that drive our dedicated team. As you delve into
                their narratives, you'll see how their remarkable contributions
                shape the innovative solutions and services we provide. They are
                not just team members; they are the heart and soul of GSD. Join
                us in celebrating our dedicated team, and together, let's forge
                a path toward excellence.
              </Typography>
            </Box>
          </Grid>
          <Grid item className={classes.box2}>
            <img
              alt="img"
              src="assets/images/meetTheTeam/14.png"
              className={classes.section4img}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MeetTheTeam;
const useStyles = makeStyles()((theme) => {
  return {
    roundedBox: {
      padding: "20px",
    },
    roundOne1: {
      borderRadius: "50%",
      height: "200px",
      width: "200px",
    },
    roundOne2: {
      borderRadius: "50%",
      height: "230px",
      width: "230px",
    },
    roundOne3: {
      borderRadius: "50%",
      height: "300px",
      width: "300px",
    },
    hLine1: {
      position: "absolute",
      top: "170px",
      left: "260px",
    },
    hLine1Img: {
      width: "280px",
      height: "10px",
    },
    imgGridTop: {
      ...styles.flexDC,
    },
    columnsGrid: {
      margin: "100px 0px",
      paddingLeft: "60px",
      [theme.breakpoints.down("sm")]: {
        margin: "auto 0",
        padding: "0",
      },
    },
    efficiencyCon: {},
    serviceRightTextBox: {
      margin: "auto",
    },
    insidebox1: {
      width: "400px",
      height: "400px",
      padding: "88px 48px",
      flexdirection: "column",
      alignitems: "flex-start",
      gap: "10px",
      flexshrink: "0",
    },
    section4heading: {
      color: "#FFF",
      fontfamily: "Roboto",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "500",
      lineheight: "normal",
    },
    section4subHeading: {
      color: "#FFF",
      fontFamily: "Roboto",
      fontSize: "27px",
      fontStyle: "normal",
      fontWeight: "600",
      lineheight: "50%" /* 48.4px */,
    },
    section4ParaText: {
      color: "#FFF",
      fonFamily: "Roboto",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "400",
      lineheight: "113.187%" /* 23.39px */,
    },
    section4img: {
      height: "100%",
      width: "450px",
    },
    containerbox: {
      display: "flex",
      alignItems: "center",
      paddingLeft: "150px",
    },
    box1: {
      // height: "450px",
      width: "450px",
      backgroundColor: "black",
    },
    box2: {
      // height: "450px",
      width: "450px",
      // backgroundColor: "red",
    },
    boxStyle: {
      height: "100px",
      textAlign: "center",
      padding: "20px",
      border: "1px solid #ccc", // Optional: Add border for visibility
    },
    allPppsGrdBox: {
      padding: "40px",
      [theme.breakpoints.down("sm")]: {
        padding: "20px 0",
      },
    },
    section3paraText: {
      color: "#030303",
      fontSize: "14px",
      padding: "20px 0",
      fontfamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "20px" /* 133.333% */,
      [theme.breakpoints.down("sm")]: {},
    },
    section3heading: {
      color: "#FFF",
      fontFamily: "Roboto",
      fontsize: "18px",
      fontstyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
    },
    section2subheading: {
      color: "#FFF",
      fontFamily: "Roboto",
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "121%" /* 48.4px */,
    },
    section3paraText2: {
      color: "#FFF",
      fontFamily: "Roboto",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "146.187%" /* 23.39px */,
      [theme.breakpoints.down("sm")]: {
        height: "00px",
        width: "300px",
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
    articalsPara: {
      color: "#2E2E2E",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "26px",
      fontFamily: "Roboto",
    },

    firstImg: {
      ...styles.imagesBox,
      width: "219px",
      [theme.breakpoints.down("sm")]: {
        // height: "00px",
        // width: "300px",
      },
      border: "8px solid #F4EAFF", // 1px solid white border
    },
    secondImg: {
      ...styles.imagesBox,
      width: "219px",
      [theme.breakpoints.down("sm")]: {
        // height: "00px",
        // width: "300px",
      },
      border: "8px solid #F4EAFF", // 1px solid white border
    },
    thirdImg: {
      ...styles.imagesBox,
      width: "140px",
      height: "80px",
      [theme.breakpoints.down("sm")]: {
        // height: "00px",
        // width: "300px",
      },
      border: "8px solid #F4EAFF", // 1px solid white border
    },
    fourthImg: {
      ...styles.imagesBox,
      width: "125px",
      height: "60px",
      [theme.breakpoints.down("sm")]: {
        // height: "00px",
        // width: "300px",
      },
      border: "8px solid #F4EAFF", // 1px solid white border
    },
    fifthImg: {
      ...styles.imagesBox,
      width: "219px",
      [theme.breakpoints.down("sm")]: {
        // height: "00px",
        // width: "300px",
      },
      border: "8px solid #F4EAFF", // 1px solid white border
    },
    sixthImg: {
      ...styles.imagesBox,
      width: "219px",
      [theme.breakpoints.down("sm")]: {
        // height: "00px",
        // width: "300px",
      },
      border: "8px solid #F4EAFF", // 1px solid white border
    },

    efficiencyBoxLeft: {
      padding: "100px 20px",
    },

    paraText: {
      fontFamily: "Roboto",
      color: "#030303",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "30px",
      marginTop: "20px",
    },
    onewomenImg: {
      position: "absolute",
      width: "244px",
      height: "232px",
      marginLeft: "380px",
      marginTop: "90px",
      border: "20px solid white",
    },
    groupImg: {
      position: "absolute",
      width: "571px",
      height: "332px",
      marginTop: "-70px",
      marginLeft: "30px",
    },
    smallGrid: {
      display: "flex",

      width: "559px",
      height: "501px",
      padding: "88px 48px",
      flexDirection: "column",
      alignItems: "flex - start",
      gap: "10px",
      flexShrink: "0",
      background: "#2E2E2E",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },

    groupImg2: {
      position: "absolute",
      width: "507px",
      height: "338px",
      marginTop: "-70px",
      //marginLeft:"30px"
    },

    serviceLftGrid: {
      position: "relative",
      padding: "30px 15px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    serviceLftGridSection3: {
      //display: "flex",

      //padding: "30px 15px",

      width: "507px",
      height: "538px",
      marginTop: "-70px",

      background: "#2E2E2E",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    serviceRghtGrid: {
      position: "relative",
      //padding: "30px 15px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    serviceLftGrid1: {
      position: "relative",
      padding: "30px 15px",
    },
    service2Conatiner: {
      backgroundColor: "#F0E6FB",
      height: "590px",
      margin: "50px 0",
      [theme.breakpoints.down("sm")]: {
        padding: "50px 0",
        height: "800px",
      },
    },
    contactUsBtn: {
      ...styles.buttonMain,
      padding: "12px 40px",
      marginTop: "30px",
      marginBottom: "80px",
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
    },
    serveceBelo: {
      fontSize: "40px",
      fontStyle: "normal",
      fontFamily: "Montserrat",
      fontWeight: 600,
      lineHeight: "normal",
      letterSpacing: "-1px",
      textTransform: "capitalize",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
    serviceText: {
      fontFamily: "Roboto",
      color: "#2E2E2E",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "24px",
    },

    secondHeading: {
      fontSize: "18px",
      fontStyle: "normal",
      fontFamily: "Roboto",
      fontWeight: 400,
      lineHeight: "40px",
      color: "#333333",
      margin: "10px 0px",
    },
    exploreBox: {
      display: "flex",
      flexDirection: "row",
      margin: "20px 0px",
    },
    columnsGridRight: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      // justifyContent:'center'
    },
    mainGrid: {
      height: "100%",
      backgroundImage: "url(assets/images/GSDNewImages/GSD.png)",
      backgroundRepeat: "no-repeat",
    },
    mainText: {
      background: "linear-gradient(93deg, #6800D7 0.68%, #DC0155 65.41%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "60px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      fontFamily: "Montserrat",
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
        // padding:'20px'
      },
    },
    mainContainer: {
      paddingTop: "110px",
      height: "100vh",
      background: "linear-Gradient(180deg,#DECAF4 0%,#EDC9DB 100%)",
      backgroundColor: "linear-gradint(180deg,#DECAF4 0%,#EDC9DB 100%)",
    },
    container2: {
      marginTop: "110px",
      height: "60vh",
    },
    container3: {
      marginTop: "110px",
      padding: "50px 0",
      height: "80vh",
      background: "#F0E6FB",
    },
    container4: {
      marginTop: "110px",
      height: "100vh",
    },
  };
});
