import { Box, Button, Card, CardContent, Container, Grid, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import { pallete } from "../css/Theme";
import { styles } from "../css/CommonCSS";

function ServicesSection({ servicesData }) {
  const { classes } = useStyles();
  const [showModal, setShowModal] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <Container maxWidth={false} className={classes.servicesContainer}>
      <Box>
        <Typography variant="h4" className={classes.heading}>
          Services
        </Typography>
      </Box>
      <Grid
        container
        sx={{ ...styles.flexDRC }}
        className={classes.serviceInner}
      >
        {servicesData.map((x, index) => (
          <Grid key={index} item lg={4} sm={6} className={classes.grid}>
            <Card className={classes.serviceCard}>
              <CardContent className={classes.cardContent}>
                <Box
                  className={classes.icon}
                >
                  {x.icon}
                </Box>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.gridHeading}
                >
                  {x.heading}
                </Typography>
                <Typography variant="p" align="center">
                  {x.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ServicesSection;

const useStyles = makeStyles()((theme) => {
  return {
    servicesContainer: {
      padding: "50px !important",
      background: "#F7F7FD",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        padding: "30px 40px !important",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "30px 0px !important",
      },
    },
    heading: {
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      textTransform: "capitalize",
      textAlign: "center",
      color: `${pallete.primaryPurple}`,
      [theme.breakpoints.down("md")]: {
        fontSize: "30px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
      },
    },
    serviceInner: {
      marginTop: "20px",
      justifyContent: "center",
    },
    grid: {
      ...styles.flexDCC,
      padding: "15px",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    serviceCard: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      background: "#ffffff",
      boxShadow: "28px 38px 40px -11px rgba(55,46,206,.1)",
      borderRadius: "30px",
      padding: "15px",
      // aspectRatio: 1,
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
    },
    cardContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    gridHeading: {
      padding: "10px",
      fontWeight: 700,
      letterSpacing: "0.5px",
      color: `${pallete.primaryPurple}`,
      cursor: "pointer",
      [theme.breakpoints.down("md")]: {
        textAlign: "left",
      },
    },
    icon: {
      ...styles.flexDRC,
      borderRadius: "50%",
      cursor: "pointer",
      padding: "15px",
      margin: "10px 0",
      background: "rgba(40,50,90,0.05)",
      width: "80px",
      aspectRatio: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});
