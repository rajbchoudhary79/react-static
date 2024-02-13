import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  CardActionArea,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import CardMedia from "@mui/material/CardMedia";
import { pallete } from "../css/Theme";
import functions from "../../config/functions";
import { Link, useNavigate } from "react-router-dom";

const BlogPage = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const blogs = functions.getBlogs();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/*!section-1*/}

      <Container maxWidth={false} className={classes.mainContainer}>
        <Grid container className={classes.mainGrid}>
          <Grid item md={5} className={classes.columnsGrid}>
            <Typography className={classes.mainText}>
              How Virtual Assistants Transformed Businesses: An Exciting Journey
              of Innovation and Success
            </Typography>
            <Typography className={classes.secondHeading}>
              The world of work and productivity is always changing, and Virtual
              Assistants (VAs) have become a valuable asset, driving innovation
              and paving the way for unprecedented success. Come with us as we
              explore inspiring stories of transformation and innovation,
              highlighting the crucial role that VAs play in shaping the future
              of work.
            </Typography>
          </Grid>
          <Grid item md={7} className={classes.columnsGridRight}>
            <img
              alt="boy"
              src="assets/images/blogPage/image2girl1boy.png"
              className={classes.homemenImg}
            />
          </Grid>
        </Grid>
      </Container>

      {/*!section-2*/}

      <Container maxWidth={false} className={classes.blogsSection}>
        <Box>
          {/* Headline */}
          <Typography
            variant="h4"
            align="center"
            color="primary"
            gutterBottom
            style={{ width: "100%", marginBottom: "20px" }}
          >
            Popular <span style={{ color: "black" }}>Topics</span>
          </Typography>

          {/* Description */}
          {/* <Typography variant="body2" align="center" paragraph>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.
            </Typography> */}
        </Box>
        <Grid container className={classes.cardGrid}>
          {/* Blog Cards */}
          {blogs.map((blog, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ padding: "10px" }}
            >
              <Card
                className={classes.blogCard}
                onClick={() => navigate(`/blogs/${blog.slug}`)}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={blog.image}
                    alt={blog.title}
                    className={classes.blogImage}
                  />
                  <CardContent>
                    {/* Date */}
                    {blog.date && (
                      <Typography variant="body2" color="text.secondary">
                        {blog.date}
                      </Typography>
                    )}

                    {/* Title */}
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className={classes.blogTitle}
                    >
                      <Link
                        to={`/blogs/${blog.slug}`}
                        style={{ textDecoration: "none" }}
                      >
                        {blog.title}
                      </Link>
                    </Typography>

                    {/* Description */}
                    <Typography variant="body2" color="text.secondary">
                      {blog.description}
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
    </>
  );
};
const useStyles = makeStyles()((theme) => {
  return {
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
    image: {
      width: "100%",
      height: "auto",
      marginBottom: theme.spacing(2),
      borderRadius: theme.spacing(1), // Optional: Add rounded corners
    },
    content: {
      marginLeft: theme.spacing(2),
    },
    blogsSection: {
      padding: "50px 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    cardGrid: {
      justifyContent: "start",
      alignItems: "center",
      padding: "0 16px",
      [theme.breakpoints.down("sm")]: {
        padding: "0 30px",
        justifyContent: "center",
      },
      [theme.breakpoints.down("xs")]: {
        padding: "0 10px",
      },
    },
    blogCard: {
      boxShadow: "28px 38px 40px -11px rgba(55,46,206,.1)",
      backgroundColor: "#fafafa",
      borderRadius: "15px",
    },
    blogImage: {
      height: "50%",
      maxHeight: "240px",
    },
    blogTitle: {
      color: `${pallete.primaryPurple}`,
    },
    mainContainer: {
      marginTop: "110px",
      height: "660px",
      background: "linear-Gradient(180deg,#DECAF4 0%,#EDC9DB 100%)",
      backgroundColor: "linear-gradint(180deg,#DECAF4 0%,#EDC9DB 100%)",
      [theme.breakpoints.down("lg")]: {
        height: "auto",
      },
      [theme.breakpoints.down("sm")]: {
        padding: 0,
      },
    },
    mainGrid: {
      height: "100%",
      width: "100%",
      paddingLeft: "26px",
      [theme.breakpoints.down("lg")]: {
        padding: "0 30px",
      },
      [theme.breakpoints.down("xs")]: {
        padding: "0 20px",
      },
    },
    columnsGrid: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "50px 0",
      [theme.breakpoints.down("lg")]: {
        padding: "0",
      },
    },
    mainText: {
      background: "linear-gradient(93deg, #6800D7 0.68%, #DC0155 65.41%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      margin: "1em 0",
      [theme.breakpoints.down("lg")]: {
        fontSize: "35px",
        margin: "0",
        marginTop: "1em",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "25px",
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
      alignItems: "center",
      padding: "50px 0",
      [theme.breakpoints.down("lg")]: {
        padding: 0,
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
      width: "100%",
      objectFit: "cover",
    },
  };
});

export default BlogPage;
