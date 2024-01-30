import {
  Typography,
  Box,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { styles } from "../css/CommonCSS";

const OpenJobs = ({ setShowJobDs }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.jobsContainer}>
      <Typography variant="h6" sx={{ paddingBottom: "10px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      <Typography variant="h5">Key Responsibilities:</Typography>
      <Box>
        <ul>
          <Typography variant="h6">
            <li>
              Collaborate closely with our Customer Success Managers to provide
              tailored performance recommendations to our clients.
            </li>
          </Typography>
          <Typography variant="h6">
            <li>
              Monitor and analyze daily account pacing to identify and address
              any issues promptly.
            </li>
          </Typography>
          <Typography variant="h6">
            <li>
              Provide responsive and helpful support through Slack and email,
              addressing pacing and performance questions to ensure client
              success.
            </li>
          </Typography>
          <Typography variant="h6">
            <li>
              Deliver impactful performance updates and recommendations to our
              customers, sharing insights and strategies for improvement.
            </li>
          </Typography>
          <Typography variant="h6">
            <li>
              Review attribution progress, analyze the Lead to Opportunity Rates
              %, and share success stories with relevant stakeholders,
              showcasing the impact of our marketing efforts.
            </li>
          </Typography>
          <Typography variant="h6">
            <li>
              Actively participate in meetings, fostering collaboration and
              sharing insights with Customer Success Managers and Customer
              Success leaders.
            </li>
          </Typography>
          <Typography variant="h6">
            <li>
              Provide monthly performance updates and competitor’s analysis to
              our customers, tailoring strategies to their unique needs.
            </li>
          </Typography>
          <Typography variant="h6">
            <li>
              Support our Customer Success Managers by providing Executive
              Business Reviews data when needed, contributing to successful
              client engagements.
            </li>
          </Typography>
          <Typography variant="h6">
            <li>
              Engage in company-wide initiatives by completing the Pulse Survey
              and actively participating in meetings, contributing to the growth
              and success of Metadata.io.
            </li>
          </Typography>
        </ul>
      </Box>
      <Typography variant="h5">Qualifications:</Typography>
      <Box>
        <ul>
          <Typography variant="h6">
            <li>Bachelor's degree in Marketing or a related field.</li>
          </Typography>
          <Typography variant="h6">
            <li>
              Proven experience as a Performance Marketing Manager or in a
              similar role.
            </li>
          </Typography>
          <Typography variant="h6">
            <li>
              Strong analytical skills and a data-driven mindset to make
              informed decisions
            </li>
          </Typography>
          <Typography variant="h6">
            <li>
              Excellent communication and interpersonal skills to effectively
              collaborate with cross-functional teams and clients.{" "}
            </li>
          </Typography>
          <Typography variant="h6">
            <li>
              Excellent communication and interpersonal skills to effectively
              collaborate with cross-functional teams and clients.{" "}
            </li>
          </Typography>
          <Typography variant="h6">
            <li>Proficiency in marketing analytics tools and platforms.</li>
          </Typography>
          <Typography variant="h6">
            <li>
              Familiarity with customer success and account management practices
              is a plus.
            </li>
          </Typography>
          <Typography variant="h6">
            <li>
              Availability to work full-time on PST, MT, EST or CT time zones.{" "}
            </li>
          </Typography>
          <Typography variant="h6">
            <li>English - Full Professional Proficiency. </li>
          </Typography>
        </ul>
      </Box>

      <Typography variant="h5">Preferred Qualifications:</Typography>
      <Box>
        <ul>
          <Typography variant="h6">
            <li>Prior experience with Metadata as a user.</li>
          </Typography>
          <Typography variant="h6">
            <li>
              {" "}
              Knowledge of digital advertising trends and emerging technologies.
            </li>
          </Typography>
          <Typography variant="h6">
            <li>
              Experience in conducting product training and educating clients on
              platform benefits.
            </li>
          </Typography>
          <Typography variant="h6">
            <li>Bachelor's degree in a related field.</li>
          </Typography>
        </ul>
      </Box>
      <Typography variant="h5">Key Responsibilities:</Typography>
      <Box>
        <ul>
          <Typography variant="h6">
            <li>100% Remote!</li>
          </Typography>
          <Typography variant="h6">
            <li>Competitive salary and benefits package.</li>
          </Typography>
          <Typography variant="h6">
            <li>
              Work with a passionate and talented team in a collaborative
              environment.
            </li>
          </Typography>
          <Typography variant="h6">
            <li>
              Opportunity to work with cutting-edge technology and innovative
              marketing strategies.
            </li>
          </Typography>
          <Typography variant="h6">
            <li>Professional development and growth opportunities.</li>
          </Typography>
          <Typography variant="h6">
            <li>Flexible work hours and remote work options.</li>
          </Typography>
          <Typography variant="h6">
            <li>
              Exciting company culture with regular team events and
              celebrations.
            </li>
          </Typography>
        </ul>
      </Box>
      <Typography variant="h5">About GSD</Typography>
      <Typography variant="h6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      <Box sx={{ padding: "40px" }}>
        <Typography align="center" variant="h3" sx={{ paddingBottom: "40px" }}>
          Apply For This Job
        </Typography>
        <Grid container sx={{ margin: "20px 0" }}>
          <Grid item md={4}>
            <Typography>First Name*</Typography>
            <TextField
              label="Your First Name"
              className={classes.inputFields}
            />
          </Grid>
          <Grid item md={4}>
            <Typography>First Name*</Typography>
            <TextField
              label="Your First Name"
              className={classes.inputFields}
            />
          </Grid>
          <Grid item md={4}>
            <Typography>Email*</Typography>
            <TextField
              label="Yourmail@example.com"
              className={classes.inputFields}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ margin: "20px 0" }}>
          <Grid item md={4}>
            <Typography>Phone No*</Typography>
            <TextField label="Your Phone No" className={classes.inputFields} />
          </Grid>
          <Grid item md={4}>
            <Typography>Upload Your Resume/CV*</Typography>
            <TextField
              label="Your First Name"
              className={classes.inputFields}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ margin: "20px 0" }}>
          <Grid item md={4}>
            <Typography>LinkedIn Profile</Typography>
            <TextField
              label="Your LinkedIn Profile"
              className={classes.inputFields}
            />
          </Grid>
          <Grid item md={4}>
            <Typography>Website</Typography>
            <TextField label="Your Website" className={classes.inputFields} />
          </Grid>
          <Grid item md={4}>
            <Typography>What are your Salary expectations? *</Typography>
            <TextField label="CTC" className={classes.inputFields} />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ ...styles.flexDRC }}>
        <Button
          onClick={() => setShowJobDs(false)}
          variant="contained"
          className={classes.submitBtn}
        >
          Submit Application
        </Button>
      </Box>
    </Box>
  );
};

export default OpenJobs;

const useStyles = makeStyles()((theme) => {
  return {
    submitBtn: {
      ...styles.buttonMain,
      borderRadius: "24px",
      padding: "10px 50px",
    },
    inputFields: {
      margin: "10px 0",
      width: "90%",
      "& .MuiOutlinedInput-root": {
        borderRadius: "12px", // Adjust as needed
      },
    },
    jobsContainer: {
      padding: "20px",
    },
  };
});
