import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import { pallete } from "../css/Theme";
import { makeStyles } from "tss-react/mui";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FaqSection() {
  const { classes } = useStyles();

  const faqs = [
    {
      question: "Where are your VAs located?",
      answer:
        "Our employees are located in Medellin for precisely these reasons. Our choice of location in this vibrant city, with its robust infrastructure, modern amenities, favorable time zone, and deep understanding of American culture, allows us to offer optimal nearshoring solutions for our clients.",
    },
    {
      question: "Is your company US-based?",
      answer:
        "Yes, our company is US-based, but all of our VAs are outsourced.",
    },
    {
      question: "How long is the contract and what is the cancellation policy?",
      answer:
        "Our contracts do not entail cancellation fees. Instead, we require a 30-day notice prior to the contract end date for termination",
    },
    {
      question: "Setup Fee?",
      answer:
        "Yes, we have a $999 setup fee, this includes the dedicated hardware and software such as VPN, TimeDoctor, Slack, Asana, Range, and many more.",
    },
    {
      question: "Do you assign VAs or do we choose them?",
      answer:
        "At GSD, we pride ourselves on our white-glove concierge approach. This means that we tailor all of our solutions to meet our client’s unique needs. Throughout this process, you have the opportunity to thoroughly evaluate and interview candidates to ensure the perfect fit for your requirements.",
    },
    {
      question: "What's the attrition rate?",
      answer:
        "At GSD, we provide competitive salary compensation that ranks among the best in the market, enabling us to attract top-tier candidates and maintain their satisfaction",
    },
    {
      question: "How is my Virtual Assistant monitored?",
      answer:
        "We confidently utilize time-tracking software to efficiently monitor the working hours of our virtual assistants (VAs). This ensures that they strictly adhere to their work schedules and that any changes to their hours are promptly approved by our administration team. If necessary, we can confidently activate the screen capture feature to ensure your VAs are focused and productive while performing their tasks.",
    },
  ];

  return (
    <Container maxWidth={false} className={classes.container}>
      <Box>
        <Typography variant="h4" className={classes.heading}>
          FAQ's
        </Typography>
      </Box>
      <Box className={classes.accordionBlock}>
        {faqs.map((faq, index) => (
          <Accordion key={index} className={classes.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight={700}>
                {`${index + 1}. ${faq.question}`}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}

export default FaqSection;

const useStyles = makeStyles()((theme) => {
  return {
    container: {
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
    accordionBlock: {
      margin: "auto",
      marginTop: "25px",
      width: "80%",
      [theme.breakpoints.down("md")]: {
        width: "90%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "95%",
      },
    },
    accordion: {
      marginBottom: "10px",
      padding: "10px",
      border: "none !important",
      borderRadius: "20px !important",
      "&:before": {
        content: "unset",
      },
    },
  };
});
