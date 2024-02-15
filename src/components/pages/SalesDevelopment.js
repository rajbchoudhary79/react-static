import React from "react";
import { Container } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ServicesGrid from "../css/ServicesGrid";
import AboutSection from "../elements/AboutSection";
import ServicesSection from "../elements/ServicesSection";
import WhyOurServices from "../elements/WhyOurServices";
import BookDemo from "../elements/BookDemo";
import FaqSection from "../elements/FaqSection";

const SalesDevelopment = () => {
  const { classes } = useStyles();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const servicesData = [
    {
      icon: <BackupOutlinedIcon className={classes.icons2} />,
      heading: "Prospect Data Building",
      description:
        "Prospect data building is essential for identifying and connecting with potential customers. It involves gathering valuable information about potential customers.",
    },
    {
      icon: <PermPhoneMsgOutlinedIcon className={classes.icons2} />,
      heading: "Sales Team Support",
      description:
        "Sales Support can provide prospect research, information generation, prospect follow-up, and error reduction.  ",
    },
    {
      icon: <LeaderboardOutlinedIcon className={classes.icons2} />,
      heading: "Lead Management",
      description:
        "Lead management is the process of acquiring, classifying, nurturing, and converting prospects into customers. It boosts conversion rates, saves time, and builds customer loyalty.",
    },
    {
      icon: <OutboundOutlinedIcon className={classes.icons2} />,
      heading: " Outbound Services",
      description:
        "Actively seek potential customers instead of waiting for them. Use cold calls and direct emails to reach key prospects. Gain control, speed up sales, and expand reach",
    },
    {
      icon: <ThumbUpOutlinedIcon className={classes.icons2} />,
      heading: "Sales Enablement",
      description: `Our Virtual Assistants streamline tasks, track performance, and optimize strategies to enhance your
team&#39;s effectiveness. Save time, focus on selling, and perfect your sales processes`,
    },
  ];

  return (
    <>
      <Container maxWidth={false} className={classes.mainContainer}>
        <ServicesGrid
          text1="Sales And"
          text2="Development"
          image="assets/images/sales.jpg"
        />
      </Container>
      <AboutSection
        description={`Our Sales Virtual Assistants are the ultimate strategic allies in the world of sales excellence!
With their meticulous prospect data building and expert lead management skills, our Virtual
Assistants empower your team to achieve peak performance. They help you elevate your sales
strategy, optimize lead workflows, and embrace a new era of efficiency. Transforming prospects
into loyal customers has never been easier! Don&#39;t miss out on this opportunity to take your sales
game to the next level with our Sales Virtual Assistants.`}
      />
      <ServicesSection servicesData={servicesData} />
      <WhyOurServices />
      <BookDemo />
      <FaqSection />
    </>
  );
};

export default SalesDevelopment;

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
