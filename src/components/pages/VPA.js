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
        "Our virtual assistant will ensure that your commitments, important meetings, and crucial tasks are impeccably, in your calendar and will strategically schedule your meetings to avoid scheduling conflicts. You can trust that your virtual assistant will pay attention to the details so you can focus on what truly matters: growing your business. Have a personal assistant at your disposal to make your life easier.",
    },
    {
      icon: <MailOutlinedIcon className={classes.icons2} />,
      heading: "Streamline Email and Communication",
      background: "assets/background/blob-scene.svg",
      description:
        "Gain control of your communication process with our Virtual Assistants. It can organize your inbox, prioritize tasks, schedule meetings and calls, manage phone calls and business chats, and follow up with clients. Save time and experience the benefits of efficient communication today.",
    },
    {
      icon: <RocketLaunchOutlinedIcon className={classes.icons2} />,
      heading: "Proactively Manage Tasks",
      background: "assets/background/blob.svg",
      description:
        "With our Virtual Assistants, you get a reliable helper that proactively manages tasks, anticipates your needs, and ensures everything runs smoothly. Deadlines are met, important dates are remembered, and events and meetings are scheduled without a hitch. Say goodbye to scheduling conflicts and hello to a stress-free workday.",
    },
    {
      icon: <EventAvailableOutlinedIcon className={classes.icons2} />,
      heading: "Coordinate Travel and Events",
      background: "assets/background/blurry-gradient.svg",
      description:
        "Our virtual assistant can coordinate your travel and events. It can find and book flights, hotels, and ground transportation based on your preferences. For events, it can book venues, coordinate schedules, manage RSVPs, and provide reminders. It can also keep track of recurring events to ensure that everything runs smoothly.",
    },
    {
      icon: <AssessmentOutlinedIcon className={classes.icons2} />,
      heading: "Research and Reporting",
      background: "assets/background/circle-scatter.svg",
      description:
        "Gain a competitive advantage with our researchers who provide valuable information for strategic decision-making. They conduct thorough research, analyze local competition, assess market trends, and gather relevant demographic data, all presented in clear concise reports. This function also helps monitor the effectiveness of your business strategies. Gain a data-driven view of your business environment with our research and reporting function.",
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
