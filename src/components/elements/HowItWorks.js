import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Grid, useMediaQuery } from "@mui/material";
import { pallete } from "../css/Theme";
import { makeStyles } from "tss-react/mui";
import { useTheme } from "@emotion/react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function HowItWorks() {
  const steps = [
    {
      label: "Discovery Call",
      title: "Step 1",
      description: `To get started with finding the perfect assistant for you, you can join a Discovery Call with our sales team. During this call, you can discuss your requirements and they will help you identify the ideal assistant for your specific needs. `,
    },
    {
      label: "Get The Perfect Match",
      title: "Step 2",
      description:
        "Our team will work diligently to pair you with the perfect assistant. We have a deep network of highly qualified professionals and we are confident in our ability to assign the ideal team member for the job or recruit a new applicant with the desired profile. You can trust us to provide top-notch service.",
    },
    {
      label: "Initiate",
      title: "Step 3",
      description: `Facilitate the onboarding process for your virtual assistant and begin task assignments. Our administration team oversees productivity through time and performance monitoring software, conducting regular feedback sessions.`,
    },
  ];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { classes } = useStyles();
  const [activeTab, setActiveTab] = React.useState(0);

  const handleClick = (_, i) => {
    setActiveTab(i);
  };
  return (
    <Box className={classes.box}>
      <Tabs
        orientation={isSmallScreen ? "horizontal" : "vertical"}
        variant="fullWidth"
        value={activeTab}
        onChange={handleClick}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        classes={{
          flexContainer: "custom-flex-container",
        }}
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
      >
        {steps.map((step, index) => (
          <Tab
            key={step.label}
            {...a11yProps(index)}
            label={step.title}
            className={classes.tab}
            style={{
              ...(activeTab === index
                ? { border: `2px solid ${pallete.primaryPurple}` }
                : {}),
            }}
          />
        ))}
      </Tabs>
      <Box className={classes.contentWrapper}>
        {steps.map((step, index) => (
          <TabPanel key={step.label} index={index} value={activeTab}>
            <Grid item>
              <Typography variant="h5" color={pallete.primaryPurple}>
                {step.label}
              </Typography>
              <Typography>{step.description}</Typography>
            </Grid>
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}

export default HowItWorks;

const useStyles = makeStyles()((theme) => {
  return {
    box: {
      flexGrow: 1,
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },
    contentWrapper: { flexGrow: 1, display: "flex" },
    tabs: {
      borderRight: `2px solid ${pallete.primaryGray}`,
      minWidth: 350,
      display: "flex",
      height: 240,
      justifyContent: "space-between",
      padding: "0 20px",
      [theme.breakpoints.down("md")]: {
        borderRight: "none",
        borderBottom: `2px solid ${pallete.primaryGray}`,
        height: "auto",
        marginBottom: 10,
        width: '100%',
      },
    },
    tab: {
      fontWeight: "bolder",
      fontSize: "16px",
      border: `2px solid ${pallete.primaryGray}`,
      borderRadius: 12,
      [theme.breakpoints.down("md")]: {
        margin: "20px 0px",
        maxWidth: '30%'
      },
    },
  };
});
