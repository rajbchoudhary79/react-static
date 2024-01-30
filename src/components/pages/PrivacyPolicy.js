import React from "react";
import { Card, Container, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const PrivacyPolicy = () => {
  const { classes } = useStyles();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Container maxWidth={false} className={classes.mainCOntainer}>
      <Typography align="center" variant="h4" color="primary">
        Privacy Policy
      </Typography>
      <Card className={classes.mainCard}>
        <Typography variant="h6">
          GSD Associates, a leading outsourcing company specializing in virtual
          assistants for businesses, values and respects your privacy. This
          Privacy Policy outlines how GSD Associates ("we," "our," or "us")
          collects, uses, and protects the information obtained through our
          website. By using our services, you agree to the terms of this Privacy
          Policy.
          <br />
          <br />
          <b>1. Information We Collect:</b>
          <br />
          <ul>
            <li> Personal Information:</li>
            We collect personal information directly from you when you interact
            with our website or submit requests for our virtual assistant
            services. This may include your name, contact details, business
            information, and any other necessary details.
            <li>Job Application Information:</li>
            When you apply for a virtual assistant position through our website,
            we collect information such as your resume, cover letter, and other
            details relevant to the job application process.
          </ul>
          <b>2. How We Use Your Information:</b>
          <ul>
            <li>Providing Services:</li>
            We use the information collected to deliver virtual assistant
            services as requested. This includes communicating with you,
            managing tasks, and ensuring the quality of our services.
            <li>Job Applications:</li>
            Information provided during the job application process is used
            solely for evaluating your suitability for employment with GSD
            Associates.
          </ul>
          <b>3. How We Protect Your Information:</b>
          <br />
          We employ industry-standard security measures to safeguard your
          information. While we take reasonable steps to protect data, no method
          of transmission or storage is completely secure. We continually assess
          and update our security measures to ensure the integrity of your
          information.
          <br />
          <br />
          <b>4. Sharing Your Information:</b>
          <ul>
            <li>Third-Party Service Providers:</li>
            We may share your information with third-party service providers
            necessary for delivering our services, such as payment processors,
            hosting providers, and technology partners.
            <li>Business Transactions: </li>
            In the event of a merger, acquisition, or sale of our business, your
            information may be transferred as part of the transaction.
            <li>Legal Compliance:</li>
            We may disclose your information if required by law or in response
            to legal processes, such as court orders or subpoenas.
          </ul>
          <b>5. Cookies and Tracking Technologies:</b>
          <br />
          We use cookies and similar technologies to enhance your experience on
          our website. These technologies help us analyze website traffic,
          customize content, and improve overall functionality. You can manage
          your cookie preferences through your browser settings.
          <br />
          <br />
          <b>6. Your Choices:</b>
          <ul>
            <li>Opt-Out:</li>
            You can opt-out of receiving promotional communications by following
            the unsubscribe instructions in our emails. However, certain
            service-related communications are essential and cannot be opted out
            of.
            <li>Review and Modification:</li>
            To review or modify your personal information, please contact us at
            info@gsdoutsource.com. We will make commercially reasonable efforts
            to accommodate your requests.
          </ul>
          <b>7. Children's Privacy:</b>
          <br />
          Our services are not intended for individuals under the age of 13. We
          do not knowingly collect personal information from children. If we
          become aware of such data, we will take prompt steps to delete it.
          <br />
          <br />
          <b>8. Changes to this Privacy Policy:</b>
          <br />
          We reserve the right to update this Privacy Policy periodically. Any
          changes will be posted on our website, and the date of the last update
          will be indicated. We encourage you to review this policy regularly.
          <br />
          <br />
          <b>9. Contact Information:</b>
          <br />
          For questions or concerns regarding this Privacy Policy, please
          contact us at info@gsdoutsource.com. Thank you for entrusting GSD
          Associates with your privacy. We are committed to ensuring the
          security and confidentiality of your information.
        </Typography>
      </Card>
    </Container>
  );
};

export default PrivacyPolicy;

const useStyles = makeStyles()((theme) => {
  return {
    mainCOntainer: {
      marginTop: "150px",
    },
    mainCard: {
      background: "#F0F3F4",
      padding: "50px",
      margin: "40px 60px 80px 60px",
      boxShadow:
        "5px 13px 27px -5px rgba(50,50,93,0.25),5px 8px 16px -8px rgba(0,0,0,0.3)",
    },
  };
});
