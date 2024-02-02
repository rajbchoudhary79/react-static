import React from "react";
import { Container } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import ServicesGrid from "../css/ServicesGrid";
import AboutSection from "../elements/AboutSection";
import WhyOurServices from "../elements/WhyOurServices";
import BookDemo from "../elements/BookDemo";
import FaqSection from "../elements/FaqSection";

const HealthCareServices = () => {
  const { classes } = useStyles();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Container maxWidth={false} className={classes.mainContainer}>
        <ServicesGrid
          text1="Virtual Receptionist"
          text2="Services"
          image="assets/images/rescption.jpg"
        />
      </Container>
      <AboutSection />
      <WhyOurServices />
      <BookDemo />
      <FaqSection />
    </>
  );
};

export default HealthCareServices;

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
  };
});
