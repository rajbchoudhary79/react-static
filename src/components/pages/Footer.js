import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { pallete } from "../css/Theme";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const { classes } = useStyles();
  return (
    <Container maxWidth={false} className={classes.mainContainer}>
      <Grid container className={classes.spaceGRid}>
        <Grid item md={3} xs={12} className={classes.logoGrid}>
          <Box className={classes.logoBox}>
            <img
              className={classes.mainLogoSize}
              alt="logo"
              src="assets/logos/gsdnewLogo.png"
            />
            <Typography className={classes.mainLogoText}>
              GSD Associates
            </Typography>
            <Typography className={classes.mainLogoPara}>
              GET.STUFF.DONE
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12} className={classes.fotterLinksGrid}>
          <Typography
            className={classes.mainTextLinks}
            onClick={() => navigate("/")}
          >
            Home
          </Typography>
          {/* <Typography className={classes.mainTextLinks}>Pricing</Typography> */}
          <Typography
            className={classes.mainTextLinks}
            onClick={() => navigate("/about-us")}
          >
            About
          </Typography>
          <Typography
            className={classes.mainTextLinks}
            onClick={() => navigate("/contact-us")}
          >
            Contact
          </Typography>
          <Typography
            className={classes.mainTextLinks}
            onClick={() => navigate("/privacy-policy")}
          >
            Privacy Policy
          </Typography>
          <Typography
            className={classes.mainTextLinks}
            onClick={() => navigate("/terms")}
          >
            Terms of service
          </Typography>
        </Grid>
        <Grid item md={3} xs={12} className={classes.fotterLinksGrid2}>
          <Box className={classes.socialIconsBox}>
            <IconButton
              className={classes.iconsBtn}
              href="https://www.facebook.com/profile.php?id=61552206075713"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlinedIcon className={classes.socialIcons} />
            </IconButton>

            <IconButton
              className={classes.iconsBtn}
              href="https://www.instagram.com/gsd.outsourcing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className={classes.socialIcons} />
            </IconButton>

            {/* <IconButton className={classes.iconsBtn}>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon className={classes.socialIcons} />
                </a>
              </IconButton> */}

            <IconButton
              className={classes.iconsBtn}
              href="https://www.linkedin.com/company/gsd-associates-get-stuff-done/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className={classes.socialIcons} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ border: "1px solid #FFF", margin: "30px 0" }} />
      <Typography className={classes.foorterAllrights} align="center">
        Copyright ® {new Date().getFullYear()} GSD Associates. All rights
        Reserved.
      </Typography>
    </Container>
  );
};

export default Footer;

const useStyles = makeStyles()((theme) => {
  return {
    spaceGRid: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        paddingLeft: "30px",
        alignItems: "start",
      },
    },
    logoGrid: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
    },
    foorterAllrights: {
      color: "#686868",
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "190.6%",
      fontFamily: "Roboto",
    },
    socialIconsBox: {
      [theme.breakpoints.down("sm")]: {
        marginTop: "20px",
      },
    },
    mainTextLinks: {
      color: "#2E2E2E",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
      padding: "5px 10px",
      fontFamily: "Roboto",
      cursor: "pointer",
      textDecoration: "none",
      transition: "color 0.3s",
      "&:hover": {
        color: `${pallete.primaryPurple}`,
      },
    },
    fotterLinksGrid: {
      display: "flex",
      flex: 2,
      justifyContent: "space-between",
      [theme.breakpoints.down("md")]: {
        marginTop: "30px",
        marginBottom: "30px",
        justifyContent: "center",
      },
      [theme.breakpoints.down("sm")]: {
        flex: 1,
      },
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
      },
    },
    fotterLinksGrid2: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
    },
    iconsBtn: {
      backgroundColor: "#FFF",
      margin: "0 5px",
      boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)",
    },
    logoBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    socialIcons: {
      height: "32px",
      width: "32px",
      color: pallete.primaryPurple,
    },
    mainContainer: {
      backgroundColor: "#F0E6FB",
      padding: "50px 0",
      bottom: "0px",
      [theme.breakpoints.down("sm")]: {
        padding: "0",
      },
    },
    mainLogoText: {
      fontSize: "28px",
      fontWeight: "600",
      lineHeight: "20px",
    },
    mainLogoPara: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "22px",
    },
    mainLogoSize: {
      width: "80px",
      height: "60px",
      [theme.breakpoints.down("sm")]: {
        paddingTop: "20px",
        width: "80px",
        height: "80px",
      },
    },
  };
});
