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
        "Lead management involves acquiring, classifying, nurturing, and converting prospects into actual customers. Efficient lead management increases conversion rates, saves time, and fosters long-term customer loyalty.",
    },
    {
      icon: <OutboundOutlinedIcon className={classes.icons2} />,
      heading: " Outbound Services",
      description:
        "Outbound Services involve actively seeking potential customers, rather than waiting for them to approach you. You can use cold calls and direct email to reach out to key prospects. Using outbound services gives you greater control, speed up the sales process, and expand your reach.",
    },
    {
      icon: <ThumbUpOutlinedIcon className={classes.icons2} />,
      heading: "Sales Enablement",
      description: `Sales Enablement significantly impacts your team's performance and success. Our Virtual Assistants automate tasks to free up the sales team for high-value activities. Additionally, we use tracking and analytics to evaluate the sales team's performance, identify areas for improvement, and optimize your sales strategy.
      Implementing Sales Enablement increases salespeople's effectiveness and sales. It also helps to facilitate consistent message delivery and product or service presentation. Eliminating manual and tedious tasks saves time and enables the sales team to focus on selling. It helps to perfect your sales processes.
      `,
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
      <AboutSection />
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
