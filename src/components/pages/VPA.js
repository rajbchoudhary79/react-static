import React from "react";
import { Container } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ServicesGrid from "../css/ServicesGrid";
import BookDemo from "../elements/BookDemo";
import AboutSection from "../elements/AboutSection";
import ServicesSection from "../elements/ServicesSection";
import WhyOurServices from "../elements/WhyOurServices";
import FaqSection from "../elements/FaqSection";

const Services = () => {
  const { classes } = useStyles();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const servicesData = [
    {
      icon: <PermContactCalendarOutlinedIcon className={classes.icons2} />,
      heading: `Efficiently Manage Your Schedule`,
      background: "assets/background/blob-scene-1.svg",
      description:
        "Let us handle your calendar, meetings, and tasks seamlessly. Our Virtual Assistants ensure no conflicts, strategically schedule meetings, and pay attention to detail, freeing you to focus on business growth. Experience the ease of having a personal assistant at your service.",
    },
    {
      icon: <MailOutlinedIcon className={classes.icons2} />,
      heading: "Streamline Email and Communication",
      background: "assets/background/blob-scene.svg",
      description:
        "Let our Virtual Assistants take charge of your email and communication tasks. From organizing your inbox to scheduling meetings and following up with clients, we&#39;ve got you covered. Save time and enjoy seamless communication today!",
    },
    {
      icon: <RocketLaunchOutlinedIcon className={classes.icons2} />,
      heading: "Proactively Manage Tasks",
      background: "assets/background/blob.svg",
      description:
        "Our Virtual Assistants proactively manage tasks, anticipate your needs, and ensure smooth operations. Say goodbye to scheduling conflicts and hello to a stress-free workday.",
    },
    {
      icon: <EventAvailableOutlinedIcon className={classes.icons2} />,
      heading: "Coordinate Travel and Events",
      background: "assets/background/blurry-gradient.svg",
      description:
        "Our virtual assistant handles all aspects of travel and event planning, from booking flights and hotels to coordinating schedules and managing RSVPs. Let us take care of the details so you can focus on what matters most",
    },
    {
      icon: <AssessmentOutlinedIcon className={classes.icons2} />,
      heading: "Research and Reporting",
      background: "assets/background/circle-scatter.svg",
      description:
        "Gain a competitive edge with our research team. They analyze market trends, assess competition, and deliver concise reports for strategic decision-making. Monitor business strategies effectively with data- driven insights.",
    },
    {
      icon: <ManageAccountsOutlinedIcon className={classes.icons2} />,
      heading: "Vendor and Financial Management",
      background: "assets/background/wave.svg",
      description:
        "Our Virtual Assistants can manage suppliers, track invoices, and ensure prompt payments. Avoid delays and late fees, maintain robust supplier relationships, and save money by reviewing expenses with our help.",
    },
  ];

  return (
    <>
      <Container maxWidth={false} className={classes.mainContainer}>
        <ServicesGrid
          text1="Virtual Private"
          text2="Assistant"
          image="assets/images/vpa.jpg"
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

export default Services;

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
