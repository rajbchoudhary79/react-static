import React from "react";
import { Container, Box, Typography, Grid, Card } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { styles } from "../css/CommonCSS";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

// useStyles hook to define component styles
const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "100vh",
    paddingTop: "120px",
    backgroundColor: "#f0f4f8", // Replace with your desired background color
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      // paddingBottom:"200px"
    },
  },
  card: {
    textAlign: "center",
    padding: "30px",
    color: theme.palette.text.secondary,
    boxShadow:
      "0 13px 27px -5px rgba(50,50,93,0.25),0 8px 16px -8px rgba(0,0,0,0.3)",
    borderRadius: "12px",
    // minHeight: '400px'
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cardIcon: {
    marginBottom: "5px",
    height: "80px",
  },
  cardButton: {
    marginTop: theme.spacing(2),
  },
}));

const ContactSection = () => {
  const { classes } = useStyles();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Card data could be mapped from an array
  const cardInfo = [
    {
      title: "Sales",
      description: "We’d love to talk about how we can work together.",
      buttonText: "Contact sales",
      icon: "assets/icons/salesNew.svg",
      belowText: "Call Us",
      belowData: "+57 301 551 4257",
      iconb: <CallRoundedIcon sx={{ fontSize: "30px" }} />,
    },
    {
      title: "Help & Support",
      description: "We’re here to help with any questions or code.",
      buttonText: "Contact support",
      icon: "assets/icons/supprtNew.svg",
      belowText: "Email Us",
      belowData: "info@gsdoutsource.com",
      iconb: <MailRoundedIcon sx={{ fontSize: "30px" }} />,
    },
  ];

  return (
    <Container maxWidth={false} className={classes.root}>
      <Box sx={{ padding: "20px 0" }}>
        <Typography color="primary" variant="h4" align="center">
          Connect Us
        </Typography>
        <Typography variant="h6" align="center">
          Get in touch and let us know how we can help
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ ...styles.flexDRC, padding: "50px 0" }}>
        {cardInfo.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card}>
            <Card className={classes.card}>
              <Box className={classes.cardContent}>
                <Box
                  component="img"
                  src={card.icon}
                  alt={card.title}
                  className={classes.cardIcon}
                />
                <Typography
                  variant="h3"
                  sx={{ padding: "0 0 25px 0" }}
                  color="primary"
                >
                  {card.title}
                </Typography>
                <Typography variant="h6">{card.description}</Typography>
              </Box>
            </Card>
            <Box sx={{ padding: "20px 10px" }}>
              <Box sx={{ ...styles.flexDR }}>
                <Box>{card.iconb}</Box>
                <Typography variant="h5" sx={{ margin: "auto 5px" }}>
                  {card.belowText}
                </Typography>
              </Box>
              <Typography variant="h6">{card.belowData}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box></Box>
    </Container>
  );
};

export default ContactSection;
