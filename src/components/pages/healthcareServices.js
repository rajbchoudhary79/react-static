import React from "react";
import { Container } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";
import DomainVerificationOutlinedIcon from "@mui/icons-material/DomainVerificationOutlined";
import ServicesGrid from "../css/ServicesGrid";
import BookDemo from "../elements/BookDemo";
import WhyOurServices from "../elements/WhyOurServices";
import ServicesSection from "../elements/ServicesSection";
import AboutSection from "../elements/AboutSection";
import FaqSection from "../elements/FaqSection";

const HealthCareServices = () => {
  const { classes } = useStyles();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const servicesData = [
    {
      icon: <Diversity3OutlinedIcon className={classes.icons2} />,
      heading: "Patient Engagement",
      description:
        "Our Virtual Medical Assistants facilitate communication, educate patients, ensure treatment adherence, and maintain accurate records. They empower patients to understand their medical care and make informed health decisions",
    },
    {
      icon: <ManageAccountsOutlinedIcon className={classes.icons2} />,
      heading: "EMR Schedule Management",
      description:
        "Our Virtual Medical Assistant collects medical data, updates records, schedules appointments and sends reminders to patients.",
    },
    {
      icon: <LocalHospitalOutlinedIcon className={classes.icons2} />,
      heading: "Hygiene Recare (Dental)",
      description:
        "Our Virtual Medical Assistant quickly collects medical and administrative data, updates electronic medical records, schedules appointments, and sends automated reminders to patients.",
    },
    {
      icon: <PsychologyAltOutlinedIcon className={classes.icons2} />,
      heading: "Information Capture",
      description:
        "Our Virtual Medical Assistant streamlines data collection, updates electronic medical records, schedules appointments, and sends reminders to patients.",
    },
    {
      icon: <OutboundOutlinedIcon className={classes.icons2} />,
      heading: "Outbound Lead Management",
      description:
        "Our Virtual Medical Assistant service proactively identifies, communicates with, and nurtures potential leads, while also providing follow-up after patient visits, ensuring satisfaction.",
    },
    {
      icon: <DomainVerificationOutlinedIcon className={classes.icons2} />,
      heading: "Insurance Verification & Eligibility",
      description:
        "Our Virtual Medical Assistants facilitate communication, educate patients, promote adherence, and maintain accurate records. They help patients understand their care and make informed decisions",
    },
  ];

  return (
    <>
      <Container maxWidth={false} className={classes.mainContainer}>
        <ServicesGrid
          text1="Healthcare (VA)"
          text2="Medical Assistant"
          image="assets/images/healts.jpg"
        />
      </Container>
      <AboutSection
        description={`Welcome to the future of healthcare support with our specialized Healthcare Virtual Assistants! Our
advanced virtual assistants are designed to streamline your daily work. Whether it&#39;s capturing information
or managing outbound leads, our virtual assistants have got you covered. With our assistance, you can
easily verify insurance and eligibility checks, allowing your healthcare practice to operate smoothly. Our
Healthcare Virtual Assistant is the perfect solution for the unique demands of the healthcare landscape,
providing a comprehensive and efficient approach to medical operations.`}
      />
      <ServicesSection servicesData={servicesData} />
      <WhyOurServices />
      <BookDemo />
      <FaqSection />
    </>
  );
};

export default HealthCareServices;

const useStyles = makeStyles()((theme) => {
  return {
    icons2: {
      fontSize: "50px",
      color: "#EF2A82",
    },
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
