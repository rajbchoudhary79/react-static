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
          text1="Translation/Interpreter"
          text2="Services"
          image="assets/images/trans.jpg"
        />
      </Container>
      <AboutSection
        description={`We provide Translation and Interpretation Services that are essential for overcoming language
barriers, enabling effective communication in a globalized world, and facilitating business
expansion, international collaboration, and access to information in different languages. Our
services include document translation, which involves accurately and coherently converting

written documents such as reports, contracts, and manuals from one language to another. We
also offer oral Interpretation Services, providing interpreters to facilitate real-time communication
in meetings, conferences, phone calls, and live events. Additionally, we can help our clients
create Standard Operating Procedure (SOP) manuals for internal use.`}
      />
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
