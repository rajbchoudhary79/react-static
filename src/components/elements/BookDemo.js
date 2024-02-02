import { Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { pallete } from "../css/Theme";
import { makeStyles } from "tss-react/mui";
import { styles } from "../css/CommonCSS";

function BookDemo() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  return (
    <Container maxWidth={false} className={classes.container}>
      <Grid
        container
        md={8}
        sx={{
          backgroundColor: pallete.primaryPurple,
          borderRadius: "12px",
        }}
        className={classes.contentBlock}
      >
        <Grid item md={9}>
          <Box className={classes.content}>
            <Typography className={classes.heading}>
              Book a Discovery Call
            </Typography>
            <Divider variant="inset" className={classes.divider} />
            <Typography className={classes.description}>
              Discover how our Virtual Assistants can help you streamline your
              tasks and achieve more in less time.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={3} className={classes.btnBlock}>
          <Button
            onClick={() => navigate("/book-demo")}
            variant="contained"
            className={classes.button}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BookDemo;

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      margin: "100px 0",
    },
    contentBlock: {
        margin: 'auto',
      [theme.breakpoints.down("md")]: {
        padding: "20px 10px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "50px 0px",
      },
    },
    content: {
      padding: "40px 40px",
    },
    heading: {
      color: "#FFFFFF",
      fontSize: "26px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      fontFamily: "Montserrat",
    },
    divider: {
      width: "48px",
      height: "4px",
      backgroundColor: "#fff", // Replace with your desired color
      margin: theme.spacing(1, 0),
      borderRadius: "2px",
    },
    description: {
      color: "#FFFFFF",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      fontFamily: "Roboto",
    },
    btnBlock: {
      margin: "auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    button: {
      ...styles.buttonMain,
      backgroundColor: "#fff",
      color: "#737373",
      "&:hover": {
        backgroundColor: "#fff",
        color: "#737373",
      },
    },
  };
})