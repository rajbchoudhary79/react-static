import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  CardActionArea
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import CardMedia from "@mui/material/CardMedia";

const BlogPage = () => {
  const { classes } = useStyles();
  const placeholderImages = [
    "assets/images/blogPage/blog1.jpg",
    "assets/images/blogPage/blog2.jpg",
    "assets/images/blogPage/blog3.jpg",
    "assets/images/blogPage/blog4.jpg",
  ];
  const placeholderImages2 = [
    "assets/images/blogPage/section5img1.jpg",
    "assets/images/blogPage/section5img2.jpg",
    "assets/images/blogPage/section5img3.jpg",
    "assets/images/blogPage/section5img4.jpg",
  ];
  const repeatedImages = [...placeholderImages, ...placeholderImages];

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/*!section-1*/}

      <Container maxWidth={false} className={classes.mainContainer}>
        <Grid container className={classes.mainGrid}>
          <Grid item md={6} className={classes.columnsGrid}>
            <Typography className={classes.mainText}>
              How Virtual Private Assistants Transformed Businesses
            </Typography>
            <Typography className={classes.secondHeading}>
              Explore the remarkable journey of businesses that have harnessed
              the power of Virtual PrivateAssistants (VPAs) to revolutionize
              their operations and achieve unprecedented success. Dive into
              thestories of transformation, innovation, and the impactful role
              that VPAs have played in shaping thefuture of work and
              productivity."
            </Typography>
          </Grid>
          <Grid item md={6} className={classes.columnsGridRight}>
            <Box className={classes.homemenBox}>
              <img
                alt="boy"
                src="assets/images/blogPage/image2girl1boy.png"
                className={classes.homemenImg}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/*!section-2*/}

      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* Headline */}
            <Typography
              variant="h4"
              align="center"
              color="primary"
              gutterBottom
            >
              Popular <span style={{ color: "black" }}>Topics</span>
            </Typography>

            {/* Description */}
            <Typography variant="body2" align="center" paragraph>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.
            </Typography>
          </Grid>

          {/* Blog Cards */}
          {repeatedImages.map((image, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={`Image ${index + 1}`}
                  />
                  <CardContent>
                    {/* Date */}
                    <Typography variant="body2" color="text.secondary">
                      10.22.2023
                    </Typography>

                    {/* Title */}
                    <Typography gutterBottom variant="h5" component="div">
                      Blog Title with Lorem Ipsum
                    </Typography>

                    {/* Description */}
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum is a placeholder text commonly used to visual
                      form. Lorem ipsum is a placeholder text commonly used to
                      demonstrate the visual form of a document or a typeface
                      without relying on meaningful content.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/*!section-3*/}

      <Box sx={{ position: "relative", width: "100%" }}>
        {/* Background Image */}
        <img
          src="assets/images/blogPage/section3img.jpg"
          alt="water"
          style={{ objectFit: "cover", width: "100%" }}
        />

        {/* Text in Center */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
          }}
          className={classes.bannerText}
        >
          <Typography variant="h4">
            "Unlock Productivity and Efficiency with Virtual Private Assistant
            Services!"
          </Typography>
        </Box>
      </Box>

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              {/* Image */}
              <CardMedia
                component="img"
                height="140"
                image="assets/images/blogPage/section4img.jpg"
                alt="Blog Image"
                className={classes.onlyPost}
              />

              {/* Content */}
              <CardContent>
                {/* Title */}
                <Typography gutterBottom variant="h5" component="div">
                  Blog Title
                </Typography>

                {/* Date */}
                <Typography variant="body2" color="text.secondary">
                  "1 Month Ago"
                </Typography>

                {/* Lorem Ipsum Text */}
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nec turpis sed arcu malesuada fringilla.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            {/* Headline */}
            <Typography
              variant="h4"
              align="center"
              color="primary"
              gutterBottom
            >
              Related<span style={{ color: "black" }}>Posts</span>
            </Typography>

            {/* Description */}
          </Grid>

          {/* Blog Cards */}
          {placeholderImages2.map((image, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={`Image ${index + 1}`}
                  />
                  <CardContent>
                    {/* Date */}
                    <Typography variant="body2" color="text.secondary">
                      10.22.2023
                    </Typography>

                    {/* Title */}
                    <Typography gutterBottom variant="h5" component="div">
                      Blog Title with Lorem Ipsum
                    </Typography>

                    {/* Description */}
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum is a placeholder text commonly used to visual
                      form. Lorem ipsum is a placeholder text commonly used to
                      demonstrate the visual form of a document or a typeface
                      without relying on meaningful content.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
const useStyles = makeStyles()((theme) => {
  return {
    onlyPost: {
      height: "400px", // Adjust the height as needed
    },
    bannerText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      color: "white",
      width: "100%",
      maxWidth: 1000, // Adjust as needed
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        fontSize: "11px",
      },
    },
    root: {
      marginTop: theme.spacing(2),
    },
    image: {
      width: "100%",
      height: "auto",
      marginBottom: theme.spacing(2),
      borderRadius: theme.spacing(1), // Optional: Add rounded corners
    },
    heading: {
      fontSize: "24px",
      fontWeight: 600,
      marginBottom: theme.spacing(1),
      textAlign: "center",
    },
    subheading: {
      fontSize: "18px",
      marginBottom: theme.spacing(3),
      textAlign: "center",
    },
    section5typo: {
      color: "#495057",
      marginLeft: "20px",
      fontFamily: "Roboto",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "25px",
    },
    container5: {
      marginTop: "100px",
      height: "100vh",
    },
    content: {
      marginLeft: theme.spacing(2),
    },
    viewPost: {
      color: "#2E2E2E",
      fontFamily: "Roboto",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "200",
      lineHeight: "20px",
      textDecoration: "underline",
      marginTop: "10px",
    },
    rightSection: {
      width: "30%",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    leftSection: {
      width: "700px",
      margin: "20px",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    section4img: {
      marginTop: "20px",
      width: "700px",
      height: "340px",
    },
    rectangleBox: {
      width: "1480px",
      height: "620px",
      flexShrink: 0,
      border: "1px solid rgba(18, 20, 22, 0.20)",
      background: "#FFF",
      marginTop: theme.spacing(2), // Adjust margin as needed
    },
    horizontalLine: {
      width: "1480px",
      height: "0px",
      flexShrink: 0,
      borderWidth: "1px",
      borderColor: "#D6D6D6",
      borderStyle: "solid",
      margin: `${theme.spacing(2)}px 0`, // Adjust margin as needed
    },
    section4: {
      width: "50%",
    },
    categoryRow: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      //backgroundColor: theme.palette.primary.main, // Adjust the background color as needed
      color: "black", // Text color
      textAlign: "left",
      fontSize: "10px",
      fontWeight: "700",
    },
    container4: {
      marginTop: "100px",
      height: "140vh",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      objectFit: "cover",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the darkness by changing the last value (0.5 in this case)
    },
    textOverlay: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      padding: theme.spacing(2), // Add padding for better visibility
      color: "#FFF",

      fontFamily: "Montserrat",
      fontSize: "2.1667rem",
      fontStyle: "normal",
      fontWeight: "800",
      lineHeight: "normal",
    },
    container3: {
      marginTop: "30px",
      height: "80vh",
      position: "relative",
    },
    addPadding: {
      paddingTop: "20px",
      paddingBottom: "20px",
    },
    boxImg: {
      width: "270px",
    },
    section2subheading: {
      color: "#2E2E2E",
      fontFamily: "Roboto",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "20px",
      marginTop: "10px",
    },
    section2heading: {
      color: "#030303",
      fontFamily: "Roboto",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "24px",
      marginTop: "10px",
    },
    dateStyle: {
      color: "#2E2E2E",
      fontFamily: "Roboto",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      marginTop: "10px",
    },
    repeatImage: {
      width: "270px",
      height: "230px",

      overflow: "hidden",
      position: "relative",
      border: "2px solid #fff",
    },
    section2paraText: {
      color: "#030303",
      fontSize: "14px",
      marginLeft: "18.125rem",
      margin: "10px",
      marginBottom: "10px",
      width: "692px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",

      fontfamily: "Roboto",

      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "20px" /* 133.333% */,
      [theme.breakpoints.down("sm")]: {
        height: "00px",
        width: "300px",
        marginTop: "50px",
        marginBottom: "50px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
      },
    },
    serveceBelo: {
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      letterSpacing: "-1px",
      textTransform: "capitalize",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
    container2: {
      marginTop: "110px",
      height: "180vh",
    },
    mainContainer: {
      marginTop: "110px",
      height: "81vh",
      background: "linear-Gradient(180deg,#DECAF4 0%,#EDC9DB 100%)",

      backgroundColor: "linear-gradint(180deg,#DECAF4 0%,#EDC9DB 100%)",
    },
    mainGrid: {
      height: "100%",
      paddingLeft: "121px",
    },
    columnsGrid: {
      margin: "auto 0px",
    },
    mainText: {
      background: "linear-gradient(93deg, #6800D7 0.68%, #DC0155 65.41%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
        // padding:'20px'
      },
    },
    secondHeading: {
      fontSize: "16px",
      fontStyle: "normal",
      fontFamily: "Roboto",
      fontWeight: 500,
      lineHeight: "25px",
      color: "#333333",
      margin: "20px 0px",
    },
    columnsGridRight: {
      display: "flex",
      flexDirection: "center",
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
      height: "500px",
      position: "absolute",
      [theme.breakpoints.down("sm")]: {
        height: "00px",
        width: "300px",
      },
    },
  };
});

export default BlogPage;
