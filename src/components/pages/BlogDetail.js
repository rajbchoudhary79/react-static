import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { styles } from "../css/CommonCSS";
import functions from "../../config/functions";
import { useNavigate, useParams } from "react-router-dom";
import { pallete } from "../css/Theme";

function BlogDetail() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const { slug } = useParams();
  const blog = functions.getBlogs(slug);
  if (!blog) {
    navigate("/blogs");
  }
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Container maxWidth={false} className={classes.mainContainer}>
        <Grid container className={classes.mainGrid}>
          <Grid item md={6} className={classes.textGrid}>
            <Typography className={classes.mainText}>{blog.title}</Typography>
          </Grid>
          <Grid item md={6} className={classes.imageBox}>
            <Box
              component="img"
              className={classes.imageTop}
              src={blog.image}
              alt="Descriptive Alt Text"
            />
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.mainContent}>
        <Grid container className={classes.contentGrid}>
          <Grid item md={12}>
            <Card className={classes.contentInner}>
              <Typography
                variant="h5"
                sx={{ color: pallete.primaryPurple, mt: 1, mb: 1 }}
              >
                Redefining Healthcare Operations
              </Typography>
              <Typography variant="body1">
                In the healthcare sector, precision and efficiency are crucial.
                Virtual Assistants dedicated to healthcare tasks have
                revolutionized the industry by handling administrative
                intricacies. From appointment scheduling to patient
                communication, these VAs allow healthcare professionals to focus
                on what matters most – delivering exceptional patient care.
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: pallete.primaryPurple, mt: 2, mb: 1 }}
              >
                Shaping the Future of Work
              </Typography>
              <Typography variant="body1">
                The stories of businesses that have embraced Virtual Assistants
                highlight a broader trend – the future of work is evolving. The
                integration of VAs into business operations signifies a shift
                towards a more agile, efficient, and tech-savvy work
                environment. As businesses continue to adapt, Virtual Assistants
                will play an increasingly pivotal role in shaping this
                transformative journey.
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: pallete.primaryPurple, mt: 2, mb: 1 }}
              >
                Embrace the Future with Virtual Assistants
              </Typography>
              <Typography variant="body1">
                As we conclude our exploration of how Virtual Assistants have
                transformed businesses, it's clear that these dynamic
                professionals are not just support staff; they are catalysts for
                innovation and success. Businesses that recognize and embrace
                the potential of Virtual Assistants are not only staying ahead
                of the curve but actively shaping the future of work.
              </Typography>
              <Typography variant="body1">
                In a world where adaptability is key, the transformative journey
                of businesses with Virtual Assistants serves as an inspiration
                for others to explore the boundless possibilities that lie
                ahead. Join the revolution, harness the power of Virtual
                Assistants, and elevate your business to unprecedented heights.
                The future of work is here, and Virtual Assistants are leading
                the way!
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BlogDetail;

const useStyles = makeStyles()((theme) => {
  return {
    mainContainer: {
      marginTop: "110px",
      height: "660px",
      backgroundColor: "#F0E6FB",
      padding: "0 !important",
      [theme.breakpoints.down("md")]: {
        height: "auto",
      },
    },
    textGrid: {
      ...styles.flexDRC,
      width: "100%",
      height: "100%",
      [theme.breakpoints.down("lg")]: {
        height: "auto",
        margin: "25px 0",
      },
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
      margin: "auto 30px",
      [theme.breakpoints.down("md")]: {
        fontSize: "40px",
        margin: "20px 0",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
        margin: "20px 0",
        padding: "0 20px",
        textAlign: "center",
      },
    },
    mainGrid: {
      height: "100%",
    },
    imageBox: {
      position: "relative",
      width: "100%",
      [theme.breakpoints.up("md")]: {
        "&:before": {
          content: '""',
          backgroundImage:
            "linear-gradient(to right, rgb(240 230 251), rgb(240 230 251 / 0%))",
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
    imageTop: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
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
    mainContent: {},
    contentGrid: {
      padding: "40px",
      display: "flex", // Set the container to be a flex container
      flexDirection: "row", // Align children in a row
      [theme.breakpoints.down("md")]: {
        padding: "20px",
      },
    },
    contentInner: {
      padding: "40px",
      background: "#F7F7FD",
      boxShadow: "28px 38px 40px -11px rgba(55,46,206,.1)",
      borderRadius: "30px",
    },
  };
});
