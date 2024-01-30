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
        Terms of Service for GSD Associates{" "}
      </Typography>
      <Card className={classes.mainCard}>
        <Typography variant="h6">
          Welcome to GSD Associates! These Terms of Service ("Terms") govern
          your use of our website and services provided by GSD Associates, a
          virtual assistant outsourcing company ("we," "our," or "us"). By
          accessing our website or utilizing our services, you agree to comply
          with and be bound by these Terms. Please read them carefully.
          <br />
          <br />
          <b>1. Acceptance of Terms:</b>
          <br />
          By using our website or engaging our virtual assistant services, you
          acknowledge that you have read, understood, and agree to these Terms.
          If you do not agree to these Terms, please refrain from using our
          website or services.
          <br />
          <br />
          <b>2. Description of Services:</b>
          <br />
          GSD Associates offers virtual assistant services to companies and
          business owners. Our services include administrative support, task
          management, and other assistance as needed. By engaging our services,
          you agree to provide accurate and complete information necessary for
          the proper execution of tasks.
          <br />
          <br />
          <b>3. User Registration:</b>
          <br />
          To access certain features of our services, you may be required to
          register for an account. You agree to provide accurate, current, and
          complete information during the registration process and to update
          such information to keep it accurate, current, and complete. You are
          responsible for maintaining the confidentiality of your account and
          password and for restricting access to your account.
          <br />
          <br />
          <b>4. Collection of Data:</b>
          <br />
          As part of our services, we may collect personal information to
          deliver and improve our virtual assistant services. The collection and
          use of this information are governed by our Privacy Policy. By using
          our services, you consent to the collection and use of your data in
          accordance with our Privacy Policy.
          <br />
          <br />
          <b>5. User Responsibilities:</b>
          <br />
          <ul>
            <li> Acceptable Use:</li>
            You agree to use our website and services for lawful purposes and in
            accordance with these Terms. You are responsible for complying with
            all applicable laws and regulations.
            <li>Prohibited Activities:</li>
            You must not engage in any activities that may disrupt the
            functionality of our website or services, including but not limited
            to hacking, data scraping, or any unauthorized access to our
            systems.
          </ul>
          <b>6. Fees and Payments:</b>
          <br />
          Payment details and terms for our services will be communicated during
          the engagement process. By engaging our services, you agree to the
          specified fees and payment terms.
          <br />
          <br />
          <b>7. Termination:</b>
          <br />
          We reserve the right to terminate or suspend your account and access
          to our services at our discretion, without notice, for any reason,
          including if you violate these Terms.
          <br />
          <br />
          <b>8. Intellectual Property:</b>
          <br />
          All content, trademarks, service marks, logos, and designs on our
          website are the property of GSD Associates. You may not use,
          reproduce, or distribute any content without our express written
          consent.
          <br />
          <br />
          <b>9. Limitation of Liability:</b>
          <br />
          GSD Associates is not liable for any indirect, incidental, special,
          consequential, or punitive damages, or any loss of profits or
          revenues, whether incurred directly or indirectly.
          <br />
          <br />
          <b>10. Governing Law:</b>
          <br />
          These Terms are governed by and constructed in accordance with the
          laws of U.S. Government, without regard to its conflict of law
          principles.
          <br />
          <br />
          <b>11. Changes to Terms:</b>
          <br />
          We reserve the right to update or modify these Terms at any time
          without notice. Any changes will be effective upon posting the revised
          Terms on our website. Your continued use of our services after the
          posting of changes constitutes your acceptance of those changes.
          <br />
          <br />
          <b>Contact Information:</b>
          <br />
          If you have any questions or concerns regarding these Terms, please
          contact us at
          <i> info@gsdoutsource.com</i>
          <br />
          Thank you for choosing GSD Associates! We look forward to providing
          you with excellent virtual assistant services.
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
      margin: "20px 60px 60px 60px",
      boxShadow:
        "5px 13px 27px -5px rgba(50,50,93,0.25),5px 8px 16px -8px rgba(0,0,0,0.3)",
    },
  };
});
