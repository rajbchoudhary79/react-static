import React from "react";
import { Container } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import WebhookOutlinedIcon from "@mui/icons-material/WebhookOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import MiscellaneousServicesOutlinedIcon from "@mui/icons-material/MiscellaneousServicesOutlined";
import ServicesGrid from "../css/ServicesGrid";
import AboutSection from "../elements/AboutSection";
import ServicesSection from "../elements/ServicesSection";
import WhyOurServices from "../elements/WhyOurServices";
import BookDemo from "../elements/BookDemo";
import FaqSection from "../elements/FaqSection";

const SocialMediaManagement = () => {
  const { classes } = useStyles();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const servicesData = [
    {
      icon: <FindInPageOutlinedIcon className={classes.icons2} />,
      heading: "Market Research",
      description:
        "We conduct in-depth market research to understand your industry landscape, target audience, and competitors, providing valuable insights to shape your marketing strategy. ",
    },
    {
      icon: <WebhookOutlinedIcon className={classes.icons2} />,
      heading: "Strategy Development",
      description:
        "Our team formulates customized marketing strategies tailored to your business objectives, ensuring a roadmap for success that aligns with your brand's vision. ",
    },
    {
      icon: <PeopleOutlinedIcon className={classes.icons2} />,
      heading: "Engagement",
      description:
        "We create engaging campaigns and initiatives to connect with your audience across various channels, fostering meaningful interactions and building brand loyalty.",
    },
    {
      icon: <InsightsOutlinedIcon className={classes.icons2} />,
      heading: "Strategy Analysis",
      description:
        "Continuous analysis of marketing strategies, performance metrics, and industry trends to refine and optimize your approach, ensuring maximum effectiveness.",
    },
    {
      icon: <AdsClickOutlinedIcon className={classes.icons2} />,
      heading: "Content Management",
      description:
        "From creation to distribution, we handle all aspects of content management, ensuring your brand message resonates effectively with your target audience",
    },
    {
      icon: <MiscellaneousServicesOutlinedIcon className={classes.icons2} />,
      heading: "Concierge Service and Content Auditing",
      description:
        "Our Service provides personalized assistance, and our content auditing ensures that your content meets the highest standards, maintaining consistency and quality.",
    },
  ];

  return (
    <>
      <Container maxWidth={false} className={classes.mainContainer}>
        <ServicesGrid
          text1="Social Media"
          text2="Management"
          image="assets/images/manage.jpg"
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

export default SocialMediaManagement;

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
